import { ExperienceComponent } from "@/features/experience/experience-component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Utsarga Manandhar – Frontend Developer",
  description:
    "Explore the professional experience of Utsarga Manandhar, including internships and frontend development roles.",
  openGraph: {
    title: "Experience | Utsarga Manandhar – Frontend Developer",
    description:
      "Explore the professional experience of Utsarga Manandhar, including internships and frontend development roles.",
    url: "https://utsargamanandhar.com.np/experience",
  },
};

export default function Page() {
  return <ExperienceComponent />;
}
