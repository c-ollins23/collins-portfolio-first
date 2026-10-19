import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
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

function FilmStrip({ items }: { items: { img: string; title: string }[] }) {
  const wrap = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = wrap.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      setP(Math.min(1, Math.max(0, -r.top / total)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  const holes = (
    <div className="flex justify-between gap-3 px-3 py-2">
      {Array.from({ length: 60 }).map((_, i) => (
        <span key={i} className="h-3 w-4 shrink-0 rounded-sm bg-background" />
      ))}
    </div>
  );
  return (
    <section id="projects" ref={wrap} style={{ height: `${items.length * 80 + 60}vh` }} className="relative mt-20">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto mb-8 flex w-full max-w-6xl items-end justify-between px-6 md:px-16">
          <h2 className="font-display text-2xl font-bold">PROJECTS</h2>
          <span className="font-mono text-sm text-muted-foreground">
            {String(Math.min(items.length, Math.floor(p * items.length) + 1)).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>
        </div>
        <div className="overflow-hidden bg-card">
          {holes}
          <div
            className="flex gap-6 px-[10vw] py-2 will-change-transform"
            style={{ transform: `translateX(calc(${-p} * (100% - 100vw)))`, width: "max-content" }}
          >
            {items.map((it, i) => (
              <figure key={it.title} className="group relative w-[70vw] max-w-2xl shrink-0 overflow-hidden rounded-sm border border-border">
                <img src={it.img} alt={it.title} className="aspect-[16/10] w-full object-cover grayscale-[40%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-background/90 to-transparent p-5">
                  <span className="font-display text-lg font-bold">{it.title}</span>
                  <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          {holes}
        </div>
        <div className="mx-auto mt-8 h-0.5 w-full max-w-6xl bg-muted px-6">
          <div className="h-full bg-primary" style={{ width: `${p * 100}%` }} />
        </div>
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

const nav = ["About", "Projects", "Skills", "Blog", "Contact"];
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
      <nav className="flex justify-center gap-8 py-8 text-sm uppercase tracking-widest text-muted-foreground">
        {nav.map((n) => (
          <a key={n} href={`#${n.toLowerCase()}`} className="transition-colors hover:text-foreground">{n}</a>
        ))}
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

        <section id="projects" className="mt-20">
          <h2 className="font-display text-2xl font-bold">PROJECTS</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <figure key={p.title} className="group overflow-hidden rounded-lg bg-card">
                <img src={p.img} alt={p.title} className="aspect-[3/2] w-full object-cover transition duration-500 group-hover:scale-105" />
                <figcaption className="p-4 text-sm text-muted-foreground">{p.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-20 rounded-lg bg-card p-10 text-center">
          <h2 className="font-display text-2xl font-bold">LET'S BUILD SOMETHING</h2>
          <a href="mailto:hello@example.com" className="mt-6 inline-block rounded-md bg-primary px-6 py-3 font-semibold uppercase text-primary-foreground">Contact me</a>
        </section>
      </main>
    </div>
  );
}
