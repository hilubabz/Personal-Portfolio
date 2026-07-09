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
import { SiExpress, SiMysql, SiTypescript } from "react-icons/si";

export type Project = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  stack: string[];
  impact: string[];
  accent: string;
  image: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "socialsphere",
    name: "SocialSphere",
    summary:
      "A modern social platform with real-time interactions and moderation.",
    description:
      "SocialSphere combines community sharing, private messaging, and AI-assisted moderation to create a welcoming digital space for conversations.",
    stack: ["Next.js", "MongoDB", "Python"],
    impact: [
      "Realtime chat",
      "Smart comment filtering",
      "Responsive social feed",
    ],
    accent: "from-sky-500 to-indigo-600",
    image: "SocialSphere.png",
  },
  {
    slug: "messayo",
    name: "Messayo",
    summary: "A lightweight messaging experience built for fast communication.",
    description:
      "Messayo helps users connect with friends, exchange media, and stay in sync through a polished interface and socket-driven updates.",
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
      "HavocAura blends curated product browsing, checkout flow, and a custom PC builder experience into one seamless storefront.",
    stack: ["React.js", "Express.js", "MongoDB"],
    impact: ["PC builder flow", "Secure checkout", "Catalog experience"],
    accent: "from-violet-500 to-fuchsia-600",
    image: "HavocAura.png",
  },
  {
    slug: "gaidim",
    name: "Gaidim",
    summary: "A community web app with a strong content and service focus.",
    description:
      "Gaidim was designed as a full-featured web platform with structured content, interactive pages, and a reliable backend foundation.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    impact: ["Dynamic pages", "Database-backed content", "Clean UX"],
    accent: "from-amber-400 to-orange-500",
    image: "Gaidim.png",
  },
  {
    slug: "furniture-classification",
    name: "Furniture Classification",
    summary: "A CNN-based tool for image classification tasks.",
    description:
      "This project demonstrates machine learning workflows for classifying furniture items from uploaded images with clear, user-friendly output.",
    stack: ["Python"],
    impact: ["Image recognition", "Model-driven workflow", "Console UI"],
    accent: "from-rose-500 to-red-600",
    image: "Python.png",
  },
  {
    slug: "rock-paper-scissors",
    name: "Rock Paper Scissors",
    summary: "A polished browser game with score persistence.",
    description:
      "The project adds a playful interface to a classic game while keeping score history and reset controls easy for players to use.",
    stack: ["HTML", "CSS", "JavaScript"],
    impact: ["Game logic", "Score tracking", "Accessible UI"],
    accent: "from-lime-500 to-green-600",
    image: "Rock.png",
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
};
