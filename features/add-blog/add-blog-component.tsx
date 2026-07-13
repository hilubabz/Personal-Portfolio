"use client";

import { AddBlogForm } from "./add-blog-form";

export const AddBlogComponent = () => {
  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <header className="rounded-3xl border border-zinc-200/70 bg-white/80 p-6 shadow-[0_20px_60px_-24px_rgba(15,23,42,0.35)] backdrop-blur-xl dark:border-zinc-800/70 dark:bg-zinc-900/80">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600 dark:text-red-400">
                Blog editor
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                Create a thoughtful article
              </h1>
              <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300 sm:text-base">
                Shape your story in a calm, distraction-free workspace with rich
                formatting tools.
              </p>
            </div>
          </div>
        </header>

        <AddBlogForm />
      </div>
    </div>
  );
};
