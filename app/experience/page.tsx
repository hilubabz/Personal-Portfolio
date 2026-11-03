import { ExperienceComponent } from "@/features/experience/experience-component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience and education of Utsarga Manandhar, including work at Global Square IT and computer science studies.",
  openGraph: {
    title: "Experience | Utsarga Manandhar",
    description:
      "Professional experience and education of Utsarga Manandhar, Full Stack Developer.",
    url: "https://utsargamanandhar.com.np/experience",
  },
  alternates: {
    canonical: "https://utsargamanandhar.com.np/experience",
  },
};

export default function Page() {
  return <ExperienceComponent />;
}
