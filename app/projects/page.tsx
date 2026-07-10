import { ProjectsComponent } from "@/features/projects/projects-component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Utsarga Manandhar – React & Next.js Projects",
  description:
    "Browse web development projects built by Utsarga Manandhar using React, Next.js, TypeScript, and modern technologies.",
  openGraph: {
    title: "Projects | Utsarga Manandhar – React & Next.js Projects",
    description:
      "Browse web development projects built by Utsarga Manandhar using React, Next.js, TypeScript, and modern technologies.",
    url: "https://utsargamanandhar.com.np/projects",
  },
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectPage() {
  return <ProjectsComponent />;
}
