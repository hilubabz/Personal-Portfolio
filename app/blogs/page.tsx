import { BlogComponent } from "@/features/blogs/blog-component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "A  collection of blogs writted by Utsarga Manandhar",
  openGraph: {
    title: "Blogs | Utsarga Manandhar",
    description: "A collection of my blogs.",
    url: "https://utsargamanandhar.com.np/vlogs",
  },
};

export default function BlogsPage() {
  return <BlogComponent />;
}
