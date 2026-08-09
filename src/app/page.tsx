const projects = [
  {
    name: "King Fandom",
    domain: "kingfandom.com",
    href: "https://kingfandom.com",
    type: "Ecommerce / Shopify",
  },
  {
    name: "Prime Oral Dental Clinic",
    domain: "primeoraldentalclinic.com",
    href: "https://primeoraldentalclinic.com",
    type: "Local business / WordPress",
  },
  {
    name: "EZDigital",
    domain: "ezdigital-ph.com",
    href: "https://ezdigital-ph.com",
    type: "Agency / Next.js",
  },
  {
    name: "TheHomeBasePH",
    domain: "thehomebaseph.com",
    href: "https://thehomebaseph.com",
    type: "Content platform",
  },
  {
    name: "Ronell Agustin",
    domain: "ronellagustin.com",
    href: "https://ronellagustin.com",
    type: "Portfolio / Resume",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero shell">
        <p className="eyebrow">ronellagustin.com</p>
        <h1>Ronell Agustin</h1>
        <p className="lede">
          Web developer, digital strategist, and technical problem-solver building
          fast, maintainable websites and applications.
        </p>
      </section>

      <section className="projects shell" aria-labelledby="projects-heading">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2 id="projects-heading">Websites and digital projects.</h2>
          <p>
            A growing selection of production websites, client work, business
            platforms, and personal projects I have developed or supported.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <a
              className="project-card"
              href={project.href}
              target="_blank"
              rel="noreferrer"
              key={project.domain}
            >
              <span>{project.type}</span>
              <h3>{project.name}</h3>
              <p>{project.domain}</p>
              <strong>Visit site ↗</strong>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
