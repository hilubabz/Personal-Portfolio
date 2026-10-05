import { Reveal } from "@/components/motion/reveal";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center pb-16 pt-28">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-150 w-200 -translate-x-1/2 -translate-y-1/4 rounded-full bg-primary/4 blur-[120px]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          {/* Text content */}
          <div className="max-w-2xl space-y-7">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium tracking-wide text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                FULL STACK DEVELOPER · NEPAL
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-4xl font-bold tracking-tight text-foreground font-heading sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
                I build fast, thoughtful{" "}
                <span className="text-primary">web experiences.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                Full stack developer building modern web applications with
                Next.js, React, TypeScript, and Node.js. Currently at Global
                Square IT, turning ideas into polished, production-ready
                products.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
                >
                  View Projects
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  Contact Me
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="flex items-center gap-4 pt-1">
                <Link
                  href="https://github.com/hilubabz"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="GitHub"
                >
                  <FaGithub size={18} />
                </Link>
                <Link
                  href="https://linkedin.com/in/utsargamanandhar"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </Link>
                <Link
                  href="/CV.pdf"
                  target="_blank"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Resume"
                >
                  <FileText size={18} />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Profile image - desktop only */}
          <Reveal delay={0.15} direction="left">
            <div className="relative hidden lg:block">
              <div className="relative h-85 w-70 overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-black/5">
                <Image
                  src="/Utsarga.webp"
                  alt="Utsarga Manandhar"
                  fill
                  className="object-cover"
                  priority
                  sizes="280px"
                />
              </div>
              {/* Subtle decorative glow behind image */}
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-primary/6 blur-2xl" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
