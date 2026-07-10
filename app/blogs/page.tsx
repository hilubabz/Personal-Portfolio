import { BlogComponent } from "@/features/blogs/blog-component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Utsarga Manandhar – Frontend Development",
  description:
    "Read articles on frontend development, React, Next.js, JavaScript, TypeScript, and web technologies by Utsarga Manandhar.",
  openGraph: {
    title: "Blog | Utsarga Manandhar – Frontend Development",
    description:
      "Read articles on frontend development, React, Next.js, JavaScript, TypeScript, and web technologies by Utsarga Manandhar.",
    url: "https://utsargamanandhar.com.np/vlogs",
  },
};

export default function BlogsPage() {
  return <BlogComponent />;
}
