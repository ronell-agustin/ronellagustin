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

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.5 8.25H3.25V20H6.5V8.25ZM4.88 3A1.88 1.88 0 1 0 4.88 6.75 1.88 1.88 0 0 0 4.88 3ZM20.75 13.27c0-3.55-1.9-5.2-4.43-5.2-2.04 0-2.95 1.12-3.46 1.91V8.25H9.61c.04 1.15 0 11.75 0 11.75h3.25v-6.56c0-.35.03-.7.13-.95.35-.7 1.14-1.43 2.47-1.43 1.74 0 2.44 1.32 2.44 3.26V20h3.25l-.4-6.73Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.91-2.78.62-3.37-1.2-3.37-1.2-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.64-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 6.94c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.79-4.58 5.04.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.24 10.24 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 5h18v14H3V5Zm2 2v.35l7 5.25 7-5.25V7H5Zm14 10V9.85l-7 5.25-7-5.25V17h14Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className={`site-header ${styles.header}`} id="top">
        <a className="header-tab" href="https://ronellagustin.com" aria-label="Ronell Agustin homepage">
          ronellagustin.com&nbsp;&nbsp;×
        </a>

        <a className={`site-name ${styles.name}`} href="#top" aria-label="Ronell Esteron Agustin, home">
          Ronell Esteron Agustin
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/resume">Resume</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <details className="mobile-nav">
          <summary aria-label="Open navigation">
            <span />
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile navigation">
            <a href="#work">Work</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/resume">Resume</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </details>

        <nav className={styles.socialDock} aria-label="Social links">
          <a href="https://www.linkedin.com/in/ronellagustin" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/ronell-agustin" target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href="mailto:ronellagustin@outlook.com" aria-label="Email Ronell">
            <MailIcon />
          </a>
        </nav>
      </header>

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
          <h1 id="work-title">Projects</h1>
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
