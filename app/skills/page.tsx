import { SkillsComponent } from "@/features/skills/skillls-component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills and technologies used by Utsarga Manandhar: React, Next.js, TypeScript, Node.js, Go, MongoDB, and more.",
  openGraph: {
    title: "Skills | Utsarga Manandhar Software Developer",
    description:
      "Explore the technical skills, tools, and technologies used by Utsarga Manandhar in building modern web applications.",
    url: "https://utsargamanandhar.com.np/skills",
  },
  alternates: {
    canonical: "/skills",
  },
};

export default function Skills() {
  return <SkillsComponent />;
}
