"use client";

import { contactOptions } from "@/constants/contact";
import { Reveal } from "@/components/motion/reveal";
import { ArrowRight, Check, Copy, HelpCircle, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "What development services do you offer?",
    answer:
      "I specialize in building full-stack web applications, high-performance responsive frontend interfaces, REST/GraphQL APIs, and real-time systems using Next.js, React, TypeScript, Go, and Node.js.",
  },
  {
    question: "Are you open to full-time or contract roles?",
    answer:
      "Yes, I am actively open to discussing full-time software engineering opportunities, long-term contracts, and high-impact freelance collaborations.",
  },
  {
    question: "What is your location and timezone?",
    answer:
      "I am based in Nepal (UTC+5:45) and experienced with asynchronous communication, agile workflows, and collaborating across international timezones.",
  },
  {
    question: "What is the best way to contact you?",
    answer:
      "The fastest way is emailing me directly at utsargam44@gmail.com or reaching out on LinkedIn. I typically respond within 24 hours.",
  },
];

export const ContactComponent = () => {
  const [copied, setCopied] = useState(false);
  const email = "utsargam44@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <main className="min-h-screen px-6 pb-24 pt-28 md:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* Left content */}
          <section className="max-w-2xl space-y-6">
            <Reveal>
              <p className="text-sm font-medium text-primary">GET IN TOUCH</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-4xl font-bold tracking-tight text-foreground font-heading sm:text-5xl">
                Let&apos;s build something together
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                Whether you need a polished frontend, a scalable full-stack feature, or a
                fresh product concept — I&apos;d love to connect and discuss how
                we can bring it to life.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`mailto:${email}`}
                  className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
                >
                  <Send size={16} />
                  Start a conversation
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-500" />
                      <span className="text-emerald-500">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      Copy email
                    </>
                  )}
                </button>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex items-center gap-4 pt-2">
                <Link
                  href="https://github.com/hilubabz"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="GitHub"
                >
                  <FaGithub size={18} />
                </Link>
                <Link
                  href="https://linkedin.com/in/utsargamanandhar"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </Link>
              </div>
            </Reveal>
          </section>

          {/* Right - contact cards */}
          <Reveal delay={0.1} direction="left">
            <section className="w-full max-w-md">
              <div className="space-y-3">
                {contactOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <Link
                      key={option.label}
                      href={option.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">
                          {option.label}
                        </p>
                        <p className="text-sm font-medium text-foreground">
                          {option.value}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          </Reveal>
        </div>

        {/* FAQ Section to enrich page content and user experience */}
        <section className="border-t border-border/70 pt-16">
          <Reveal>
            <div className="mb-10 space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <HelpCircle size={16} />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground font-heading sm:text-3xl">
                Common Questions &amp; Work Process
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {FAQ_ITEMS.map((item, index) => (
              <Reveal key={item.question} delay={index * 0.08}>
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="mb-2 text-base font-semibold text-foreground">
                    {item.question}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.answer}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};
