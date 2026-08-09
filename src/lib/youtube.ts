type YouTubeThumbnail = {
  url: string;
  width?: number;
  height?: number;
};

type YouTubePlaylistItem = {
  snippet?: {
    title?: string;
    publishedAt?: string;
    resourceId?: {
      videoId?: string;
    };
    thumbnails?: Record<string, YouTubeThumbnail>;
  };
};

type PlaylistItemsResponse = {
  items?: YouTubePlaylistItem[];
  nextPageToken?: string;
};

type YouTubeChannel = {
  id?: string;
  snippet?: {
    title?: string;
    customUrl?: string;
    thumbnails?: Record<string, YouTubeThumbnail>;
  };
  contentDetails?: {
    relatedPlaylists?: {
      uploads?: string;
    };
  };
  statistics?: {
    subscriberCount?: string;
    hiddenSubscriberCount?: boolean;
    videoCount?: string;
    viewCount?: string;
  };
};

type ChannelResponse = {
  items?: YouTubeChannel[];
};

export type YouTubePortfolioItem = {
  id: string;
  title: string;
  category: "videography";
  tags: string[];
  year?: string;
  href: string;
  thumbnail: string;
  source: "youtube";
};

export type YouTubeChannelSummary = {
  title: string;
  handle: string;
  href: string;
  thumbnail?: string;
  subscriberCount?: number;
  videoCount?: number;
  viewCount?: number;
  hiddenSubscriberCount: boolean;
};

export type YouTubePortfolioData = {
  items: YouTubePortfolioItem[];
  channel?: YouTubeChannelSummary;
};

const YOUTUBE_API_BASE = "https://www.googleapis.com/youtube/v3";
const DEFAULT_YOUTUBE_HANDLE = "@TheHomeBasePH";
const DEFAULT_YOUTUBE_URL = "https://www.youtube.com/@TheHomeBasePH";

function pickThumbnail(thumbnails?: Record<string, YouTubeThumbnail>) {
  if (!thumbnails) return undefined;

  return (
    thumbnails.maxres?.url ??
    thumbnails.standard?.url ??
    thumbnails.high?.url ??
    thumbnails.medium?.url ??
    thumbnails.default?.url
  );
}

function parseCount(value?: string) {
  if (!value) return undefined;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : undefined;
}

async function getChannel(apiKey: string) {
  const configuredChannelId = process.env.YOUTUBE_CHANNEL_ID;
  const handle = process.env.YOUTUBE_HANDLE || DEFAULT_YOUTUBE_HANDLE;
  const url = new URL(`${YOUTUBE_API_BASE}/channels`);

  url.searchParams.set("part", "snippet,contentDetails,statistics");
  if (configuredChannelId) {
    url.searchParams.set("id", configuredChannelId);
  } else {
    url.searchParams.set("forHandle", handle);
  }
  url.searchParams.set("key", apiKey);

  const response = await fetch(url, { next: { revalidate: 3600 } });

  if (!response.ok) {
    throw new Error(`YouTube channels.list failed with ${response.status}`);
  }

  const data = (await response.json()) as ChannelResponse;
  return data.items?.[0];
}

async function getPlaylistItems(apiKey: string, playlistId: string) {
  const items: YouTubePlaylistItem[] = [];
  let pageToken: string | undefined;

  do {
    const url = new URL(`${YOUTUBE_API_BASE}/playlistItems`);
    url.searchParams.set("part", "snippet");
    url.searchParams.set("playlistId", playlistId);
    url.searchParams.set("maxResults", "50");
    url.searchParams.set("key", apiKey);

    if (pageToken) url.searchParams.set("pageToken", pageToken);

    const response = await fetch(url, { next: { revalidate: 3600 } });

    if (!response.ok) {
      throw new Error(`YouTube playlistItems.list failed with ${response.status}`);
    }

    const data = (await response.json()) as PlaylistItemsResponse;
    items.push(...(data.items ?? []));
    pageToken = data.nextPageToken;
  } while (pageToken);

  return items;
}

function normalizePortfolioItems(playlistItems: YouTubePlaylistItem[]): YouTubePortfolioItem[] {
  return playlistItems.flatMap((item) => {
    const videoId = item.snippet?.resourceId?.videoId;
    const title = item.snippet?.title;
    const thumbnail = pickThumbnail(item.snippet?.thumbnails);
    const publishedAt = item.snippet?.publishedAt;

    if (!videoId || !title || !thumbnail) return [];

    return [
      {
        id: `youtube-${videoId}`,
        title,
        category: "videography" as const,
        tags: ["videography", "youtube", "video"],
        year: publishedAt ? new Date(publishedAt).getUTCFullYear().toString() : undefined,
        href: `https://www.youtube.com/watch?v=${videoId}`,
        thumbnail,
        source: "youtube" as const,
      },
    ];
  });
}

export async function getYouTubePortfolioData(): Promise<YouTubePortfolioData> {
  const apiKey = process.env.YOUTUBE_API_KEY;

  if (!apiKey) return { items: [] };

  try {
    const channel = await getChannel(apiKey);
    const configuredUploadsPlaylistId = process.env.YOUTUBE_UPLOADS_PLAYLIST_ID;
    const playlistId = configuredUploadsPlaylistId ?? channel?.contentDetails?.relatedPlaylists?.uploads;

    const playlistItems = playlistId ? await getPlaylistItems(apiKey, playlistId) : [];
    const handle = process.env.YOUTUBE_HANDLE || DEFAULT_YOUTUBE_HANDLE;

    return {
      items: normalizePortfolioItems(playlistItems),
      channel: channel
        ? {
            title: channel.snippet?.title ?? "The Home Base PH",
            handle,
            href: DEFAULT_YOUTUBE_URL,
            thumbnail: pickThumbnail(channel.snippet?.thumbnails),
            subscriberCount: parseCount(channel.statistics?.subscriberCount),
            videoCount: parseCount(channel.statistics?.videoCount),
            viewCount: parseCount(channel.statistics?.viewCount),
            hiddenSubscriberCount: channel.statistics?.hiddenSubscriberCount ?? false,
          }
        : undefined,
    };
  } catch (error) {
    console.error("Unable to load YouTube portfolio data:", error);
    return { items: [] };
  }
}

export async function getYouTubePortfolioItems(): Promise<YouTubePortfolioItem[]> {
  return (await getYouTubePortfolioData()).items;
}
