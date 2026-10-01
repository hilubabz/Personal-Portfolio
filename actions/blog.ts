"use server";

import dbConnect from "@/lib/mongodb";
import Blog from "@/models/blog.model";

export interface BlogData {
  title: string;
  metaDescription: string;
  coverImage: string;
  content: string;
}

export async function createBlog(blog: BlogData) {
  await dbConnect();

  const addBlog = await Blog.create(blog);

  if (!addBlog) {
    return {
      success: false,
      message: "Failed to add blog",
    };
  }

  return {
    success: true,
    message: "Blog created successfully",
    id: addBlog._id.toString(),
  };
}
