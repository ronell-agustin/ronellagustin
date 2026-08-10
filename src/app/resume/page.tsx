import Link from "next/link";
import SiteHeader from "../SiteHeader";
import styles from "./resume.module.css";

const resumeSections = [
  { id: "it-skills", index: "01", label: "IT Skills", record: "skills[]" },
  { id: "experience", index: "02", label: "Professional Experience", record: "experience[]" },
  { id: "education", index: "03", label: "Education", record: "education[]" },
  { id: "military-awards", index: "04", label: "Military Awards & Medals", record: "serviceRecord{}" },
];

const technicalSkills = [
  {
    name: "languages",
    values: ["JavaScript", "TypeScript", "C# (.NET / Unity)", "SQL", "HTML", "CSS"],
  },
  {
    name: "frameworks",
    values: ["React", "Next.js", ".NET", "Tailwind CSS", "Bootstrap"],
  },
  {
    name: "databases",
    values: ["Supabase", "PostgreSQL", "SQL Server", "Relational DBMS"],
  },
  {
    name: "platforms",
    values: ["Vercel", "GitHub", "WordPress", "Shopify", "Cloudflare", "Unity"],
  },
  {
    name: "infrastructure",
    values: ["Docker", "Proxmox VE", "Virtual Machines", "Linux", "Home Assistant", "Self-hosted services"],
  },
  {
    name: "tools",
    values: ["Git", "VS Code", "Postman", "k6", "REST APIs", "Elementor", "Liquid"],
  },
  {
    name: "creativeTools",
    values: ["Unity", "Blender", "Adobe Creative Cloud"],
  },
  {
    name: "concepts",
    values: [
      "API integration",
      "Relational database design",
      "Responsive UI",
      "Version control",
      "Deployment workflows",
      "API testing",
      "Load testing",
      "Virtualization",
      "Containerization",
      "Networking",
    ],
  },
];

