import { achievements } from "@/constants/achievements";
import { Reveal } from "@/components/motion/reveal";

export const AchievementsComponent = () => {
  return (
    <main className="min-h-screen px-6 pb-24 pt-28 md:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 space-y-4">
          <Reveal>
            <p className="text-sm font-medium text-primary">GROWTH</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-4xl font-bold tracking-tight text-foreground font-heading sm:text-5xl">
              Achievements
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Each project and collaboration sharpens my skills, strengthens my
              workflow, and pushes my craft forward.
            </p>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2.5 text-primary">
                    <Icon size={22} />
                  </div>
                  <h2 className="mb-2 text-xl font-semibold text-foreground">
                    {item.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </main>
  );
};
