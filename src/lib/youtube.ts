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

type ChannelResponse = {
  items?: Array<{
    contentDetails?: {
      relatedPlaylists?: {
        uploads?: string;
      };
    };
  }>;
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

const YOUTUBE_API_BASE = "https://www.googleapis.com/youtube/v3";

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

async function getUploadsPlaylistId(apiKey: string, channelId: string) {
  const url = new URL(`${YOUTUBE_API_BASE}/channels`);
  url.searchParams.set("part", "contentDetails");
  url.searchParams.set("id", channelId);
  url.searchParams.set("key", apiKey);

  const response = await fetch(url, { next: { revalidate: 3600 } });

  if (!response.ok) {
    throw new Error(`YouTube channels.list failed with ${response.status}`);
  }

  const data = (await response.json()) as ChannelResponse;
  return data.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
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

export async function getYouTubePortfolioItems(): Promise<YouTubePortfolioItem[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;
  const configuredUploadsPlaylistId = process.env.YOUTUBE_UPLOADS_PLAYLIST_ID;

  if (!apiKey || (!channelId && !configuredUploadsPlaylistId)) {
    return [];
  }

  try {
    const playlistId =
      configuredUploadsPlaylistId ??
      (channelId ? await getUploadsPlaylistId(apiKey, channelId) : undefined);

    if (!playlistId) return [];

    const playlistItems = await getPlaylistItems(apiKey, playlistId);

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
  } catch (error) {
    console.error("Unable to load YouTube portfolio items:", error);
    return [];
  }
}
