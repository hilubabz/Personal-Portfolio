import { Home } from "@/features/home/home";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Utsarga Manandhar | Full Stack Developer",
  description:
    "Full Stack Developer building modern web applications with Next.js, React, TypeScript, and Node.js.",
  alternates: {
    canonical: "https://utsargamanandhar.com.np",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Utsarga Manandhar — Full Stack Developer",
  url: "https://utsargamanandhar.com.np",
  description:
    "Full Stack Developer specializing in Next.js, React, TypeScript, Node.js, and modern web technologies.",
  author: {
    "@type": "Person",
    name: "Utsarga Manandhar",
    url: "https://utsargamanandhar.com.np",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Home />
    </>
  );
}
