import { ProjectsComponent } from "@/features/projects/projects-component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "A list of projects developed by Utsarga Manandhar.",
  openGraph: {
    title: "Projects | Utsarga Manandhar",
    description: "A collection of my projects.",
    url: "https://utsargamanandhar.com.np/projects",
  },
};

export default function ProjectPage() {
  return <ProjectsComponent />;
}
