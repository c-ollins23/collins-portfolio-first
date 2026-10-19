import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";
import { FaLinkedin, FaGithub, FaAws } from "react-icons/fa";
import { SiReact, SiTypescript, SiNodedotjs, SiPostgresql } from "react-icons/si";
import { ArrowRight, Download } from "lucide-react";
import hero from "@/assets/hero.jpg.asset.json";

const NAME = "Collins Omondi";
const LINKEDIN = "https://www.linkedin.com/in/collins-omondi-40b4b2441";
const GITHUB = "https://github.com/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Collins Omondi — Full Stack Developer" },
      { name: "description", content: "Collins Omondi builds fast, scalable web apps with React, Node and PostgreSQL. Open to work." },
      { property: "og:title", content: "Collins Omondi — Full Stack Developer" },
      { property: "og:description", content: "Fast, scalable web apps that ship. React · Node · PostgreSQL." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = ["Projects", "About", "Blog", "Contact"];
const TECH = [
  { Icon: SiReact, label: "React" },
  { Icon: SiTypescript, label: "TypeScript" },
  { Icon: SiNodedotjs, label: "Node.js" },
  { Icon: SiPostgresql, label: "PostgreSQL" },
  { Icon: FaAws, label: "AWS" },
];
const HEADLINE = "I build fast, scalable web apps that ship.".split(" ");
const ACCENT = "scalable";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

function Index() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 80]);

  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
  const glitch: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, x: 0, filter: "blur(6px)" },
        show: (i: number) => ({
          opacity: [0, 1, 0.4, 1, 1],
          x: [0, -4, 3, -1, 0],
          filter: ["blur(6px)", "blur(0px)", "blur(2px)", "blur(0px)", "blur(0px)"],
          textShadow: [
            "0 0 0 transparent",
            "2px 0 #2BA6B5, -2px 0 #ff3b6b",
            "-3px 0 #2BA6B5, 3px 0 #ff3b6b",
            "1px 0 #2BA6B5, -1px 0 #ff3b6b",
            "0 0 0 transparent",
          ],
          transition: { duration: 0.6, delay: 0.1 + i * 0.05, ease: "easeOut" },
        }),
      };

  return (
    <div className="min-h-svh bg-background text-foreground font-sans">
      <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-md">
        <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
          <a href="/" className={`rounded font-display text-base font-extrabold tracking-tight ${focusRing}`}>
            {NAME}
          </a>
          <ul className="hidden items-center gap-7 md:flex">
            {NAV.map((n) => (
              <li key={n}>
                <a href={`#${n.toLowerCase()}`} className={`rounded text-sm text-muted-foreground transition-colors hover:text-foreground ${focusRing}`}>
                  {n}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-1">
            <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className={`rounded-md p-2 text-muted-foreground hover:text-foreground ${focusRing}`}>
              <FaLinkedin className="h-5 w-5" aria-hidden />
            </a>
            <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub profile" className={`rounded-md p-2 text-muted-foreground hover:text-foreground ${focusRing}`}>
              <FaGithub className="h-5 w-5" aria-hidden />
            </a>
          </div>
        </nav>
        <ul className="flex justify-center gap-6 pb-3 md:hidden">
          {NAV.map((n) => (
            <li key={n}>
              <a href={`#${n.toLowerCase()}`} className={`rounded text-sm text-muted-foreground hover:text-foreground ${focusRing}`}>{n}</a>
            </li>
          ))}
        </ul>
      </header>

      <main>
        <section aria-labelledby="hero-title" className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:py-0">
          <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.1 } } }} className="order-2 md:order-1">
            <motion.p variants={item} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              Full Stack Developer · Open to work
            </motion.p>

            <motion.h1 id="hero-title" variants={item} className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              {HEADLINE.map((w, i) => (
                <motion.span key={i} custom={i} variants={glitch} initial="hidden" animate="show" className={`inline-block ${w === ACCENT ? "text-primary" : ""}`}>
                  {w}&nbsp;
                </motion.span>
              ))}
            </motion.h1>

            <motion.p variants={item} className="mt-5 max-w-lg text-base text-muted-foreground sm:text-lg">
              React · Node · PostgreSQL. Cut load times 40% at Company.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className={`inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110 ${focusRing}`}>
                View Projects <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a href="/cv.pdf" download className={`inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-card ${focusRing}`}>
                <Download className="h-4 w-4" aria-hidden /> Download CV
              </a>
            </motion.div>

            <motion.ul variants={item} aria-label="Tech stack" className="mt-10 flex flex-wrap items-center gap-5 text-muted-foreground">
              {TECH.map(({ Icon, label }) => (
                <li key={label} title={label}>
                  <Icon className="h-6 w-6" aria-hidden />
                  <span className="sr-only">{label}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            style={{ y: photoY }}
            initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 mx-auto w-64 sm:w-80 md:order-2 md:w-full md:max-w-md"
          >
            <div aria-hidden className="absolute inset-6 rounded-full bg-primary/25 blur-3xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <img src={hero.url} alt={`Portrait of ${NAME}`} className="h-full w-full object-cover" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/40" />
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
