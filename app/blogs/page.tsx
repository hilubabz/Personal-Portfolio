import { BlogComponent } from "@/features/blogs/blog-component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "A  collection of blogs writted by Utsarga Manandhar",
};

export default function BlogsPage() {
  return <BlogComponent />;
}
