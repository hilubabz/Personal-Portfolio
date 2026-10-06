import { getBlogs } from "@/actions/blog";
import { BlogComponent } from "@/features/blogs/blog-component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on web development, React, Next.js, TypeScript, and modern technologies by Utsarga Manandhar.",
  openGraph: {
    title: "Blog | Utsarga Manandhar",
    description:
      "Insights, tutorials, and practical guides on web development and modern technologies.",
    url: "https://utsargamanandhar.com.np/blogs",
  },
  alternates: {
    canonical: "/blogs",
  },
};

export default async function BlogsPage() {
  const res = await getBlogs();
  return <BlogComponent blogs={res.data ?? []} />;
}
