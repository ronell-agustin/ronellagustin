const experience = [
  {
    title: "Web Developer & Digital Strategist",
    company: "EZDigital",
    location: "Philippines",
    period: "Present",
    summary:
      "Builds and supports fast, maintainable websites and digital systems for small businesses and client organizations.",
    details: [
      "Designs and develops production websites using modern web stacks, WordPress, Shopify, and custom integrations.",
      "Plans SEO, analytics, lead-generation, hosting, maintenance, and digital marketing workflows around client goals.",
      "Focuses on performance, maintainability, automation, and reducing unnecessary platform and plugin overhead.",
    ],
  },
  {
    title: "Web Developer / Ecommerce",
    company: "King Fandom",
    location: "Canoga Park, California · Remote",
    period: "Current",
    summary:
      "Develops and maintains ecommerce experiences, landing pages, merchandising systems, and reusable Shopify workflows.",
    details: [
      "Builds and iterates on Shopify storefront experiences and reusable page structures.",
      "Supports ecommerce merchandising, promotional landing pages, event workflows, and site optimization.",
      "Translates business requirements into practical storefront improvements with an emphasis on repeatable systems.",
    ],
  },
  {
    title: "Professional Experience",
    company: "Fairly",
    location: "LinkedIn-listed experience",
    period: "Prior experience",
    summary:
      "Fairly is listed among the professional experience on my public LinkedIn profile.",
    details: [
      "The public, signed-out LinkedIn profile does not expose the complete title, dates, or role description for this entry.",
      "This entry is intentionally kept concise rather than filling missing details with assumptions.",
    ],
  },
  {
    title: "Sergeant (E-5) · Wheeled Vehicle Mechanic",
    company: "United States Army",
    location: "United States",
    period: "Military service",
    summary:
      "Served as a U.S. Army noncommissioned officer with technical, maintenance, leadership, and personnel responsibilities.",
    details: [
      "Led and supported soldiers while maintaining accountability, readiness, and mission requirements.",
      "Diagnosed, repaired, and maintained military wheeled vehicles and associated systems.",
      "Developed practical leadership, troubleshooting, logistics, documentation, and team-management skills in operational environments.",
    ],
  },
  {
    title: "Creator / Game Designer",
    company: "CreaTv Corp",
    location: "Independent project",
    period: "Documented 2021",
    summary:
      "Created and documented The Birth of Royalty, covering game systems, story, mechanics, interface concepts, AI behavior, and production planning.",
    details: [
      "Produced game-design documentation spanning systems design, narrative, mechanics, UI, AI scripts, and development phases.",
      "Combined creative direction with technical planning and structured production documentation.",
    ],
  },
];

export default function ResumePage() {
  return (
    <main className="resume-page">
      <header className="resume-header">
        <a className="resume-back" href="/">← Portfolio</a>
        <div>
          <p className="resume-kicker">Resume</p>
          <h1>Ronell Esteron Agustin</h1>
          <p className="resume-intro">
            Developer, digital strategist, business owner, and U.S. Army veteran focused on building practical systems that are fast, maintainable, and useful.
          </p>
        </div>
        <a
          className="resume-linkedin"
          href="https://www.linkedin.com/in/ronellagustin"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>
      </header>

      <section className="resume-section" aria-labelledby="experience-title">
        <div className="resume-section-heading">
          <p className="section-label">Experience</p>
          <h2 id="experience-title">Selected professional experience.</h2>
        </div>

        <div className="experience-list">
          {experience.map((role, index) => (
            <details className="experience-item" key={`${role.company}-${role.title}`} open={index === 0}>
              <summary>
                <span className="experience-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="experience-heading">
                  <strong>{role.title}</strong>
                  <span>{role.company}</span>
                </span>
                <span className="experience-period">{role.period}</span>
                <span className="experience-toggle" aria-hidden="true">+</span>
              </summary>

              <div className="experience-body">
                <div className="experience-meta">
                  <span>{role.company}</span>
                  <span>{role.location}</span>
                  <span>{role.period}</span>
                </div>
                <div className="experience-copy">
                  <p>{role.summary}</p>
                  <ul>
                    {role.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="resume-bottom">
        <p>Web development · Ecommerce · Digital strategy · UX · SEO · Technical problem solving</p>
        <a href="https://ezdigital-ph.com" target="_blank" rel="noreferrer">EZDigital ↗</a>
      </section>
    </main>
  );
}
