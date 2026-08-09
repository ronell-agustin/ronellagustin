import SiteHeader from "../SiteHeader";
import PortfolioGallery from "./PortfolioGallery";
import styles from "./portfolio.module.css";

export default function PortfolioPage() {
  return (
    <>
      <SiteHeader label="Portfolio" prefix="const " suffix=" = []" />

      <main className={styles.page}>
        <section className={styles.pageIntro} aria-labelledby="portfolio-title">
          <a className={styles.returnLink} href="/">return</a>
          <p className={styles.kicker}>portfolio[]</p>
          <h1 id="portfolio-title">Creative Work.</h1>
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
