import { createFileRoute } from "@tanstack/react-router";
import { AppWindow, Network, Database, Cloud, User, Film, Cpu, BookOpen, Mail, MessageCircle } from "lucide-react";

const LINKEDIN = "https://www.linkedin.com/in/collins-omondi-40b4b2441";
const EMAIL = "collinsjoel28@gmail.com";
const WHATSAPP = "https://wa.me/254112504334";

function LinkedInIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function StackingCards({ items }: { items: { img: string; title: string }[] }) {
  const total = String(items.length).padStart(2, "0");
  return (
    <section id="projects" className="relative mt-24">
      <div className="mx-auto flex w-full max-w-6xl items-end justify-between px-6 md:px-16">
        <h2 className="font-display text-2xl font-bold">PROJECTS</h2>
        <span className="font-mono text-sm text-muted-foreground">{total} CARDS</span>
      </div>
      <div className="mx-auto max-w-4xl px-6 pb-[40vh] pt-10 md:px-16">
        {items.map((it, i) => (
          <div key={it.title} className="sticky mb-10" style={{ top: `${84 + i * 54}px`, zIndex: i + 1 }}>
            <article className="overflow-hidden rounded-lg border border-border bg-card shadow-2xl">
              <header className="flex items-center justify-between border-b border-border px-5 py-3">
                <span className="font-display text-base font-bold uppercase tracking-wide">{it.title}</span>
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")} / {total}
                </span>
              </header>
              <img
                src={it.img}
                alt={it.title}
                className="aspect-[16/9] w-full object-cover grayscale-[35%] transition duration-700 hover:grayscale-0"
              />
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
import hero from "@/assets/hero.jpg.asset.json";
import p0 from "@/assets/p0.jpg.asset.json";
import p1 from "@/assets/p1.jpg.asset.json";
import p2 from "@/assets/p2.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Collins Omondi — Full Stack Developer Portfolio" },
      { name: "description", content: "Elevating digital frontiers: full stack developer portfolio of Collins Omondi." },
      { property: "og:title", content: "Collins Omondi — Full Stack Developer" },
      { property: "og:description", content: "Frontend, backend, database and cloud projects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { label: "About", icon: User },
  { label: "Projects", icon: Film },
  { label: "Skills", icon: Cpu },
  { label: "Blog", icon: BookOpen },
  { label: "Contact", icon: Mail },
];
const skills = [
  { name: "Frontend", icon: AppWindow, level: 85 },
  { name: "Backend", icon: Network, level: 80 },
  { name: "Database", icon: Database, level: 60 },
  { name: "Cloud", icon: Cloud, level: 75 },
];
const projects = [
  { img: p0.url, title: "Developer Tooling" },
  { img: p1.url, title: "API Platform" },
  { img: p2.url, title: "Dashboard UI" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <nav className="sticky top-4 z-50 mx-auto my-4 flex w-fit items-center gap-1 rounded-full border border-border bg-background/70 px-3 py-2 text-xs uppercase tracking-widest text-muted-foreground backdrop-blur-md">
        {nav.map(({ label, icon: Icon }) => (
          <a key={label} href={`#${label.toLowerCase()}`} className="flex items-center gap-2 rounded-full px-3 py-2 transition-colors hover:bg-secondary hover:text-foreground">
            <Icon className="h-4 w-4" /><span className="hidden sm:inline">{label}</span>
          </a>
        ))}
        <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="ml-1 rounded-full bg-primary p-2 text-primary-foreground transition hover:brightness-125">
          <LinkedInIcon />
        </a>
      </nav>

      <header className="relative mx-auto max-w-6xl">
        <img src={hero.url} alt="Collins Omondi in front of mountains" className="w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute bottom-[8%] right-[6%] max-w-md text-right md:text-left">
          <h1 className="font-display text-4xl font-extrabold leading-none md:text-7xl">
            ELEVATING<br /><span className="text-muted-foreground">DIGITAL<br />FRONTIERS</span>
          </h1>
          <p className="mt-4 text-sm uppercase tracking-wide md:text-xl">Full Stack Developer Portfolio</p>
          <a href="#contact" className="mt-6 inline-block rounded-md bg-primary px-6 py-3 font-semibold uppercase text-primary-foreground transition hover:brightness-125">
            Contact me
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16 md:px-16">
        <section className="grid gap-12 md:grid-cols-2">
          <div id="about">
            <h2 className="font-display text-2xl font-bold">ABOUT ME</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Experienced developer bridging frontend aesthetics with scalable backend architecture —
              building fast, reliable products from first sketch to production cloud deployment.
            </p>
          </div>
          <div id="skills">
            <h2 className="font-display text-2xl font-bold">SKILLS</h2>
            <div className="mt-4 grid grid-cols-2 gap-6">
              {skills.map(({ name, icon: Icon, level }) => (
                <div key={name} className="flex items-center gap-3">
                  <div className="rounded-md bg-secondary p-2"><Icon className="h-5 w-5" /></div>
                  <div className="flex-1">
                    <p className="text-sm">{name}</p>
                    <div className="mt-2 h-1.5 rounded-full bg-muted">
                      <div className="h-full rounded-full bg-muted-foreground" style={{ width: `${level}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <StackingCards items={projects} />

      <main className="mx-auto max-w-6xl px-6 pb-16 md:px-16">
        <section id="contact" className="mt-20 rounded-lg border border-border bg-card p-10 text-center">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" /> Available for new projects
          </span>
          <h2 className="mt-4 font-display text-2xl font-bold">LET'S BUILD SOMETHING</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:brightness-125">
              <Mail className="h-4 w-4" /> {EMAIL}
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-secondary px-6 py-3 font-semibold text-secondary-foreground transition hover:brightness-125">
              <MessageCircle className="h-4 w-4" /> WhatsApp 0112 504 334
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-secondary px-6 py-3 font-semibold text-secondary-foreground transition hover:brightness-125">
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
