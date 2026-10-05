import { Reveal } from "@/components/motion/reveal";
import { professional } from "@/constants/experience";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ExperienceTimeline() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p className="mb-3 text-sm font-medium text-primary">
                BACKGROUND
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground font-heading sm:text-4xl">
                Experience & Education
              </h2>
            </div>
            <Link
              href="/experience"
              className="hidden items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:flex"
            >
              View details <ArrowUpRight size={14} />
            </Link>
          </div>
        </Reveal>

        <div className="relative space-y-10 pl-8">
          {/* Timeline line */}
          <div className="absolute bottom-0 left-1.25 top-2 w-px bg-border" />

          {professional.map((item, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="relative">
                {/* Dot */}
                <div className="absolute -left-8 top-1.5">
                  <div
                    className={`relative h-2.5 w-2.5 rounded-full ${
                      item.active
                        ? "bg-primary shadow-[0_0_8px_rgba(99,102,241,0.4)]"
                        : "border-2 border-border bg-background"
                    }`}
                  />
                </div>

                {/* Content */}
                <div>
                  <p className="mb-1 text-xs font-medium text-primary">
                    {item.date}
                  </p>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.position}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.institute}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
