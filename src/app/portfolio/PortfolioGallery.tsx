"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import styles from "./portfolio.module.css";

type PortfolioCategory = "art" | "photography" | "videography" | "3d";
type PortfolioFilter = "all" | PortfolioCategory;

type ProcessImage = {
  label: string;
  src: string;
};

export type PortfolioItem = {
  id: string;
  title: string;
  category: PortfolioCategory;
  tags: string[];
  year?: string;
  href?: string;
  thumbnail?: string;
  source?: "youtube";
  description?: string;
  gallery?: ProcessImage[];
};

const artItems: PortfolioItem[] = [
  {
    id: "grim-reaper-flag",
    title: "The Last Flag",
    category: "art",
    tags: ["art", "illustration", "character-design", "ai-assisted"],
    year: "2013 / 2026",
    thumbnail: "/portfolio/art/grimReaperFlag_AI.jpg",
    description:
      "An original battlefield concept from 2013: the Grim Reaper carries an American flag to present to the soldier he comes to collect. Revisited in 2026 through an AI-assisted finishing workflow.",
    gallery: [
      { label: "Original concept", src: "/portfolio/art/grimReaperFlag.jpg" },
      { label: "AI-assisted finish", src: "/portfolio/art/grimReaperFlag_AI.jpg" },
    ],
  },
  {
    id: "gunslinger",
    title: "Gunslinger Character Concept",
    category: "art",
    tags: ["art", "character-design", "concept", "ai-assisted"],
    thumbnail: "/portfolio/art/gunslinger_AI_Finish.jpg",
    description:
      "Original character design developed from a pencil concept into a cleaned rendering and a more aggressively art-directed AI interpretation.",
    gallery: [
      { label: "Original sketch", src: "/portfolio/art/gunslingerConcept.jpg" },
      { label: "AI-assisted concept render", src: "/portfolio/art/gunslinger_AI_Concept.jpg" },
      { label: "AI-directed finish", src: "/portfolio/art/gunslinger_AI_Finish.jpg" },
    ],
  },
  {
    id: "shaman",
    title: "Shaman Character Concept",
    category: "art",
    tags: ["art", "character-design", "fantasy", "ai-assisted"],
    thumbnail: "/portfolio/art/shaman_AI_Finish.jpg",
    description:
      "A fantasy shaman design developed from pencil concept to a faithful digital finish, then pushed into a darker full-scene interpretation centered on summoned spirit imagery.",
    gallery: [
      { label: "Original sketch", src: "/portfolio/art/shamanConcept.jpg" },
      { label: "AI-assisted concept render", src: "/portfolio/art/shaman_AI_Concept.jpg" },
      { label: "AI-directed finish", src: "/portfolio/art/shaman_AI_Finish.jpg" },
    ],
  },
  {
    id: "vegeta-armor",
    title: "Saiyan Armor Redesign",
    category: "art",
    tags: ["art", "fan-art", "character-design", "turnaround", "ai-assisted"],
    year: "2013 / 2026",
    thumbnail: "/portfolio/art/vegeta_AI_Finish.jpg",
    description:
      "A 2013 fan-art armor redesign presented as a multi-angle character turnaround, later cleaned and re-rendered while preserving the original design language.",
    gallery: [
      { label: "Original turnaround", src: "/portfolio/art/vegetaConcept.jpg" },
      { label: "Cleaned concept render", src: "/portfolio/art/vegeta_AI_Concept.jpg" },
      { label: "AI-directed finish", src: "/portfolio/art/vegeta_AI_Finish.jpg" },
    ],
  },
  {
    id: "creative-feast",
    title: "Creative Feast",
    category: "art",
    tags: ["art", "fan-art", "illustration", "process", "ai-assisted"],
    year: "2020 / 2026",
    thumbnail: "/portfolio/art/protag_Feast_AIFinish.jpg",
    description:
      "A large crossover fan-art composition showing the progression from line drawing to hand-colored artwork and a later AI-assisted cleanup with additional table detail.",
    gallery: [
      { label: "Draft linework", src: "/portfolio/art/protag_Feast_DRAFT.jpg" },
      { label: "Hand-colored version", src: "/portfolio/art/protag_Feast_DRAFT2.jpg" },
      { label: "AI-assisted cleanup", src: "/portfolio/art/protag_Feast_AIFinish.jpg" },
    ],
  },
];

