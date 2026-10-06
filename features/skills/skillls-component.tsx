"use client";

import { SKILLS } from "@/constants/skills";
import { Reveal } from "@/components/motion/reveal";
import { motion, Variants } from "framer-motion";
import { useMemo } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const SkillsComponent = () => {
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
            <p className="text-sm font-medium text-primary">EXPERTISE</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-4xl font-bold tracking-tight text-foreground font-heading sm:text-5xl">
              Skills &amp; Technologies
            </h1>
          </Reveal>
        </div>

        {/* Skills grid */}
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {SKILLS.map((category) => (
            <motion.section key={category.name} variants={itemVariants}>
              <h2 className="mb-6 text-lg font-semibold text-foreground">
                {category.name}
              </h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {category.skill.map((item) => (
                  <motion.div
                    key={item.language}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
                    whileHover={{
                      y: -4,
                      boxShadow: `0 12px 24px -8px ${primaryColor}40`,
                      borderColor: `${primaryColor}99`,
                    }}
                    transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] as const }}
                  >
                    <motion.div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <item.icon className="text-lg" />
                    </motion.div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground">
                        {item.language}
                      </p>
                      <p className="truncate text-[11px] text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </motion.div>
      </div>
    </main>
  );
};
