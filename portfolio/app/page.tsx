import { Navbar } from "@/components/navbar";
import { Section } from "@/components/section";

const skills = [
  "Java", "Python", "C/C++", "SQL (Postgres)", "JavaScript",
  "React", "Next.js", "Node.js", "Flask", "FastAPI",
  "Linux", "Git", "Firebase", "JUnit",
];

const experience = [
  {
    role: "Software Developer - AI Trainer",
    org: "DataAnnotation Tech",
    dates: "Feb 2024 – Present",
    bullets: [
      "Assessed and optimized AI-generated code for improved reasoning and output quality.",
      "Created coding challenges in Python, HTML, C++, and SQL to enhance model capabilities.",
    ],
  },
  {
    role: "Undergraduate Research Assistant",
    org: "Phoenix College / WAESO",
    dates: "Sep 2023 – Jul 2024",
    bullets: [
      "Analyzed USL soccer league data using Poisson distribution to predict match outcomes.",
      "Built custom Python scripts to parse and process data for 450+ matches.",
    ],
  },
  {
    role: "Junior Programming Intern",
    org: "American Express",
    dates: "Jan 2022 – Jul 2022",
    bullets: [
      "Worked with Active Directory and JUnit over SSH on Linux servers.",
      "Used Splunk and Kibana to monitor and report suspicious account activity.",
      "Maintained organization of sensitive customer data.",
    ],
  },
];

const projects = [
  {
  title: "PolyView (Hackathon Project)",
  stack: ["React", "TypeScript", "Bun", "Polymarket API"],
  desc: "Hackathon-built analytics dashboard for Polymarket markets with a clean UI and fast iteration workflow.",
  links: [
    { label: "Repo", href: "https://github.com/Americana808/PolyView" },
  ],
},
  {
    title: "Role-Based Q&A Platform",
    stack: ["Java", "JavaFX", "JUnit", "SQLite"],
    desc: "Multi-role forum platform with role-based access, moderation, and persistent data storage.",
    links: [
      // Replace these with the exact repo URLs when you paste them
      { label: "Repo", href: "https://github.com/Americana808/role-based-qa-platform" },
    ],
  },
  {
    title: "PHX Flight Data Scraper & Tracker",
    stack: ["Python", "Selenium", "Flask", "HTML/CSS"],
    desc: "Real-time flight data dashboard used at an airport retail kiosk to monitor schedules.",
    links: [
      { label: "Repo", href: "https://github.com/Americana808/PHX-Flight-data" },
    ],
  },
  {
  title: "Blog API",
  stack: ["C#", ".NET", "PostgreSQL", "REST"],
  desc: "Production-style REST API for a blogging platform with authentication, validation, and persistent storage. Designed with layered architecture and API best practices.",
  links: [
    { label: "Repo", href: "https://github.com/Americana808/BlogAPI" },
  ],
}

];

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground">
      {children}
    </span>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border p-5 hover:bg-[rgb(var(--border))]/10 transition">
      {children}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <a id="top" />
      <Navbar />

      <main className="mx-auto max-w-3xl px-6 py-14 space-y-20">
        {/* Hero */}
        <Section>
          <h1 className="text-4xl font-bold tracking-tight">
            Hello there, I'm Marco 👋
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Computer Science student focused on backend engineering, systems programming,
            and building production-ready applications.
          </p>

          <div className="flex flex-wrap gap-3 text-sm pt-2">
            <a
              className="underline underline-offset-4 hover:opacity-80"
              href="https://github.com/Americana808"
            >
              GitHub
            </a>
            <a
              className="underline underline-offset-4 hover:opacity-80"
              href="https://www.linkedin.com/in/marco-portillo-5852411b8"
            >
              LinkedIn
            </a>
          </div>
        </Section>

        {/* About */}
        <Section title="About">
          <p className="text-muted-foreground leading-relaxed">
            I’m a Computer Science student at Arizona State University with experience in backend systems,
            data analysis, and full-stack development. I like building efficient, scalable applications and learning new technologies.
            In my free time, you'll catch me VJing, finding new music, or rolling on the mats.
          </p>
        </Section>

        {/* Experience */}
        <Section title="Experience">
          <div className="space-y-4">
            {experience.map((e) => (
              <Card key={e.role}>
                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold">{e.role}</h3>
                    <p className="text-sm text-muted-foreground">{e.dates}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{e.org}</p>
                </div>

                <ul className="list-disc ml-5 mt-3 text-muted-foreground space-y-1">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        

        {/* Projects */}
        <Section id="projects" title="Projects">
          <div className="space-y-4">
            {projects.map((p) => (
              <Card key={p.title}>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <div className="flex gap-3 text-sm">
                    {p.links.map((l) => (
                      <a key={l.href} className="hover:underline" href={l.href}>
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground mt-2">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section title="Skills">
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact">
          <p className="text-muted-foreground">
            Email:{" "}
            <a
              className="underline underline-offset-4 hover:opacity-80"
              href="mailto:mportillo1605@gmail.com"
            >
              mportillo1605@gmail.com
            </a>
          </p>
        </Section>

        {/* Footer */}
        <footer className="pt-6 pb-2 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Marco Portillo
        </footer>
      </main>
    </>
  );
}
