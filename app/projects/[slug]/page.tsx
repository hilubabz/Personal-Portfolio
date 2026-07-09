import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/constants/projects";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = PROJECTS.find((entry) => entry.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="page-shell min-h-screen px-6 py-24 md:px-10 lg:px-20">
      <div className="mx-auto max-w-5xl space-y-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-red-500"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        <div className="page-surface overflow-hidden shadow-2xl shadow-black/10">
          <div className="relative h-72 w-full overflow-hidden bg-muted/80 md:h-96">
            <Image
              src={`/${project.image}`}
              alt={project.name}
              fill
              className="object-cover"
              onError={(event) => {
                event.currentTarget.src = "/Logo.png";
              }}
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t ${project.accent} via-transparent to-transparent opacity-80`}
            />
          </div>

          <div className="space-y-6 p-8 md:p-10">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                Case study
              </p>
              <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
                {project.name}
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-sm text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-border/70 bg-background/70 p-5">
                <h2 className="mb-3 text-lg font-semibold text-foreground">
                  Highlights
                </h2>
                <ul className="space-y-2 text-sm leading-7 text-muted-foreground">
                  {project.impact.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-2 w-2 rounded-full bg-red-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-border/70 bg-background/70 p-5">
                <h2 className="mb-3 text-lg font-semibold text-foreground">
                  Why it matters
                </h2>
                <p className="text-sm leading-7 text-muted-foreground">
                  This project reflects a mix of product thinking, polished UI
                  details, and practical implementation choices that make the
                  experience feel complete.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
