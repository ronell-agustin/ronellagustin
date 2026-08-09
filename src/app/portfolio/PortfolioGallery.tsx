"use client";

import { useMemo, useState } from "react";
import styles from "./portfolio.module.css";

type PortfolioCategory = "art" | "photography" | "videography";
type PortfolioFilter = "all" | PortfolioCategory;

export type PortfolioItem = {
  id: string;
  title: string;
  category: PortfolioCategory;
  tags: string[];
  year?: string;
  href?: string;
  thumbnail?: string;
  source?: "youtube";
};

const manualPortfolioItems: PortfolioItem[] = [
  {
    id: "art-01",
    title: "Artwork Placeholder 01",
    category: "art",
    tags: ["art", "illustration", "drawing"],
  },
  {
    id: "art-02",
    title: "Artwork Placeholder 02",
    category: "art",
    tags: ["art", "character-design", "concept"],
  },
  {
    id: "photo-01",
    title: "Photography Placeholder 01",
    category: "photography",
    tags: ["photography", "portrait", "people"],
  },
  {
    id: "photo-02",
    title: "Photography Placeholder 02",
    category: "photography",
    tags: ["photography", "lifestyle", "outdoor"],
  },
];

const filters: { label: string; value: PortfolioFilter }[] = [
  { label: "All", value: "all" },
  { label: "Art", value: "art" },
  { label: "Photography", value: "photography" },
  { label: "Videography", value: "videography" },
];

function CardContents({ item }: { item: PortfolioItem }) {
  return (
    <>
      {item.thumbnail ? (
        <div className={styles.media}>
          <img src={item.thumbnail} alt="" loading="lazy" />
          {item.source === "youtube" && <span className={styles.sourceBadge}>YouTube</span>}
        </div>
      ) : (
        <div className={styles.placeholder} aria-hidden="true">
          <span>{item.category}</span>
        </div>
      )}

      <div className={styles.cardMeta}>
        <div>
          <p>{item.category}</p>
          <h2>{item.title}</h2>
        </div>
        <span className={styles.index}>{item.year ?? item.id}</span>
      </div>

      <div className={styles.tags} aria-label="Tags">
        {item.tags.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>
    </>
  );
}

function PortfolioCard({ item }: { item: PortfolioItem }) {
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

  return (
    <article {...cardProps}>
      <CardContents item={item} />
    </article>
  );
}

export default function PortfolioGallery({ youtubeItems = [] }: { youtubeItems?: PortfolioItem[] }) {
  const [activeFilter, setActiveFilter] = useState<PortfolioFilter>("all");
  const portfolioItems = useMemo(
    () => [...youtubeItems, ...manualPortfolioItems],
    [youtubeItems],
  );

  const visibleItems = useMemo(
    () =>
      activeFilter === "all"
        ? portfolioItems
        : portfolioItems.filter((item) => item.tags.includes(activeFilter)),
    [activeFilter, portfolioItems],
  );

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

      <div className={styles.gallery}>
        {visibleItems.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
