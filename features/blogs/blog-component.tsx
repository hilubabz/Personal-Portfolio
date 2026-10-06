"use client";

import { Reveal } from "@/components/motion/reveal";
import { PenTool } from "lucide-react";
import { BlogData } from "@/actions/blog";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export const BlogComponent = ({ blogs }: { blogs: BlogData[] }) => {
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
            <p className="text-sm font-medium text-primary">WRITING</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-4xl font-bold tracking-tight text-foreground font-heading sm:text-5xl">
              Notes on development, design, and progress.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Sharing practical ideas, lessons learned, and the thought process
              behind building thoughtful products.
            </p>
          </Reveal>
        </div>

        {/* Grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogs.map((post) => (
            <motion.div key={post.slug} variants={itemVariants} className="h-full">
              <Link href={`/blogs/${post.slug}`} className="block h-full">
                <motion.article
                  className="flex h-full flex-col rounded-xl border border-border bg-card p-6"
                  whileHover={{
                    y: -8,
                    boxShadow: `0 20px 40px -12px ${primaryColor}40`,
                    borderColor: `${primaryColor}99`,
                  }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
                >
                  {post.coverImage ? (
                    <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg bg-muted">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="mb-4 inline-flex w-max rounded-lg bg-primary/10 p-2.5 text-primary">
                      <PenTool size={18} />
                    </div>
                  )}
                  <h2 className="mb-3 text-lg font-semibold text-foreground">
                    {post.title}
                  </h2>
                  <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {post.metaDescription}
                  </p>
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};
