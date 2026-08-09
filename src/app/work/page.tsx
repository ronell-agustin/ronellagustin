import Link from "next/link";
import SiteHeader from "../SiteHeader";
import styles from "./work.module.css";

type WorkItem = {
  id: string;
  name: string;
  domain: string;
  href: string;
  category: string;
  role: string;
  stack: string[];
  summary: string;
};

const work: WorkItem[] = [
  {
    id: "ezdigital",
    name: "EZDigital",
    domain: "ezdigital-ph.com",
    href: "https://ezdigital-ph.com",
    category: "Agency / Professional Services",
    role: "Agency website · Web development · Digital marketing",
    stack: ["Next.js", "Vercel"],
    summary:
      "The public-facing home of EZDigital: a fast, custom-built agency site used to present services, demonstrate web capabilities, and support client acquisition without the overhead of a plugin-heavy CMS.",
  },
  {
    id: "king-fandom",
    name: "King Fandom",
    domain: "kingfandom.com",
    href: "https://kingfandom.com",
    category: "Ecommerce",
    role: "Shopify · Ecommerce · Ongoing development",
    stack: ["Shopify", "Liquid"],
    summary:
      "An active ecommerce storefront supported through ongoing Shopify development, merchandising structure, reusable landing-page systems, and improvements designed around real retail operations and event-driven sales.",
  },
  {
    id: "prime-oral-dental-clinic",
    name: "Prime Oral Dental Clinic",
    domain: "primeoraldentalclinic.com",
    href: "https://primeoraldentalclinic.com",
    category: "Business Websites",
    role: "Local business website · Lead generation",
    stack: ["WordPress", "Elementor"],
    summary:
      "A professional local-business website for a dental clinic, structured to establish credibility, make services easy to understand, and serve as the foundation for forms, appointment acquisition, analytics, and digital advertising.",
  },
  {
    id: "home-base-ph",
    name: "The Home Base PH",
    domain: "thehomebaseph.com",
    href: "https://thehomebaseph.com",
    category: "Creator & Media",
    role: "Publishing · Personal brand · Content platform",
    stack: ["Next.js", "Content"],
    summary:
      "A content and publishing platform built around a veteran and Filipino-American creator brand, designed to organize long-form resources, support video content, and grow into a durable owned-media presence beyond social platforms.",
  },
];

const folders = [
  {
    label: "ecommerce",
    projects: [{ label: "king-fandom.tsx", href: "#king-fandom" }],
  },
  {
    label: "business-websites",
    projects: [{ label: "prime-oral-dental-clinic.tsx", href: "#prime-oral-dental-clinic" }],
  },
  {
    label: "agency-professional-services",
    projects: [{ label: "ezdigital.tsx", href: "#ezdigital" }],
  },
  {
    label: "creator-media",
    projects: [{ label: "home-base-ph.tsx", href: "#home-base-ph" }],
  },
  { label: "crm-internal-tools", projects: [] },
  { label: "education-training", projects: [] },
  { label: "hospitality-tourism", projects: [] },
  { label: "saas-platforms", projects: [] },
];

export default function WorkPage() {
  return (
    <>
      <SiteHeader label="Work" prefix="const " suffix=" = []" />

      <main className={styles.page}>
        <section className={styles.intro} aria-labelledby="work-title">
          <Link href="/" className={styles.returnLink}>↩ return</Link>
          <p className={styles.kicker}>professionalWork[]</p>
          <h1 id="work-title">Work that ships.</h1>
          <p className={styles.copy}>
            Sites and systems built for real businesses and audiences.
          </p>
        </section>

        <section className={styles.explorer} aria-label="Work explorer">
          <div className={styles.explorerChrome}>
            <span>EXPLORER</span>
            <span>···</span>
          </div>
          <div className={styles.explorerRoot}>⌄ PROFESSIONAL-WORK</div>

          <nav className={styles.tree} aria-label="Jump to work by category">
            {folders.map((folder) => (
              <div className={styles.folder} key={folder.label}>
                <div className={styles.folderName}>
                  <span aria-hidden="true">▾</span>
                  <span>{folder.label}</span>
                  {folder.projects.length === 0 && <em>empty</em>}
                </div>
                {folder.projects.map((project) => (
                  <a href={project.href} key={project.href}>
                    <span className={styles.treeLine} aria-hidden="true">│</span>
                    <span className={styles.fileIcon} aria-hidden="true">◇</span>
                    <span>{project.label}</span>
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </section>

        <section className={styles.workList} aria-label="Professional work details">
          {work.map((item, index) => (
            <article className={styles.workCard} id={item.id} key={item.id}>
              <div className={styles.cardTab}>
                <span>work_{String(index + 1).padStart(2, "0")}.tsx</span>
                <span>×</span>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.cardIdentity}>
                  <p>{item.category}</p>
                  <h2>{item.name}</h2>
                  <span>{item.role}</span>
                </div>

                <div className={styles.cardSummary}>
                  <p>{item.summary}</p>
                  <div className={styles.stack}>
                    {item.stack.map((tech) => <span key={tech}>{tech}</span>)}
                  </div>
                </div>
              </div>

              <a className={styles.cardFooter} href={item.href} target="_blank" rel="noreferrer">
                <span>{item.domain}</span>
                <span>open ↗</span>
              </a>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
