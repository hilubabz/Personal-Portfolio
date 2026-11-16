"use client";

import { projectsList } from "@/constants/project-list";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useMemo } from "react";
import { Reveal } from "@/components/motion/reveal";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export const ProjectsComponent = () => {
  const primaryColor = useMemo(() => {
    if (typeof window === "undefined") return "#6366f1";
    return (
      getComputedStyle(document.documentElement)
        .getPropertyValue("--primary")
        .trim() || "#6366f1"
    );
  }, []);

  return (
    <main className="min-h-screen px-6 pb-24 pt-28 md:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 space-y-4">
          <Reveal>
            <p className="text-sm font-medium text-primary">ALL PROJECTS</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-4xl font-bold tracking-tight text-foreground font-heading sm:text-5xl">
              Projects
            </h1>
          </Reveal>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {projectsList.map((project) => (
            <motion.div
              variants={itemVariants}
              key={project.slug}
              className="h-full"
            >
              <motion.div
                className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card"
                whileHover={{
                  y: -8,
                  boxShadow: `0 20px 40px -12px ${primaryColor}40`,
                  borderColor: `${primaryColor}99`,
                }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
              >
                {/* Image linked to detail page */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="relative block h-52 w-full overflow-hidden bg-muted"
                  aria-label={`View details for ${project.name}`}
                >
                  <Image
                    src={`/${project.image}`}
                    alt={project.alt}
                    fill
                    className="object-contain p-4 transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </Link>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="mb-2 text-lg font-semibold text-foreground">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="transition-colors hover:text-primary"
                    >
                      {project.name}
                    </Link>
                  </h2>
                  <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.language.map((lang) => (
                      <span
                        key={lang}
                        className="rounded-md border border-border bg-background px-2 py-0.5 text-xs font-medium text-muted-foreground"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-auto flex items-center justify-between gap-3 pt-2 border-t border-border/50">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary"
                    >
                      Overview <ArrowRight size={13} />
                    </Link>
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-foreground transition-colors hover:text-primary"
                      >
                        Live Demo <ArrowUpRight size={13} />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};
