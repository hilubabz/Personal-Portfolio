import { ArrowRight, PenTool } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    title: "Designing better user experiences with React",
    excerpt:
      "A look at how thoughtful UI decisions and component structure can improve interactions.",
    readTime: "4 min read",
  },
  {
    title: "Why clean architecture matters in modern web apps",
    excerpt:
      "How structure, reusability, and maintainability create better long-term products.",
    readTime: "5 min read",
  },
  {
    title: "From ideas to shipped features",
    excerpt:
      "Lessons from turning concepts into polished products through iteration and feedback.",
    readTime: "3 min read",
  },
];

export default function BlogsPage() {
  return (
    <main className="page-shell min-h-screen px-6 py-24 md:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            Writing
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Notes on development, design, and progress.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Sharing practical ideas, lessons learned, and the thought process
            behind building thoughtful products.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="page-surface group p-6 transition hover:-translate-y-1 hover:border-red-500/40"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-red-500/10 p-3 text-red-500">
                <PenTool size={20} />
              </div>
              <p className="mb-3 text-sm text-red-500">{post.readTime}</p>
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                {post.title}
              </h2>
              <p className="mb-6 text-sm leading-7 text-muted-foreground">
                {post.excerpt}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-red-500"
              >
                Read more <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
