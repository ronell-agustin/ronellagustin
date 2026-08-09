import SiteHeader from "../SiteHeader";
import PortfolioGallery from "./PortfolioGallery";
import styles from "./portfolio.module.css";

export default function PortfolioPage() {
  return (
    <>
      <SiteHeader label="Portfolio" prefix="const " suffix=" = []" />

      <main className={styles.page}>
        <section className={styles.pageIntro} aria-labelledby="portfolio-title">
          <p className={styles.kicker}>portfolio[]</p>
          <h1 id="portfolio-title">Art, photography, and videography.</h1>
          <p className={styles.intro}>
            A growing collection of visual work. Use the filter to narrow the gallery by medium.
          </p>
        </section>

        <section className={styles.content} aria-label="Creative work">
          <PortfolioGallery />
        </section>
      </main>
    </>
  );
}
