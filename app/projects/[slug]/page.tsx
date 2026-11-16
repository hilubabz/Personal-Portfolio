import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/constants/projects";
import { Metadata } from "next";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const project = PROJECTS.find((entry) => entry.slug === params.slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  const title = `${project.name} | Projects`;
  const description = project.summary || project.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://utsargamanandhar.com.np/projects/${project.slug}`,
      images: [
        {
          url: `/${project.image}`,
          alt: project.name,
        },
      ],
    },
    alternates: {
      canonical: `https://utsargamanandhar.com.np/projects/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const project = PROJECTS.find((entry) => entry.slug === params.slug);

  if (!project) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    headline: project.summary,
    description: project.description,
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    image: `https://utsargamanandhar.com.np/${project.image}`,
    url: `https://utsargamanandhar.com.np/projects/${project.slug}`,
    author: {
      "@type": "Person",
      name: "Utsarga Manandhar",
      url: "https://utsargamanandhar.com.np",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="page-shell min-h-screen px-6 py-24 md:px-10 lg:px-20">
        <div className="mx-auto max-w-5xl space-y-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:opacity-80"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>

          <div className="page-surface overflow-hidden shadow-2xl shadow-black/10 rounded-2xl border border-border bg-card">
            <div className="relative h-72 w-full overflow-hidden bg-muted/80 md:h-96">
              <Image
                src={`/${project.image}`}
                alt={project.name}
                fill
                className="object-contain p-6"
                priority
              />
              <div
                className={`absolute inset-0 bg-linear-to-t ${project.accent} via-transparent to-transparent opacity-30`}
              />
            </div>

            <div className="space-y-6 p-8 md:p-10">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Featured Project
                  </p>
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      Visit Live Site <ExternalLink size={13} />
                    </Link>
                  )}
                </div>
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
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-border bg-background/50 p-5">
                  <h2 className="mb-3 text-base font-semibold text-foreground">
                    Key Highlights
                  </h2>
                  <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
                    {project.impact.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-border bg-background/50 p-5">
                  <h2 className="mb-3 text-base font-semibold text-foreground">
                    Architecture & Impact
                  </h2>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {project.summary} Built with a focus on modern development standards,
                    responsive design, clean code architecture, and high performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
