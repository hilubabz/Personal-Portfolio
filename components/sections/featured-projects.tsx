import { Reveal } from "@/components/motion/reveal";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const FEATURED = [
  {
    num: "01",
    name: "SEO Analyzer",
    desc: "Full-stack SEO auditing tool that crawls websites concurrently, analyzes on-page SEO, detects issues, and calculates actionable scores.",
    stack: ["Next.js", "Go"],
    image: "/seo.png",
    live: "https://seo.utsargamanandhar.com.np",
  },
  {
    num: "02",
    name: "SocialSphere",
    desc: "Social platform with real-time messaging via Socket.io, community feeds, and ML-powered offensive comment filtering using Logistic Regression.",
    stack: ["Next.js", "MongoDB", "Python", "Socket.io"],
    image: "/SocialSphere.png",
    live: "https://socialsphere.utsargamanandhar.com.np",
  },
  {
    num: "03",
    name: "HavocAura",
    desc: "E-commerce platform for PC parts with product catalog, shopping cart, eSewa payment integration, and a custom PC builder workflow.",
    stack: ["React.js", "Express.js", "MongoDB"],
    image: "/HavocAura.png",
    live: "",
  },
];

export function FeaturedProjects() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p className="mb-3 text-sm font-medium text-primary">
                SELECTED WORK
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground font-heading sm:text-4xl">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:flex"
            >
              View all <ArrowUpRight size={14} />
            </Link>
          </div>
        </Reveal>

        <div className="space-y-6">
          {FEATURED.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div className="group grid gap-6 overflow-hidden rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 md:grid-cols-[1.2fr_1fr] md:p-6">
                {/* Image */}
                <div className="relative aspect-16/10 overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 55vw"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center gap-4 py-2">
                  <p className="text-xs font-medium tracking-widest text-muted-foreground">
                    PROJECT / {p.num}
                  </p>
                  <h3 className="text-2xl font-bold text-foreground font-heading">
                    {p.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.live && (
                    <div className="pt-1">
                      <Link
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                      >
                        Live <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              View all projects <ArrowUpRight size={14} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
