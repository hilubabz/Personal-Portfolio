import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    metaDescription: {
      type: String,
      requiared: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
