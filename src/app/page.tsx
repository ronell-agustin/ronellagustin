const projects = [
  {
    name: "EZDigital",
    domain: "ezdigital-ph.com",
    href: "https://ezdigital-ph.com",
    type: "Web Development · Digital Marketing",
  },
  {
    name: "King Fandom",
    domain: "kingfandom.com",
    href: "https://kingfandom.com",
    type: "Shopify · Ecommerce",
  },
  {
    name: "Prime Oral Dental Clinic",
    domain: "primeoraldentalclinic.com",
    href: "https://primeoraldentalclinic.com",
    type: "Web Development · Local Business",
  },
  {
    name: "The Home Base PH",
    domain: "thehomebaseph.com",
    href: "https://thehomebaseph.com",
    type: "Content · Publishing",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header" id="top">
        <a className="site-name" href="#top" aria-label="Ronell Esteron Agustin, home">
          Ronell Esteron Agustin
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
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
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </details>
      </header>

      <section className="section-intro" id="work" aria-labelledby="work-title">
        <p className="section-label">Selected work</p>
        <h1 id="work-title">Websites I&apos;ve built, developed, or supported.</h1>
      </section>

      {projects.map((project, index) => (
        <a
          className="project-section"
          href={project.href}
          target="_blank"
          rel="noreferrer"
          key={project.domain}
          aria-label={`Visit ${project.name}`}
        >
          <span className="project-number">0{index + 1}</span>
          <div className="project-content">
            <p>{project.type}</p>
            <h2>{project.name}</h2>
            <span className="project-domain">{project.domain} ↗</span>
          </div>
        </a>
      ))}

      <section className="text-section" id="about" aria-labelledby="about-title">
        <p className="section-label">About</p>
        <h2 id="about-title">
          Developer, digital strategist, and business owner focused on practical,
          maintainable work.
        </h2>
      </section>

      <section className="text-section contact-section" id="contact" aria-labelledby="contact-title">
        <p className="section-label">Contact</p>
        <h2 id="contact-title">Have something worth building?</h2>
        <a href="https://ezdigital-ph.com" target="_blank" rel="noreferrer">
          Work with me through EZDigital ↗
        </a>
      </section>

      <footer>
        <a href="#top">Ronell Esteron Agustin</a>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}
