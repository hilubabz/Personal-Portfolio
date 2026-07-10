import { Award, Sparkles, Trophy } from "lucide-react";
import { Metadata } from "next";

const achievements = [
  {
    title: "Building polished frontends",
    detail:
      "Crafted modern, responsive interfaces with a strong focus on clarity and usability.",
    icon: Sparkles,
  },
  {
    title: "Full-stack project experience",
    detail:
      "Delivered end-to-end work spanning UI, API integration, and database-backed features.",
    icon: Trophy,
  },
  {
    title: "Continuous learning mindset",
    detail:
      "Regularly refining skills in React, Next.js, TypeScript, and modern development workflows.",
    icon: Award,
  },
];

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "A list of achievements.",
};

export default function AchievementsPage() {
  return (
    <main className="page-shell min-h-screen px-6 py-24 md:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            Achievements
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            A steady focus on growth and quality.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Each project and collaboration sharpens my skills, strengthens my
            workflow, and pushes my craft forward.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="page-surface p-6">
                <div className="mb-4 inline-flex rounded-2xl bg-red-500/10 p-3 text-red-500">
                  <Icon size={22} />
                </div>
                <h2 className="mb-2 text-xl font-semibold text-foreground">
                  {item.title}
                </h2>
                <p className="text-sm leading-7 text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