const photographyItems: PortfolioItem[] = [
  {
    id: "mountain-photographer",
    title: "Mountain Photographer",
    category: "photography",
    tags: ["photography", "environmental", "landscape", "people"],
    thumbnail: "/portfolio/photography/mountainPhotographer.jpg",
  },
  {
    id: "lakeview-sunset",
    title: "Lake at Sunset",
    category: "photography",
    tags: ["photography", "landscape", "sunset"],
    thumbnail: "/portfolio/photography/lakeviewSunset.jpg",
  },
  {
    id: "lake-sunset-silhouette",
    title: "Silhouette at Sunset",
    category: "photography",
    tags: ["photography", "silhouette", "sunset", "people"],
    thumbnail: "/portfolio/photography/lakeSunsetSilhouette.jpg",
  },
  {
    id: "college-window",
    title: "College Room Window",
    category: "photography",
    tags: ["photography", "conceptual", "monochrome"],
    thumbnail: "/portfolio/photography/collegeWindow.jpg",
    description: "The room was built for learning. Everything interesting was outside.",
  },
  {
    id: "grow-room",
    title: "Grow Room",
    category: "photography",
    tags: ["photography", "documentary", "environmental", "monochrome"],
    thumbnail: "/portfolio/photography/growthRoom.jpg",
  },
  {
    id: "flag-sunset",
    title: "American Flag at Sunset",
    category: "photography",
    tags: ["photography", "sunset", "light"],
    thumbnail: "/portfolio/photography/flagSunset.jpg",
  },
  {
    id: "mint-vintage",
    title: "Vintage Car",
    category: "photography",
    tags: ["photography", "automotive", "street"],
    thumbnail: "/portfolio/photography/mintVint.jpg",
  },
  {
    id: "temple-stairs",
    title: "Temple Staircase",
    category: "photography",
    tags: ["photography", "travel", "architecture", "symmetry"],
    thumbnail: "/portfolio/photography/templeStairs.jpg",
  },
  {
    id: "doggo-hero",
    title: "Dog Portrait",
    category: "photography",
    tags: ["photography", "animals", "portrait"],
    thumbnail: "/portfolio/photography/doggoHero.jpg",
  },
];

const threeDItems: PortfolioItem[] = [
  {
    id: "dream-house",
    title: "Dream House Concept",
    category: "3d",
    tags: ["3d", "unity", "environment-design", "architecture", "site-design"],
    year: "2020",
    thumbnail: "/portfolio/3d/3d_Full.jpg",
    description:
      "A site-specific Unity environment designed around a real farm lot my grandfather intended to give me. I approximated the property dimensions, elevation, and surrounding terrain from memory and Google Maps, then designed the house, courtyard, interiors, circulation, and site layout around those constraints.",
    gallery: [
      { label: "Full complex", src: "/portfolio/3d/3d_Full.jpg" },
      { label: "Farm site context", src: "/portfolio/3d/3d_Farm.jpg" },
      { label: "Courtyard", src: "/portfolio/3d/3d_Courtyard.jpg" },
      { label: "Entrance", src: "/portfolio/3d/3d_Entrance.jpg" },
      { label: "Loft / interior", src: "/portfolio/3d/3d_Loft.jpg" },
    ],
  },
];

const manualPortfolioItems: PortfolioItem[] = [...artItems, ...photographyItems, ...threeDItems];

const filters: { label: string; value: PortfolioFilter }[] = [
  { label: "All", value: "all" },
  { label: "Art", value: "art" },
  { label: "Photography", value: "photography" },
  { label: "Videography", value: "videography" },
  { label: "3D Modeling", value: "3d" },
];

const filterDescriptions: Record<PortfolioFilter, string> = {
  all: "A curated cross-section of my visual work across illustration, photography, video, and 3D environment design.",
  art: "Original concepts, character design, fan art, process work, and transparent AI-assisted finishing workflows.",
  photography: "Photography focused on environment, light, framing, people, places, and the stories around them.",
  videography: "Published video work from The Home Base PH, pulled directly from my YouTube channel.",
  "3d": "Environment and spatial design work built in Unity, including a site-specific dream-house concept developed around a real farm lot.",
};

