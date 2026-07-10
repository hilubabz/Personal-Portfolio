import ScrollAnimate from "@/framer/scroll-animate";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Home = () => {
  return (
    <main className="page-shell min-h-screen px-6 py-20 sm:px-10 lg:px-20">
      <section className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-6">
          <ScrollAnimate>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm font-medium text-red-400">
              <Sparkles size={16} />
              Frontend developer & lifelong learner
            </div>
          </ScrollAnimate>
          <ScrollAnimate>
            <div className="flex flex-col gap-2">
              <h1 className="flex flex-wrap items-baseline gap-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                  I&apos;m
                </span>
                Utsarga Manandhar
              </h1>
              <p className="text-base text-muted-foreground">
                A Full Stack Developer specializing in Next.js, React, Node.js,
                Express, MongoDB, and AI-powered web applications.
              </p>
            </div>
          </ScrollAnimate>
          <ScrollAnimate>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              I build modern web experiences that feel sharp, useful, and
              memorable.
            </h2>
          </ScrollAnimate>
          <ScrollAnimate>
            <p className="max-w-xl text-lg leading-8 text-muted-foreground">
              I enjoy turning ideas into polished interfaces with React,
              Next.js, and thoughtful UX. My work blends clean structure,
              creative visual design, and practical product thinking.
            </p>
          </ScrollAnimate>
          <ScrollAnimate>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
              >
                Explore projects <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:border-red-500 hover:text-red-500"
              >
                Let’s connect
              </Link>
            </div>
          </ScrollAnimate>
        </div>

        <ScrollAnimate>
          <div className="w-full max-w-lg space-y-4">
            <div className="page-surface overflow-hidden p-0 shadow-2xl shadow-black/10">
              <div className="relative h-80 overflow-hidden bg-linear-to-br from-red-500/20 via-transparent to-background">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.25),transparent_45%)]" />
                <div className="absolute inset-0 flex items-end justify-center p-4">
                  <div className="h-64 w-full max-w-[18rem] rounded-[2rem] border border-white/10 bg-background/70 p-2 shadow-2xl shadow-black/20 backdrop-blur">
                    <div className="flex h-full items-center justify-center rounded-[1.5rem] border border-dashed border-red-500/30 bg-linear-to-br from-red-500/10 to-transparent text-center text-sm font-medium text-muted-foreground">
                      <Image
                        src={"/Utsarga.webp"}
                        alt="Utsarga Manandhar Profile Image"
                        height={64}
                        width={228}
                        priority
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="page-surface p-6">
              <div className="space-y-4">
                <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                    Currently
                  </p>
                  <h2 className="mt-2 text-lg font-semibold text-foreground">
                    Building thoughtful interfaces with modern tools.
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    I enjoy turning ideas into practical, polished experiences
                    that feel effortless to use.
                  </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                    Interest
                  </p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    React, Next.js, product thinking, and crafting interfaces
                    that feel both elegant and useful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimate>
      </section>
    </main>
  );
};
