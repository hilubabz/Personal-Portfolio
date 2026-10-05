import { Reveal } from "@/components/motion/reveal";
import { achievements } from "@/constants/achievements";

export function AchievementsOverview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <div className="mb-16">
            <p className="mb-3 text-sm font-medium text-primary">GROWTH</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground font-heading sm:text-4xl">
              Achievements
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-3">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2.5 text-primary">
                    <Icon size={20} />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
