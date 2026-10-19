import { createFileRoute } from "@tanstack/react-router";
import { AppWindow, Network, Database, Cloud } from "lucide-react";
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