const experience = [
  {
    title: "Full-stack Developer",
    company: "Fairly",
    location: "Los Angeles, California",
    period: "Feb 2023 - Jun 2023",
    summary:
      "Worked across the React, SQL, .NET, and GitHub stack while collaborating daily with the development team on production requirements and dependencies.",
    details: [
      "Built React components, forms, and Bootstrap/CSS styling to match existing product themes.",
      "Created SQL tables and stored procedures using foreign keys, bridge tables, and existing datasets.",
      "Implemented .NET API endpoints and C# methods within existing in-house middle tiers.",
      "Used branch-based GitHub workflows and maintained delivery deadlines across the full-stack pipeline.",
    ],
  },
  {
    title: "General Manager",
    company: "Agustin Unlimited",
    location: "Canoga Park, California",
    period: "Oct 2017 - Feb 2023",
    summary:
      "Founded and managed a retail and ecommerce operation spanning inventory, warehousing, staffing, sales, marketing, and process improvement.",
    details: [
      "Managed inventory databases containing more than 500,000 line items and ecommerce logistics.",
      "Oversaw a warehouse valued above $1 million and led hiring, training, and operations for 25+ employees.",
      "Directed social media, website, multimedia, B2B/B2C sales, and marketing strategy.",
      "Continuously improved business processes while supporting community organizations and small-business IT needs.",
    ],
  },
  {
    title: "Security Officer",
    company: "Multiple Companies",
    location: "Greater Los Angeles Area",
    period: "Aug 2017 - Jun 2020",
    summary:
      "Provided armed and unarmed security for film sets, concerts, events, and high-priority personnel.",
    details: [
      "Supported events with audiences up to 5,000 people and protected personnel and equipment valued above $10 million.",
      "Escorted VIP and high-priority personnel and maintained professional, protocol-compliant security standards.",
      "Worked with AEGIS Security Company, Sully Crew Security LLC, and as a private contractor.",
      "Led small groups when supervisors were unavailable while balancing full-time college attendance.",
    ],
  },
  {
    title: "Freelance Proofreader / Editor",
    company: "Freelance",
    location: "Los Angeles, California",
    period: "Jan 2016 - Jun 2018",
    summary:
      "Edited professional correspondence and long-form documents for clients in medical, legal, engineering, and other industries.",
    details: [
      "Improved clarity, consistency, tone, and professionalism while preserving each client's voice.",
      "Edited material ranging from emails to reports, reviews, and internal team briefings.",
      "Worked to strict client schedules while protecting confidential and industry-sensitive information.",
    ],
  },
  {
    title: "Sales Representative",
    company: "Cahuenga Caregivers Inc.",
    location: "California",
    period: "Jan 2016 - Jul 2017",
    summary:
      "Combined customer service, sensitive-record handling, and inventory management in a fast-paced healthcare setting.",
    details: [
      "Managed records for more than 2,000 patients and 1,500+ inventory line items valued above $500,000.",
      "Maintained confidentiality and data accuracy while keeping inventory systems organized and current.",
      "Delivered knowledgeable customer service and timely fulfillment of patient needs.",
    ],
  },
  {
    title: "Motor Sergeant / Fleet & Equipment Maintenance",
    company: "United States Army",
    location: "United States · South Korea · Germany",
    period: "Feb 2009 - 2016",
    summary:
      "Served as a U.S. Army maintenance leader, progressing from technical mechanic and team leader to Motor Sergeant responsible for personnel, readiness, and high-value equipment.",
    details: [
      "As Motor Sergeant, led 8-10 soldiers and maintained readiness and records for a fleet valued above $10 million.",
      "Diagnosed and maintained diesel vehicles, semi-trucks, HMMWVs, generators, weapons, radios, and satellite systems.",
      "Held additional responsibilities including HAZMAT, Master Driver, range safety, safety officer, publications, and new-soldier inprocessing.",
      "Supported multinational counterparts and worked alongside Military Intelligence and Airborne units.",
    ],
  },
  {
    title: "Data Entry Specialist",
    company: "Multiple",
    location: "California",
    period: "Jan 2007 - 2009",
    summary:
      "Managed time-sensitive laboratory sample data, requisitions, reporting, and client communication.",
    details: [
      "Handled third-party processing requisitions and critical-priority client requests.",
      "Investigated processing delays and maintained accurate, high-volume data entry.",
    ],
  },
  {
    title: "Vehicle Porter & Customer Relations",
    company: "Volkswagen of America, Inc.",
    location: "Van Nuys, California",
    period: "2006 - 2007",
    summary:
      "Supported dealership service operations by preparing vehicles and coordinating customer transportation.",
    details: [
      "Received, staged, tested, cleaned, and prepared vehicles before and after service.",
      "Provided customer pick-up and drop-off support and helped maintain a consistent service experience.",
    ],
  },
  {
    title: "Litigation Document Specialist",
    company: "Network Litigation Services",
    location: "Greater Los Angeles Area",
    period: "2005 - 2006",
    summary:
      "Prepared and edited high-volume court transcription material for litigation teams under tight deadlines.",
    details: [
      "Edited hundreds of pages containing industry-specific terminology while maintaining high accuracy.",
      "Provided terminology clarification and supported delivery when normal courier services failed.",
    ],
  },
  {
    title: "Level 3 Associate",
    company: "In-N-Out Burger",
    location: "California",
    period: "2003 - 2005",
    summary:
      "Advanced through multiple associate levels while providing high-volume customer service during high school.",
    details: [
      "Progressed to Level 3 and was regularly loaned to other locations to support understaffed or high-demand shifts.",
      "Maintained fast, consistent service and contributed across multiple franchise locations.",
    ],
  },
];

const education = [
  {
    school: "Los Angeles Film School",
    degree: "Bachelor of Science - Business",
    focus: "Intellectual Property, Talent Management, and Entertainment Services",
    period: "2018 - 2020",
  },
  {
    school: "California State University, Northridge",
    degree: "Bachelor of Arts - English Language and Literature",
    focus: "General",
    period: "2017 - Jun 2019",
  },
  {
    school: "Los Angeles Pierce College",
    degree: "Associate of Arts - English Language and Literature",
    focus: "General",
    period: "2015 - 2017",
  },
  {
    school: "Los Angeles Valley College",
    degree: "Associate of Arts - English",
    focus: "Creative Writing",
    period: "2015 - 2017",
  },
];

