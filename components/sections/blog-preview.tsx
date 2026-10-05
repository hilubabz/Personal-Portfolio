import { Reveal } from "@/components/motion/reveal";
import { posts } from "@/constants/blogs";
import { ArrowUpRight, Clock } from "lucide-react";
import Link from "next/link";

export function BlogPreview() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p className="mb-3 text-sm font-medium text-primary">WRITING</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground font-heading sm:text-4xl">
                Latest Posts
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
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.1}>
              <article className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock size={12} />
                  {post.readTime}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
