import { professional } from "@/constants/experience";
import { Reveal } from "@/components/motion/reveal";

export const ExperienceComponent = () => {
  return (
    <main className="min-h-screen px-6 pb-24 pt-28 md:px-10 lg:px-20">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-16 space-y-4">
          <Reveal>
            <p className="text-sm font-medium text-primary">BACKGROUND</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-4xl font-bold tracking-tight text-foreground font-heading sm:text-5xl">
              Experience & Education
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-lg text-muted-foreground">
              My professional journey through education and work experience.
            </p>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="relative space-y-12 pl-8">
          {/* Timeline line */}
          <div className="absolute bottom-0 left-1.25 top-2 w-px bg-border" />

          {professional.map((val, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="relative">
                {/* Dot */}
                <div className="absolute -left-8 top-1.5">
                  <div
                    className={`relative h-3 w-3 rounded-full ${
                      val.active
                        ? "bg-primary shadow-[0_0_10px_rgba(99,102,241,0.4)]"
                        : "border-2 border-border bg-background"
                    }`}
                  >
                    {val.active && (
                      <span className="absolute -inset-1 animate-ping rounded-full bg-primary/30" />
                    )}
                  </div>
                </div>

                {/* Content card */}
                <div className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="text-xs font-medium text-primary">
                      {val.date}
                    </span>
                    <span className="rounded-md border border-border bg-background px-2 py-0.5 text-xs text-muted-foreground">
                      {val.type === "work" ? "Work" : "Education"}
                    </span>
                  </div>
                  <h3 className="mb-1 text-xl font-semibold text-foreground">
                    {val.position}
                  </h3>
                  <h4 className="mb-3 text-sm text-muted-foreground">
                    {val.institute}
                  </h4>
                  <p className="text-sm font-medium text-primary/80">
                    {val.sector}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {val.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
};