const militaryAwards = [
  { name: "Army Achievement Medal", type: "decoration", detail: "4th Award" },
  { name: "Meritorious Unit Commendation", type: "unit award", detail: "" },
  { name: "Army Good Conduct Medal", type: "medal", detail: "2nd Award" },
  { name: "National Defense Service Medal", type: "medal", detail: "" },
  { name: "Global War on Terrorism Service Medal", type: "medal", detail: "" },
  { name: "Korea Defense Service Medal", type: "medal", detail: "" },
  { name: "Noncommissioned Officer Professional Development Ribbon", type: "ribbon", detail: "" },
  { name: "Army Service Ribbon", type: "ribbon", detail: "" },
  { name: "Overseas Service Ribbon", type: "ribbon", detail: "2nd Award" },
];

const militaryQualifications = [
  { name: "Expert Marksmanship Badge w/ Rifle Bar", type: "qualification badge", detail: "" },
  {
    name: "Driver and Mechanic Badge w/ Driver-Wheeled Vehicle(s) Clasp",
    type: "badge",
    detail: "",
  },
  { name: "Driver and Mechanic Badge w/ Mechanic Clasp", type: "badge", detail: "DD214" },
  {
    name: "Schützenschnur — Gold",
    type: "German military qualification",
    detail: "Gold",
  },
];

const militaryTraining = [
  { name: "Combatives Level 1" },
  { name: "Environmental Compliance Officer Certification" },
  { name: "Family of Medium Tactical Vehicles Training" },
  { name: "Small Arms Master Marksman" },
  { name: "Standard Army Maintenance System Certification" },
  { name: "Warrior Leader Course (WLC)" },
];

function ServiceRecordTable({
  records,
}: {
  records: { name: string; type: string; detail: string }[];
}) {
  return (
    <div className={styles.awardsTable}>
      <div className={styles.awardsHeader} aria-hidden="true">
        <span>index</span>
        <span>record</span>
        <span>type</span>
        <span>detail</span>
      </div>
      {records.map((record, index) => (
        <div className={styles.awardRow} key={`${record.name}-${record.detail}`}>
          <span>[{String(index).padStart(2, "0")}]</span>
          <strong>{record.name}</strong>
          <code>{record.type}</code>
          <span>{record.detail}</span>
        </div>
      ))}
    </div>
  );
}

