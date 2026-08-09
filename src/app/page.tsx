import SiteHeader from "./SiteHeader";
import styles from "./home-header.module.css";

const projects = [
  {
    name: "EZDigital",
    domain: "ezdigital-ph.com",
    href: "https://ezdigital-ph.com",
    type: "Web Development · Digital Marketing",
    stack: "Next.js · Vercel",
  },
  {
    name: "King Fandom",
    domain: "kingfandom.com",
    href: "https://kingfandom.com",
    type: "Shopify · Ecommerce",
    stack: "Shopify · Liquid",
  },
  {
    name: "Prime Oral Dental Clinic",
    domain: "primeoraldentalclinic.com",
    href: "https://primeoraldentalclinic.com",
    type: "Web Development · Local Business",
    stack: "WordPress · Elementor",
  },
  {
    name: "The Home Base PH",
    domain: "thehomebaseph.com",
    href: "https://thehomebaseph.com",
    type: "Content · Publishing",
    stack: "Next.js · Content",
  },
];

const explorerItems = [
  { label: "work", href: "#work", type: "folder", accent: "yellow" },
  { label: "portfolio.tsx", href: "/portfolio", type: "file", accent: "blue" },
  { label: "resume.json", href: "/resume", type: "file", accent: "yellow" },
  { label: "about.md", href: "#about", type: "file", accent: "blue" },
  { label: "contact.ts", href: "#contact", type: "file", accent: "blue" },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className={styles.workspace} aria-label="Site explorer">
        <div className={styles.explorerChrome}>
          <span>EXPLORER</span>
          <span>···</span>
        </div>

        <div className={styles.explorerBody}>
          <div className={styles.explorerTitle}>
            <span>⌄</span>
            <strong>RONELLAGUSTIN.COM</strong>
          </div>

          <nav className={styles.explorerTree} aria-label="Explore the site">
            {explorerItems.map((item) => (
              <a href={item.href} key={item.label}>
                <span className={styles.treeGuide} aria-hidden="true" />
                <span
                  className={`${styles.fileIcon} ${
                    item.accent === "yellow" ? styles.fileYellow : styles.fileBlue
                  }`}
                  aria-hidden="true"
                >
                  {item.type === "folder" ? "▾" : "◇"}
                </span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <div className={styles.editorPreview}>
            <div className={styles.editorTabs}>
              <span className={styles.activeTab}>README.md</span>
              <span>×</span>
            </div>
            <div className={styles.codePreview}>
              <span className={styles.lineNumber}>1</span>
              <p><span className={styles.codePurple}>const</span> developer = <span className={styles.codeYellow}>"Ronell Agustin"</span>;</p>
              <span className={styles.lineNumber}>2</span>
              <p><span className={styles.codePurple}>const</span> focus = [<span className={styles.codeYellow}>"web"</span>, <span className={styles.codeYellow}>"creative"</span>, <span className={styles.codeYellow}>"systems"</span>];</p>
              <span className={styles.lineNumber}>3</span>
              <p className={styles.comment}>// build useful things, keep learning.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.workSection} id="work" aria-labelledby="work-title">
        <div className={styles.sectionHeading}>
          <p>// selected work</p>
          <h1 id="work-title">Professional Work</h1>
        </div>

        <div className={styles.projectRow}>
          {projects.map((project, index) => (
            <a
              className={styles.projectCard}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              key={project.domain}
            >
              <div className={styles.cardTopline}>
                <span>project_{String(index + 1).padStart(2, "0")}.tsx</span>
                <span>×</span>
              </div>
              <div className={styles.cardBody}>
                <p>{project.type}</p>
                <h2>{project.name}</h2>
                <span className={styles.cardStack}>{project.stack}</span>
              </div>
              <div className={styles.cardFooter}>
                <span>{project.domain}</span>
                <span>↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className={styles.infoGrid}>
        <article id="about" className={styles.infoPanel}>
          <span className={styles.panelLabel}>about.md</span>
          <p>// developer, digital strategist, business owner, and U.S. Army veteran.</p>
          <a href="/resume">open resume.json →</a>
        </article>

        <article id="contact" className={styles.infoPanel}>
          <span className={styles.panelLabel}>contact.ts</span>
          <p>export const email = <span>"ronellagustin@outlook.com"</span>;</p>
          <a href="mailto:ronellagustin@outlook.com">send message →</a>
        </article>
      </section>

      <footer>
        <a href="#top">Ronell Esteron Agustin</a>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}
