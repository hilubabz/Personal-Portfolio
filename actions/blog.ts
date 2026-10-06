"use server";

import dbConnect from "@/lib/mongodb";
import Blog from "@/models/blog.model";

export interface BlogData {
  title: string;
  metaTitle: string;
  metaDescription: string;
  slug: string;
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

interface GetBlogsResponse {
  success: boolean;
  message: string;
  data?: BlogData[];
}

export async function getBlogs(): Promise<GetBlogsResponse> {
  await dbConnect();
  const blogs = await Blog.find().lean();
  if (!blogs) {
    return {
      success: false,
      message: "Failed to fetch blogs",
    };
  }
  return {
    success: true,
    message: "Blogs fetched successfully",
    data: blogs as BlogData[],
  };
}

export async function getBlogBySlug(slug: string) {
  await dbConnect();
  const blog = await Blog.findOne({ slug }).lean();
  if (!blog) {
    return {
      success: false,
      message: "Blog not found",
    };
  }
  return {
    success: true,
    message: "Blog fetched successfully",
    data: blog as unknown as BlogData,
  };
}

export async function getFeaturedBlogs(): Promise<GetBlogsResponse> {
  await dbConnect();
  const blogs = await Blog.find({ isFeatured: true });
  if (!blogs) {
    return {
      success: false,
      message: "Failed to fetch blogs",
    };
  }
  return {
    success: true,
    message: "Blogs fetched successfully",
    data: blogs,
  };
}

// const STRAPI_URL = process.env.STRAPI_URL;
// const STRAPI_API_TOKEN = process.env.STRAPI_API_KEY;

// export async function getBlogs() {
//   const response = await fetch(`${STRAPI_URL}/api/blog-posts?populate=*`, {
//     headers: {
//       Authorization: `Bearer ${STRAPI_API_TOKEN}`,
//     },
//     next: {
//       revalidate: 60,
//     },
//   });

//   if (!response.ok) {
//     throw new Error("Failed to fetch blogs from Strapi");
//   }

//   return response.json();
// }
