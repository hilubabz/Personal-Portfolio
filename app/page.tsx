import { Home } from "@/features/home/home";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Utsarga Manandhar | Full Stack Developer",
  description:
    "Full Stack Developer building modern web applications with Next.js, React, TypeScript, and Node.js.",
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Utsarga Manandhar",
  jobTitle: "Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Global Square IT",
  },
  url: "https://utsargamanandhar.com.np",
  sameAs: [
    "https://github.com/hilubabz",
    "https://linkedin.com/in/utsargamanandhar",
  ],
  description:
    "Full Stack Developer building modern web applications with Next.js, React, TypeScript, and Node.js.",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home />
    </>
  );
}
