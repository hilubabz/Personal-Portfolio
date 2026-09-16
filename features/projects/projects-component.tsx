"use client";

import { projectsList } from "@/constants/project-list";
import Image from "next/image";
import Link from "next/link";
import { DiMongodb } from "react-icons/di";
import {
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaPhp,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiMysql, SiTypescript } from "react-icons/si";
import { motion, Variants } from "framer-motion";
import ScrollAnimate from "@/framer/scroll-animate";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const ProjectsComponent = () => {
  return (
    <div className="page-shell min-h-screen px-4 py-12 sm:px-6 md:px-10 lg:px-20 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center sm:mb-16">
          <h1 className="relative inline-block text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            <ScrollAnimate>
              Projects
              <div className="absolute -bottom-2 left-0 h-1 w-1/2 rounded-full bg-red-600 transition-all duration-500" />
            </ScrollAnimate>
          </h1>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectsList.map((val, index) => (
            <motion.div variants={itemVariants} key={index} className="h-full">
              <Link href={val.link} className="block group h-full">
                <div
                  className="page-surface flex h-full flex-col overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20 hover:border-red-500/50"
                  style={{ transition: "all 0.3s ease-out" }}
                >
                  <div
                    className="relative flex h-60 w-full items-center justify-center overflow-hidden p-6"
                    style={{
                      backgroundColor: `${val.color}15`,
                      transition: "all 0.3s ease-out",
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-20 blur-2xl group-hover:opacity-40"
                      style={{
                        backgroundColor: val.color,
                        transition: "all 0.3s ease-out",
                      }}
                    />
                    <div
                      className="relative z-10 h-full w-full group-hover:scale-105"
                      style={{ transition: "all 0.3s ease-out" }}
                    >
                      <Image
                        src={`/${val.image}`}
                        alt={val.alt}
                        fill
                        className="object-contain drop-shadow-xl"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3
                      className="mb-3 text-2xl font-bold text-foreground group-hover:text-red-500"
                      style={{ transition: "all 0.3s ease-out" }}
                    >
                      {val.name}
                    </h3>
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {val.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {val.language.map((value, ind) => (
                        <div
                          key={ind}
                          className="flex items-center gap-1.5 rounded-full border border-border/50 bg-background/50 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm group-hover:border-border/80 group-hover:bg-background/80"
                          style={{ transition: "all 0.3s ease-out" }}
                        >
                          <span className="text-red-500 text-sm">
                            {value === "React.js" && <FaReact />}
                            {value === "Python" && <FaPython />}
                            {value === "HTML" && <FaHtml5 />}
                            {value === "CSS" && <FaCss3Alt />}
                            {value === "Next.js" && <RiNextjsFill />}
                            {value === "MongoDB" && <DiMongodb />}
                            {value === "JavaScript" && <FaJs />}
                            {value === "PHP" && <FaPhp />}
                            {value === "Express.js" && <SiExpress />}
                            {value === "MySQL" && <SiMysql />}
                            {value === "TypeScript" && <SiTypescript />}
                            {value === "Go" && <FaGolang />}
                          </span>
                          {value}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
