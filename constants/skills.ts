import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { FaJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiExpress, SiTypescript } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFastapi } from "react-icons/si";
import { RiVercelLine } from "react-icons/ri";
import { SiRender } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { HiLightningBolt } from "react-icons/hi";
import { DiPhotoshop } from "react-icons/di";
import { FaGolang } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";

export const SKILLS = [
  {
    name: "Frontend",
    skill: [
      {
        language: "HTML",
        description: "Markup Language for Structuring Web Pages",
        icon: FaHtml5,
      },
      {
        language: "CSS",
        description: "Style sheet language for designing web pages",
        icon: FaCss3Alt,
      },
      {
        language: "JavaScript",
        description: "Programming language for dynamic web development",
        icon: FaJs,
      },
      {
        language: "React.js",
        description: "JavaScript framework for building user interfaces",
        icon: FaReact,
      },
      {
        language: "Next.js",
        description: "React framework for server-rendered UIs",
        icon: RiNextjsFill,
      },
      {
        language: "Tailwind CSS",
        description: "Utility-first CSS framework for styling",
        icon: RiTailwindCssFill,
      },
      {
        language: "TypeScript",
        description: "Extension to JavaScript ensuring type safety",
        icon: SiTypescript,
      },
    ],
  },

  {
    name: "Backend",
    skill: [
      {
        language: "Express.js",
        description: "Minimal Node.js framework for building APIs and web apps",
        icon: SiExpress,
      },
      {
        language: "Next.js",
        description: "Node.js framework for APIs and server-side logic",
        icon: RiNextjsFill,
      },
      {
        language: "PHP",
        description: "Server-side scripting language for web applications",
        icon: FaPhp,
      },
      {
        language: "Fast API",
        description: "Python framework for high-performance APIs",
        icon: SiFastapi,
      },
      {
        language: "Go",
        description: "Go REST APIs with concurrent workers",
        icon: FaGolang,
      },
      {
        language: "ASP .NET",
        description: "REST APIs using C#",
        icon: AiOutlineDotNet,
      },
    ],
  },

  {
    name: "Databases",
    skill: [
      {
        language: "MySQL",
        description:
          "Relational database management system for structured data",
        icon: SiMysql,
      },
      {
        language: "MongoDB",
        description: "NoSQL database for storing JSON-like documents",
        icon: DiMongodb,
      },
      {
        language: "PostgreSQL",
        description: "Relational SQL database management system",
        icon: BiLogoPostgresql,
      },
    ],
  },

  {
    name: "AI/ML",
    skill: [
      {
        language: "Python",
        description: "High-Level Programming Language for AI/ML",
        icon: FaPython,
      },
    ],
  },

  {
    name: "Cloud Deployment",
    skill: [
      {
        language: "Netlify",
        description: "Platform for deploying static sites and modern web apps",
        icon: SiNetlify,
      },
      {
        language: "Vercel",
        description:
          "Platform for deploying frontend and full-stack serverless apps",
        icon: RiVercelLine,
      },
      {
        language: "Render",
        description: "Cloud platform for hosting web apps, APIs, and databases",
        icon: SiRender,
      },
    ],
  },

  {
    name: "Designing and Graphic Tools",
    skill: [
      {
        language: "Figma",
        description: "Cloud-based tool for UI/UX and interface design",
        icon: FiFigma,
      },
      {
        language: "Photoshop",
        description:
          "Industry-standard software for image editing and graphic design",
        icon: DiPhotoshop,
      },
      {
        language: "Draw.io",
        description:
          "Tool for creating diagrams, flowcharts, and visual models",
        icon: RiVercelLine,
      },
    ],
  },

  {
    name: "API Testing",
    skill: [
      {
        language: "Postman",
        description: "API development and testing platform",
        icon: SiPostman,
      },
      {
        language: "Thunder Client",
        description: "Lightweight VS Code extension for testing APIs",
        icon: HiLightningBolt,
      },
    ],
  },

  {
    name: "Collaboration Tools",
    skill: [
      {
        language: "Git & GitHub",
        description:
          "Platform for version control, collaboration, and code hosting",
        icon: FaGithub,
      },
    ],
  },

  {
    name: "Additional Familiarity",
    skill: [
      {
        language: "Java",
        description:
          "Versatile programming language for web, desktop, and enterprise applications",
        icon: FaJava,
      },
      {
        language: "Playwright",
        description: "Automation framework for end-to-end web testing",
        icon: FaJs,
      },
    ],
  },
];