function CardContents({ item }: { item: PortfolioItem }) {
  return (
    <>
      {item.thumbnail ? (
        <div className={styles.media}>
          <Image src={item.thumbnail} alt="" fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 25vw" />
          {item.source === "youtube" && <span className={styles.sourceBadge}>YouTube</span>}
          {item.gallery && (
            <span className={styles.processBadge}>
              {item.gallery.length} {item.gallery.length === 1 ? "image" : "images"}
            </span>
          )}
        </div>
      ) : (
        <div className={styles.placeholder} aria-hidden="true">
          <span>{item.category}</span>
        </div>
      )}

      <div className={styles.cardMeta}>
        <div>
          <p>{item.category === "3d" ? "3D Modeling" : item.category}</p>
          <h2>{item.title}</h2>
        </div>
        <span className={styles.index}>{item.year ?? item.id}</span>
      </div>

      {item.description && <p className={styles.cardDescription}>{item.description}</p>}

      <div className={styles.tags} aria-label="Tags">
        {item.tags.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>
    </>
  );
}

function PortfolioCard({ item, onOpen }: { item: PortfolioItem; onOpen: (item: PortfolioItem) => void }) {
  const cardProps = {
    className: styles.card,
    "data-category": item.category,
    "data-tags": item.tags.join(" "),
  };

  if (item.href) {
    return (
      <a {...cardProps} href={item.href} target="_blank" rel="noreferrer" aria-label={`${item.title} on YouTube`}>
        <CardContents item={item} />
      </a>
    );
  }

  if (item.thumbnail) {
    return (
      <button {...cardProps} type="button" onClick={() => onOpen(item)} aria-label={`Open ${item.title}`}>
        <CardContents item={item} />
      </button>
    );
  }

  return (
    <article {...cardProps}>
      <CardContents item={item} />
    </article>
  );
}

function PortfolioViewer({ item, onClose }: { item: PortfolioItem; onClose: () => void }) {
  const images = item.gallery ?? (item.thumbnail ? [{ label: item.title, src: item.thumbnail }] : []);
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight" && images.length > 1) setActiveIndex((index) => (index + 1) % images.length);
      if (event.key === "ArrowLeft" && images.length > 1) setActiveIndex((index) => (index - 1 + images.length) % images.length);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [images.length, onClose]);

  if (!active) return null;

  return (
    <div className={styles.viewerBackdrop} role="presentation" onMouseDown={onClose}>
      <section className={styles.viewer} role="dialog" aria-modal="true" aria-labelledby="portfolio-viewer-title" onMouseDown={(event) => event.stopPropagation()}>
        <div className={styles.viewerTitlebar}>
          <div>
            <span>{item.category === "3d" ? "3d" : item.category}.json</span>
            <strong id="portfolio-viewer-title">{item.title}</strong>
          </div>
          <button type="button" onClick={onClose} aria-label="Close viewer">×</button>
        </div>

        <div className={styles.viewerImage}>
          <Image src={active.src} alt={`${item.title} — ${active.label}`} fill sizes="95vw" priority />
        </div>

        <div className={styles.viewerInfo}>
          <div>
            <span>[{String(activeIndex + 1).padStart(2, "0")}/{String(images.length).padStart(2, "0")}]</span>
            <strong>{active.label}</strong>
          </div>
          {item.description && <p>{item.description}</p>}
        </div>

        {images.length > 1 && (
          <div className={styles.viewerThumbs} aria-label="Project views">
            {images.map((image, index) => (
              <button
                key={`${item.id}-${image.src}`}
                type="button"
                className={index === activeIndex ? styles.activeThumb : ""}
                onClick={() => setActiveIndex(index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {image.label}
              </button>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default function PortfolioGallery({ youtubeItems = [] }: { youtubeItems?: PortfolioItem[] }) {
  const [activeFilter, setActiveFilter] = useState<PortfolioFilter>("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const portfolioItems = useMemo(() => [...youtubeItems, ...manualPortfolioItems], [youtubeItems]);

  const visibleItems = useMemo(() => {
    if (activeFilter === "all") {
      return [
        ...artItems.slice(0, 3),
        ...photographyItems.slice(0, 4),
        ...threeDItems,
        ...youtubeItems.slice(0, 3),
      ];
    }

    return portfolioItems.filter((item) => item.category === activeFilter);
  }, [activeFilter, portfolioItems, youtubeItems]);

  return (
    <>
      <nav className={styles.filters} aria-label="Portfolio filters">
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            className={activeFilter === filter.value ? styles.activeFilter : ""}
            aria-pressed={activeFilter === filter.value}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </nav>

      <div className={styles.filterDescription} aria-live="polite">
        <span>{activeFilter}.md</span>
        <p>{filterDescriptions[activeFilter]}</p>
      </div>

      <div className={styles.gallery}>
        {visibleItems.map((item) => (
          <PortfolioCard key={item.id} item={item} onOpen={setSelectedItem} />
        ))}
      </div>

      {selectedItem && <PortfolioViewer item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </>
  );
}
