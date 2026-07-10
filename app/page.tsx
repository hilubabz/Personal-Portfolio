import { Home } from "@/features/home/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Utsarga Manandhar | Junior Frontend Developer",
  description:
    "Portfolio of Utsarga Manandhar, a Frontend Developer specializing in React, Next.js, TypeScript, and modern web applications.",
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return <Home />;
}
