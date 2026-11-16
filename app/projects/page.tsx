import { ProjectsComponent } from "@/features/projects/projects-component";
import { projectsList } from "@/constants/project-list";
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
    canonical: "https://utsargamanandhar.com.np/projects",
  },
};

export default function ProjectPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projectsList.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: project.name,
        description: project.description,
        applicationCategory: "WebApplication",
        operatingSystem: "Web",
        url: `https://utsargamanandhar.com.np/projects/${project.slug}`,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectsComponent />
    </>
  );
}
