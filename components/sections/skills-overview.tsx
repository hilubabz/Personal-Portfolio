import { Reveal } from "@/components/motion/reveal";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const GROUPS = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML / CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "Go", "PHP", "FastAPI", ".NET"],
  },
  {
    name: "Database",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    name: "Tools & Platform",
    skills: ["Git & GitHub", "Vercel", "Docker", "Figma", "Postman", "Playwright"],
  },
];

export function SkillsOverview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p className="mb-3 text-sm font-medium text-primary">EXPERTISE</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground font-heading sm:text-4xl">
                Skills & Technologies
              </h2>
            </div>
            <Link
              href="/skills"
              className="hidden items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:flex"
            >
              View all <ArrowUpRight size={14} />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map((group, i) => (
            <Reveal key={group.name} delay={i * 0.08}>
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  {group.name}
                </h3>
                <ul className="space-y-2.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
