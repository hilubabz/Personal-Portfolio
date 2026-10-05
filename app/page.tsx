import { Home } from "@/features/home/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Utsarga Manandhar | Full Stack Developer",
  description:
    "Full Stack Developer building modern web applications with Next.js, React, TypeScript, and Node.js.",
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return <Home />;
}
