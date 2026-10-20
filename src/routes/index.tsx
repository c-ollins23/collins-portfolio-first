import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import bhVideo from "@/assets/blackhole_loop.mp4.asset.json";
import bhPoster from "@/assets/blackhole_poster.jpg.asset.json";
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
        <h2 className="font-display text-3xl font-light tracking-tight">PROJECTS</h2>
        <span className="font-mono text-sm text-muted-foreground">{total} PROJECTS</span>
      </div>
      <div className="mx-auto max-w-4xl px-6 pb-[10vh] pt-10 md:px-16">
        {items.map((it, i) => (
          <div key={it.title} className="sticky mb-10" style={{ top: `${84 + i * 54}px`, zIndex: i + 1 }}>
            <article className="reveal glass-surface overflow-hidden rounded-lg border border-border">
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
        <div aria-hidden className="h-[35vh]" />
      </div>
    </section>
  );
}
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
      { name: "theme-color", content: "#000000" },
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

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function SpaceBackground() {
  const [motion, setMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setMotion(!mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return (
    <div className="space-bg" aria-hidden>
      {motion ? (
        <video src={bhVideo.url} poster={bhPoster.url} autoPlay muted loop playsInline />
      ) : (
        <img src={bhPoster.url} alt="" />
      )}
    </div>
  );
}

function Index() {
  useReveal();
  return (
    <div className="portfolio-page min-h-screen bg-background font-sans text-foreground">
      <SpaceBackground />
      <nav className="glass-surface sticky top-4 z-50 mx-auto my-4 flex w-fit items-center gap-1 rounded-full border border-border px-3 py-2 text-xs uppercase tracking-widest text-muted-foreground">
        {nav.map(({ label, icon: Icon }) => (
          <a key={label} href={`#${label.toLowerCase()}`} className="flex items-center gap-2 rounded-full px-3 py-2 transition-colors hover:bg-secondary hover:text-foreground">
            <Icon className="h-4 w-4" /><span className="hidden sm:inline">{label}</span>
          </a>
        ))}
        <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="ml-1 rounded-full bg-primary p-2 text-primary-foreground transition hover:brightness-125">
          <LinkedInIcon />
        </a>
      </nav>

      <header className="-mt-20 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-16">
          <div className="max-w-xl">
            <p className="reveal text-xs uppercase tracking-[0.3em] text-muted-foreground">Collins Omondi · Full Stack Developer</p>
            <h1 className="reveal hero-title hero-glow mt-6 font-display">Elevating digital frontiers</h1>
            <p className="reveal mt-6 max-w-md text-lg font-light leading-relaxed text-muted-foreground">
              I design and build fast, reliable web products — from interface to cloud.
            </p>
            <a href="#contact" className="reveal glow-btn mt-10 inline-block rounded-full bg-primary px-7 py-3 text-sm font-medium uppercase tracking-widest text-primary-foreground transition hover:brightness-110">
              Contact me
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16 md:px-16">
        <section className="grid gap-6 md:grid-cols-2">
          <div id="about" className="reveal glass-surface rounded-2xl p-8">
            <h2 className="font-display text-3xl font-light tracking-tight">ABOUT ME</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Experienced developer bridging frontend aesthetics with scalable backend architecture —
              building fast, reliable products from first sketch to production cloud deployment.
            </p>
          </div>
          <div id="skills" className="reveal glass-surface rounded-2xl p-8">
            <h2 className="font-display text-3xl font-light tracking-tight">SKILLS</h2>
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
        <section id="contact" className="reveal contact-glass mt-20 rounded-2xl px-4 py-12 text-center">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" /> Available for new projects
          </span>
          <h2 className="mt-4 font-display text-3xl font-light tracking-tight">LET'S BUILD SOMETHING</h2>
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
