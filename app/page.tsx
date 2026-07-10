import { Home } from "@/features/home/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Utsarga Manandhar | Portfolio",
  description:
    "A polished personal portfolio showcasing projects, skills, experience, and contact details.",
};

export default function Page() {
  return <Home />;
}
