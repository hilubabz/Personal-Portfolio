import { contactOptions } from "@/constants/contact";
import { Send } from "lucide-react";
import Link from "next/link";

export const ContactComponent = () => {
  return (
    <main className="page-shell min-h-screen px-6 py-24 md:px-10 lg:px-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <section className="max-w-2xl space-y-6">
          <div className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm font-medium text-red-400">
            Let’s build something meaningful
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Let&apos;s build something together
            </h1>
            <p className="max-w-xl text-lg leading-8 text-muted-foreground">
              Whether you need a polished front end, a full-stack feature, or a
              fresh product concept, I’d love to connect and discuss how we can
              bring it to life.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="mailto:suyogstha2022@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
            >
              <Send size={16} />
              Start a conversation
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:border-red-500 hover:text-red-500"
            >
              View my work
            </Link>
          </div>
        </section>

        <section className="page-surface w-full max-w-xl p-6 shadow-2xl shadow-black/10">
          <div className="grid gap-4">
            {contactOptions.map((option) => {
              const Icon = option.icon;
              return (
                <Link
                  key={option.label}
                  href={option.href}
                  target="_blank"
                  rel="noreferrer"
                  className="page-surface-soft flex items-center justify-between p-4 transition hover:border-red-500/40 hover:bg-red-500/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-red-500/10 p-2 text-red-500">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {option.label}
                      </p>
                      <p className="font-medium text-foreground">
                        {option.value}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
};
