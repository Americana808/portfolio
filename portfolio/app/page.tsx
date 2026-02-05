import { Navbar } from "@/components/navbar";
import { Section } from "@/components/section";
import Image from "next/image";

<Image
  src="/headshot.jpg"
  alt="Marco Portillo headshot"
  width={160}
  height={160}
  className="rounded-full mx-auto mb-6"
/>

const skills = [
  "Java", "Python", "C#", "SQL (Postgres)", "JavaScript", "C/C++",
  "React", "Next.js", "Node.js", "Flask", "HTML/CSS", "Tailwind CSS",
  "Linux", "Git", "Firebase", "JUnit", "REST APIs", "Docker",
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
  {
  role: "Undergraduate Researcher",
  org: "Phoenix College / WAESO",
  dates: "November 2022 - May 2023",
  bullets: [
    "Conducted funded experimental research on superhydrophobic surface design using micro/nano-structured coatings.",
    "Presented findings at the NCUIRE Symposium at Arizona State University. Awarded 1st Place (non-ASU category) and 3rd Place (overall).",
    "Collaborated with faculty mentors to design experiments and interpret results.",
  ],
},

];

const projects = [
  {
  title: "PolyView Polymarket data dashboard",
  stack: ["React", "TypeScript", "Bun", "Polymarket MCP", "Claude AI", "Tailwind CSS", "NewsAPI"],
  desc: "Hackathon built analytics dashboard for Polymarket MCP server integration, leveraging Claude AI for insights with contextual related chart data, NewsAPI for related articles, and recent trade data with filtering for real-time updates.",
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
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Headshot - LEFT */}
            <div className="shrink-0">
              <Image
                src="/headshot.jpg"
                alt="Marco Portillo headshot"
                width={160}
                height={160}
                className="rounded-full border border-border shadow-sm"
                priority
              />
            </div>

            {/* Text - RIGHT */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold tracking-tight">
                Hello there, I'm Marco 👋
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Computer Science student focused on backend engineering, systems programming,
                and building production-ready applications.
              </p>

              <div className="flex flex-wrap gap-4 text-sm pt-4">
                {/* GitHub */}
                <a
                  className="flex items-center gap-2 underline underline-offset-4 hover:opacity-80 transition"
                  href="https://github.com/Americana808"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.38-3.87-1.38-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.18-1.18 3.18-1.18.63 1.57.23 2.73.11 3.02.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.35.78 1.05.78 2.12v3.15c0 .31.21.68.8.56 4.57-1.53 7.85-5.86 7.85-10.96C23.5 5.74 18.27.5 12 .5z" />
                  </svg>
                  GitHub
                </a>

                {/* LinkedIn */}
                <a
                  className="flex items-center gap-2 underline underline-offset-4 hover:opacity-80 transition"
                  href="https://www.linkedin.com/in/marco-portillo-5852411b8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.62-1.85 3.34-1.85 3.57 0 4.23 2.35 4.23 5.41v6.33zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.23 0z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
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
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Email:{" "}
              <a
                className="underline underline-offset-4 hover:opacity-80"
                href="mailto:mportillo1605@gmail.com"
              >
                mportillo1605@gmail.com
              </a>
            </p>

            <div className="flex items-center gap-4">
              {/* GitHub */}
              <a
                href="https://github.com/Americana808"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:opacity-80 transition-opacity"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                  <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.38-3.87-1.38-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.18-1.18 3.18-1.18.63 1.57.23 2.73.11 3.02.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.35.78 1.05.78 2.12v3.15c0 .31.21.68.8.56 4.57-1.53 7.85-5.86 7.85-10.96C23.5 5.74 18.27.5 12 .5z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/YOUR_LINKEDIN/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:opacity-80 transition-opacity"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.62-1.85 3.34-1.85 3.57 0 4.23 2.35 4.23 5.41v6.33zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.23 0z" />
                </svg>
              </a>
            </div>
          </div>
        </Section>


        {/* Footer */}
        <footer className="pt-6 pb-2 text-sm text-muted-foreground">
          © {new Date().getFullYear()} MIT Licensed. Built by Marco Portillo.
        </footer>
      </main>
    </>
  );
}
