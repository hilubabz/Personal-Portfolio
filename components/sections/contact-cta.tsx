"use client";

import { Reveal } from "@/components/motion/reveal";
import { ArrowRight, Check, Copy, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function ContactCTA() {
  const [copied, setCopied] = useState(false);
  const email = "utsargam44@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback - just open mailto
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mx-auto max-w-2xl space-y-8 text-center">
          <Reveal>
            <p className="text-sm font-medium text-primary">GET IN TOUCH</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight text-foreground font-heading sm:text-4xl lg:text-5xl">
              Have a project in mind?
              <br />
              <span className="text-muted-foreground">
                Let&apos;s build something useful.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={`mailto:${email}`}
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
              >
                <Mail size={16} />
                Get in touch
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-500" />
                    <span className="text-emerald-500">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    {email}
                  </>
                )}
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex items-center justify-center gap-4 pt-4">
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
        </div>
      </div>
    </section>
  );
}
