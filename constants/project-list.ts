export interface ProjectListItem {
  slug: string;
  name: string;
  alt: string;
  language: string[];
  image: string;
  color: string;
  description: string;
  link: string;
}

export const projectsList: ProjectListItem[] = [
  {
    slug: "seo-analyzer",
    name: "Seo Analyzer",
    alt: "A concurrent web scraper and seo analyzer created using Next.js and Go",
    language: ["Next.js", "Go"],
    image: "seo.png",
    color: "#f8f9fa",
    description:
      "A full-stack SEO auditing tool built with Go and Next.js that crawls websites concurrently, analyzes on-page SEO, detects technical issues, and calculates comprehensive SEO scores.",
    link: "https://seo.utsargamanandhar.com.np",
  },
  {
    slug: "socialsphere",
    name: "SocialSphere",
    alt: "A social media app developed using Next.js and MongoDb",
    language: ["Next.js", "MongoDB", "Python"],
    image: "SocialSphere.png",
    color: "#1b2951",
    description:
      "SocialSphere is a social media website that helps users share posts, like, comment, and message friends. It features an offensive comment filtering system implemented with Logistic Regression in Python and real-time messaging with Socket.io.",
    link: "https://socialsphere.utsargamanandhar.com.np",
  },
  {
    slug: "messayo",
    name: "Messayo",
    alt: "A real time messaging app developed using React, Express.js, MongoDB and Socket.io",
    language: ["React.js", "Express.js", "MongoDB"],
    image: "Messayo.png",
    color: "#f8f9fa",
    description:
      "Messayo is a messaging platform developed using the MERN stack. It allows users to connect, chat in real time using Socket.io, and share media securely.",
    link: "",
  },
  {
    slug: "havoc-aura",
    name: "HavocAura",
    alt: "A laptop and computer parts ecommerce system developed using React.js",
    language: ["React.js", "Express.js", "MongoDB"],
    image: "HavocAura.png",
    color: "#2d1b69",
    description:
      "HavocAura is an e-commerce website developed using the MERN stack. It features a catalog of laptops and PC parts, eSewa payment integration, and a custom PC builder workflow.",
    link: "",
  },
  {
    slug: "gaidim",
    name: "Gaidim",
    alt: "A travel management and booking app developed using HTML, CSS, JS, and PHP",
    language: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: "Gaidim.png",
    color: "#f9f9f9",
    description:
      "Gaidim is a travel management and booking web application. It features structured destination listings, database-backed tour packages, and an intuitive user interface.",
    link: "",
  },
  {
    slug: "furniture-classification",
    name: "Furniture Classification",
    alt: "A ML Model used to classify different furnitures",
    language: ["Python"],
    image: "Python.png",
    color: "#2d1b69",
    description:
      "A machine learning application built with Python and CNN (Convolutional Neural Networks) to classify uploaded furniture images into categories including Almirah, Chair, Fridge, Table, or TV.",
    link: "",
  },
  {
    slug: "rock-paper-scissors",
    name: "Rock Paper Scissors",
    alt: "A simple Rock Paper Scissors game developed using HTML, CSS, and JS",
    language: ["HTML", "CSS", "JavaScript"],
    image: "Rock.png",
    color: "#f9f9f9",
    description:
      "An interactive rock-paper-scissors web game developed with vanilla JavaScript, HTML, and CSS, featuring automated scoring, round tracking, and local session persistence.",
    link: "",
  },
  {
    slug: "to-do-list",
    name: "To Do List",
    alt: "A simple to do list developed using React and TypeScript",
    language: ["React.js", "TypeScript"],
    image: "ToDoList.png",
    color: "#2d1b69",
    description:
      "A clean To-Do List application developed using React and TypeScript. Users can add, toggle, and delete tasks with instant local storage synchronization.",
    link: "",
  },
];
