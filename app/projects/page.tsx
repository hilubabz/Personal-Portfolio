import { ProjectsComponent } from "@/features/projects/projects-component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "A list of projects developed by Utsarga Manandhar.",
};

export default function ProjectPage() {
  return <ProjectsComponent />;
}
