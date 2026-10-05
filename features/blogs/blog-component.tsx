import { posts } from "@/constants/blogs";
import { Reveal } from "@/components/motion/reveal";
import { Clock, PenTool } from "lucide-react";

export const BlogComponent = () => {
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.1}>
              <article className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2.5 text-primary">
                  <PenTool size={18} />
                </div>
                <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock size={12} />
                  {post.readTime}
                </div>
                <h2 className="mb-3 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
};
