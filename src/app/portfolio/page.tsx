import SiteHeader from "../SiteHeader";
import { getYouTubePortfolioData } from "../../lib/youtube";
import PortfolioGallery from "./PortfolioGallery";
import styles from "./portfolio.module.css";

function formatCount(value?: number) {
  if (value === undefined) return "—";
  return new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(value);
}

export default async function PortfolioPage() {
  const youtube = await getYouTubePortfolioData();
  const channel = youtube.channel;

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
          <a
            className={styles.channelProperties}
            href="https://www.youtube.com/@TheHomeBasePH"
            target="_blank"
            rel="noreferrer"
            aria-label="Open The Home Base PH on YouTube"
          >
            <div className={styles.propertiesTitlebar}>
              <span>youtube.channel</span>
              <span>Properties</span>
            </div>
            <div className={styles.propertiesBody}>
              <div className={styles.channelIdentity}>
                {channel?.thumbnail ? <img src={channel.thumbnail} alt="" /> : <span className={styles.channelIcon}>▶</span>}
                <div>
                  <strong>{channel?.title ?? "The Home Base PH"}</strong>
                  <span>@TheHomeBasePH</span>
                </div>
              </div>
              <dl className={styles.channelStats}>
                <div>
                  <dt>Videos</dt>
                  <dd>{formatCount(channel?.videoCount)}</dd>
                </div>
                <div>
                  <dt>Subscribers</dt>
                  <dd>{channel?.hiddenSubscriberCount ? "Hidden" : formatCount(channel?.subscriberCount)}</dd>
                </div>
                <div>
                  <dt>Channel</dt>
                  <dd>youtube.com/@TheHomeBasePH ↗</dd>
                </div>
              </dl>
            </div>
          </a>

          <PortfolioGallery youtubeItems={youtube.items} />
        </section>
      </main>
    </>
  );
}
