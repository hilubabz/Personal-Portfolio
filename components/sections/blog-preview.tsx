"use client";

import { BlogData } from "@/actions/blog";
import { Reveal } from "@/components/motion/reveal";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo } from "react";

export function BlogPreview({ blogs }: { blogs: BlogData[] }) {
  const primaryColor = useMemo(() => {
    if (typeof window === "undefined") return "#6366f1";
    return (
      getComputedStyle(document.documentElement)
        .getPropertyValue("--primary")
        .trim() || "#6366f1"
    );
  }, []);
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p className="mb-3 text-sm font-medium text-primary">WRITING</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground font-heading sm:text-4xl">
                Featured Posts
              </h2>
            </div>
            <Link
              href="/blogs"
              className="hidden items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:flex"
            >
              All posts <ArrowUpRight size={14} />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.1}>
              <Link href={`/blogs/${post.slug}`} className="block h-full">
                <motion.article
                  className="flex h-full flex-col rounded-xl border border-border bg-card p-6"
                  whileHover={{
                    y: -8,
                    boxShadow: `0 20px 40px -12px ${primaryColor}40`,
                    borderColor: `${primaryColor}99`,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.25, 0.1, 0.25, 1] as const,
                  }}
                >
                  <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg bg-muted">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {post.metaDescription}
                  </p>
                </motion.article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
