import type { ElementType } from "react";
import { DiMongodb } from "react-icons/di";
import {
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaPhp,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiGo, SiMysql, SiTypescript } from "react-icons/si";

export type Project = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  stack: string[];
  impact: string[];
  accent: string;
  image: string;
  live?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "seo-analyzer",
    name: "SEO Analyzer",
    summary:
      "A concurrent web scraper and on-page SEO analyzer built with Next.js and Go.",
    description:
      "A full-stack auditing tool built with Go and Next.js that concurrently crawls websites, analyzes on-page SEO metrics, detects technical issues, and calculates comprehensive SEO health scores.",
    stack: ["Next.js", "Go"],
    impact: [
      "Concurrent web crawling in Go",
      "Actionable technical SEO scoring",
      "Interactive audit dashboard",
    ],
    accent: "from-blue-500 to-cyan-600",
    image: "seo.png",
    live: "https://seo.utsargamanandhar.com.np",
  },
  {
    slug: "socialsphere",
    name: "SocialSphere",
    summary:
      "A modern social platform with real-time interactions and ML moderation.",
    description:
      "SocialSphere combines community sharing, private messaging, and AI-assisted moderation to create a welcoming digital space for conversations. It features offensive comment filtering implemented with Logistic Regression in Python and real-time messaging with Socket.io.",
    stack: ["Next.js", "MongoDB", "Python"],
    impact: [
      "Realtime chat with Socket.io",
      "ML offensive comment filtering",
      "Responsive community social feed",
    ],
    accent: "from-sky-500 to-indigo-600",
    image: "SocialSphere.png",
    live: "https://socialsphere.utsargamanandhar.com.np",
  },
  {
    slug: "messayo",
    name: "Messayo",
    summary: "A lightweight messaging experience built for fast communication.",
    description:
      "Messayo helps users connect with friends, exchange media, and stay in sync through a polished interface and socket-driven updates built on the MERN stack.",
    stack: ["React.js", "Express.js", "MongoDB"],
    impact: ["Instant messaging", "Media sharing", "Friend management"],
    accent: "from-emerald-500 to-cyan-600",
    image: "Messayo.png",
  },
  {
    slug: "havoc-aura",
    name: "HavocAura",
    summary: "An e-commerce experience for PC enthusiasts and builders.",
    description:
      "HavocAura blends curated product browsing, custom PC building, and eSewa payment gateway integration into a seamless hardware storefront.",
    stack: ["React.js", "Express.js", "MongoDB"],
    impact: ["Custom PC builder workflow", "eSewa payment integration", "Hardware catalog & cart"],
    accent: "from-violet-500 to-fuchsia-600",
    image: "HavocAura.png",
  },
  {
    slug: "gaidim",
    name: "Gaidim",
    summary: "A travel management and community web application.",
    description:
      "Gaidim was designed as a full-featured web platform with structured content, interactive travel guides, and a reliable MySQL database-backed backend.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    impact: ["Dynamic tour booking pages", "Database-backed content management", "Clean responsive UX"],
    accent: "from-amber-400 to-orange-500",
    image: "Gaidim.png",
  },
  {
    slug: "furniture-classification",
    name: "Furniture Classification",
    summary: "A CNN-based deep learning model for classifying furniture items.",
    description:
      "This project demonstrates machine learning workflows for classifying furniture images (Almirah, Chair, Fridge, Table, TV) using Convolutional Neural Networks (CNN) in Python with clear, user-friendly output.",
    stack: ["Python"],
    impact: ["CNN image recognition", "Model-driven workflow", "Image preprocessing"],
    accent: "from-rose-500 to-red-600",
    image: "Python.png",
  },
  {
    slug: "rock-paper-scissors",
    name: "Rock Paper Scissors",
    summary: "A polished browser game with score persistence.",
    description:
      "A responsive rock-paper-scissors game with interactive gameplay against computer logic, score history persistence across sessions, and reset controls.",
    stack: ["HTML", "CSS", "JavaScript"],
    impact: ["Game state logic", "Local score tracking", "Accessible UI"],
    accent: "from-lime-500 to-green-600",
    image: "Rock.png",
  },
  {
    slug: "to-do-list",
    name: "To Do List",
    summary: "A responsive task management app built with React and TypeScript.",
    description:
      "A clean To-Do List application developed using React and TypeScript. Users can add, complete, and delete tasks with automatic local storage persistence.",
    stack: ["React.js", "TypeScript"],
    impact: ["State management in React", "TypeScript type safety", "Local storage sync"],
    accent: "from-purple-500 to-pink-600",
    image: "ToDoList.png",
  },
];

export const TECH_ICONS: Record<string, ElementType> = {
  "React.js": FaReact,
  Python: FaPython,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  "Next.js": RiNextjsFill,
  MongoDB: DiMongodb,
  JavaScript: FaJs,
  PHP: FaPhp,
  "Express.js": SiExpress,
  MySQL: SiMysql,
  TypeScript: SiTypescript,
  Go: SiGo,
};
