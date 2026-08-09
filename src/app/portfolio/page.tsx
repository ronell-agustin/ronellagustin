import PortfolioGallery from "./PortfolioGallery";
import styles from "./portfolio.module.css";

export default function PortfolioPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a href="/" className={styles.back}>← Home</a>
        <div>
          <p className={styles.kicker}>Creative Portfolio</p>
          <h1>Art, photography, and videography.</h1>
          <p className={styles.intro}>
            A growing collection of visual work. Use the filter to narrow the gallery by medium.
          </p>
        </div>
      </header>

      <section className={styles.content} aria-label="Creative work">
        <PortfolioGallery />
      </section>
    </main>
  );
}
