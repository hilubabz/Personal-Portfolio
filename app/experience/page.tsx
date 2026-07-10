import { ExperienceComponent } from "@/features/experience/experience-component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Experience",
  description:
    "The collection of education and professional experience of Utsarga Manandhar.",
  openGraph: {
    title: "experience | Utsarga Manandhar",
    description: "All of my experiences.",
    url: "https://utsargamanandhar.com.np/experience",
  },
};

export default function Page() {
  return <ExperienceComponent />;
}
