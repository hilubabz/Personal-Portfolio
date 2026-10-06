import { ProjectsComponent } from "@/features/projects/projects-component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Works",
  description:
    "Web development projects built by Utsarga Manandhar using React, Next.js, TypeScript, Go, and modern technologies.",
  openGraph: {
    title: "Projects | Utsarga Manandhar",
    description:
      "Explore web development projects by Utsarga Manandhar, featuring modern technologies, creative solutions, and full-stack applications.",
    url: "https://utsargamanandhar.com.np/projects",
  },
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectPage() {
  return <ProjectsComponent />;
}