export default function ResumePage() {
  return (
    <>
      <SiteHeader label="Resume" prefix="class " suffix=" (exp)" />

      <section className={styles.intro} aria-labelledby="resume-title">
        <Link className={styles.returnLink} href="/">↩ return</Link>
        <p className={styles.kicker}>resume</p>
        <h1 id="resume-title">I build, lead, and ship.</h1>
        <p className={styles.copy}>
          My work spans software development, business operations, and military leadership —
          turning ambiguous problems into practical systems, stronger teams, and finished work.
        </p>
      </section>

      <main className="resume-page">
        <nav className={styles.resumeIndex} aria-label="Resume sections">
          <div className={styles.queryBar}>
            <span className={styles.queryKeyword}>SELECT</span>
            <span> section </span>
            <span className={styles.queryKeyword}>FROM</span>
            <span> resume </span>
            <span className={styles.queryKeyword}>ORDER BY</span>
            <span> priority;</span>
          </div>
          <div className={styles.tableHeader} aria-hidden="true">
            <span>id</span>
            <span>section</span>
            <span>record</span>
            <span>jump</span>
          </div>
          {resumeSections.map((section) => (
            <a className={styles.tableRow} href={`#${section.id}`} key={section.id}>
              <span>{section.index}</span>
              <strong>{section.label}</strong>
              <code>{section.record}</code>
              <span>↘</span>
            </a>
          ))}
        </nav>

        <section className="resume-section" id="it-skills" aria-labelledby="skills-title">
          <div className="resume-section-heading">
            <p className="section-label">{"// itSkills{}"}</p>
            <h2 id="skills-title">IT Skills.</h2>
          </div>

          <div className={styles.skillArrays}>
            {technicalSkills.map((group) => (
              <article className={styles.skillArray} key={group.name}>
                <div className={styles.arrayTitle}>
                  <span className={styles.arrayKeyword}>const</span>
                  <strong>{group.name}</strong>
                  <span>= [</span>
                </div>
                <div className={styles.arrayValues}>
                  {group.values.map((value, index) => (
                    <span key={value}>
                      &quot;{value}&quot;{index < group.values.length - 1 ? "," : ""}
                    </span>
                  ))}
                </div>
                <span className={styles.arrayClose}>];</span>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section" id="experience" aria-labelledby="experience-title">
          <div className="resume-section-heading">
            <p className="section-label">{"// experience[]"}</p>
            <h2 id="experience-title">Professional Experience.</h2>
          </div>

          <div className="experience-list">
            {experience.map((role, index) => (
              <details className="experience-item" key={`${role.company}-${role.title}`} open={index === 0}>
                <summary>
                  <span className="experience-index">[{String(index).padStart(2, "0")}]</span>
                  <span className="experience-heading">
                    <strong>{role.title}</strong>
                    <span>{role.company}</span>
                  </span>
                  <span className="experience-period">{role.period}</span>
                  <span className="experience-toggle" aria-hidden="true">+</span>
                </summary>

                <div className="experience-body">
                  <div className="experience-meta">
                    <span>company: &quot;{role.company}&quot;</span>
                    <span>location: &quot;{role.location}&quot;</span>
                    <span>period: &quot;{role.period}&quot;</span>
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

        <section className="resume-section" id="education" aria-labelledby="education-title">
          <div className="resume-section-heading">
            <p className="section-label">{"// education[]"}</p>
            <h2 id="education-title">Education.</h2>
          </div>

          <div className="experience-list">
            {education.map((item, index) => (
              <details className="experience-item" key={item.school}>
                <summary>
                  <span className="experience-index">[{String(index).padStart(2, "0")}]</span>
                  <span className="experience-heading">
                    <strong>{item.school}</strong>
                    <span>{item.degree}</span>
                  </span>
                  <span className="experience-period">{item.period}</span>
                  <span className="experience-toggle" aria-hidden="true">+</span>
                </summary>
                <div className="experience-body">
                  <div className="experience-meta">
                    <span>period: &quot;{item.period}&quot;</span>
                  </div>
                  <div className="experience-copy">
                    <p>{item.degree}</p>
                    <ul>
                      <li>{item.focus}</li>
                    </ul>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="resume-section" id="military-awards" aria-labelledby="awards-title">
          <div className="resume-section-heading">
            <p className="section-label">{"// serviceRecord{}"}</p>
            <div>
              <h2 id="awards-title">Military Awards & Medals.</h2>
              <p className={styles.placeholderNote}>
                Decorations, qualifications, and formal military education from my service record, with the Schützenschnur Gold qualification added from German military training.
              </p>
            </div>
          </div>

          <div className={styles.militaryGroup}>
            <h3 className={styles.militarySubheading}>awards[]</h3>
            <ServiceRecordTable records={militaryAwards} />
          </div>

          <div className={styles.militaryGroup}>
            <h3 className={styles.militarySubheading}>qualifications[]</h3>
            <ServiceRecordTable records={militaryQualifications} />
          </div>

          <div className={styles.militaryGroup}>
            <h3 className={styles.militarySubheading}>militaryTraining[]</h3>
            <div className={styles.awardsTable}>
              {militaryTraining.map((training, index) => (
                <div className={styles.trainingRow} key={training.name}>
                  <span>[{String(index).padStart(2, "0")}]</span>
                  <strong>{training.name}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="resume-bottom">
          <p>resume.end()</p>
          <div>
            <a href="mailto:ronellagustin@outlook.com">email ↗</a>
            {" · "}
            <a href="tel:+18182313066">phone ↗</a>
          </div>
        </section>
      </main>
    </>
  );
}
