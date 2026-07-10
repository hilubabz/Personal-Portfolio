import { SkillsComponent } from "@/features/skills/skillls-component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Utsarga Manandhar – React, Next.js, TypeScript",
  description:
    "Discover the technical skills and tools used by Utsarga Manandhar, including React, Next.js, TypeScript, Tailwind CSS, Node.js, and more.",
  openGraph: {
    title: "Skills | Utsarga Manandhar – React, Next.js, TypeScript",
    description:
      "Discover the technical skills and tools used by Utsarga Manandhar, including React, Next.js, TypeScript, Tailwind CSS, Node.js, and more.",
    url: "https://utsargamanandhar.com.np/skills",
  },
  alternates: {
    canonical: "/skills",
  },
};

export default function Skills() {
  return <SkillsComponent />;
}
