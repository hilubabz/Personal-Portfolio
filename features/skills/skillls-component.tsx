"use client";

import { SKILLS } from "@/constants/skills";
import ScrollAnimate from "@/framer/scroll-animate";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const SkillsComponent = () => {
  return (
    <div className="page-shell min-h-screen px-4 py-12 sm:px-6 md:px-10 lg:px-20 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center sm:mb-16">
          <div className="relative inline-block text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            <ScrollAnimate>
              Tech Skills
              <div className="absolute -bottom-2 left-0 h-1 w-1/2 rounded-full bg-red-600 transition-all duration-500" />
            </ScrollAnimate>
          </div>
        </div>

        <motion.div
          className="flex flex-col gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {SKILLS.map((val, index) => (
            <motion.section
              key={index}
              variants={sectionVariants}
              className="page-surface-soft relative overflow-hidden p-6 sm:p-8 lg:p-10"
            >
              {/* Decorative background glow */}
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-red-500/5 blur-3xl" />

              <div className="mb-8 text-center sm:mb-10">
                <div className="relative inline-block text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  <ScrollAnimate>
                    {val.name}
                    <div className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-red-500/50 transition-all duration-500" />
                  </ScrollAnimate>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {val.skill.map((value, ind) => (
                  <div
                    key={ind}
                    className="page-surface group flex min-h-35 flex-col items-center justify-center gap-3 rounded-2xl p-4 text-center hover:-translate-y-2 hover:border-red-500/50 hover:shadow-xl hover:shadow-red-500/10"
                    style={{ transition: 'all 0.3s ease-out' }}
                  >
                    <div 
                      className="rounded-2xl bg-red-500/10 p-3 text-red-500 group-hover:scale-110 group-hover:bg-red-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-red-500/30"
                      style={{ transition: 'all 0.3s ease-out' }}
                    >
                      <value.icon className="text-3xl sm:text-4xl" />
                    </div>
                    <div className="space-y-1">
                      <div 
                        className="text-sm font-semibold text-foreground sm:text-base group-hover:text-red-500"
                        style={{ transition: 'all 0.3s ease-out' }}
                      >
                        {value.language}
                      </div>
                      <div className="px-1 text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
                        {value.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
