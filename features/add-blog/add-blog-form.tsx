import { createBlog } from "@/actions/blog";
import { uploadToCloudinary } from "@/actions/cloudinary";
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

export const AddBlogForm = () => {
  const imageRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<File | null>(null);
  const imageUrl = useMemo(() => {
    if (!image) return null;
    return URL.createObjectURL(image);
  }, [image]);

  useEffect(() => {
    return () => {
      if (imageUrl) URL.revokeObjectURL(imageUrl);
    };
  }, [imageUrl]);

  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const addBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!title || !metaTitle || !metaDescription || !slug || !content) {
      setError("Please fill all the required text fields.");
      return;
    }

    if (metaTitle.length > 60) {
      setError("Meta Title is too long for SEO (recommended < 60 characters).");
      return;
    }

    if (metaDescription.length > 160) {
      setError("Meta Description is too long for SEO (recommended < 160 characters).");
      return;
    }

    const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
    if (!slugRegex.test(slug)) {
      setError("Slug is invalid. Use only lowercase letters, numbers, and hyphens for best SEO.");
      return;
    }

    if (!image) {
      setError("Please add a cover image.");
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("file", image);

      const uploadResponse = await uploadToCloudinary(formData);
      if (!uploadResponse.success || !uploadResponse.url) {
        setError(uploadResponse.error || "Failed to upload image.");
        setIsSubmitting(false);
        return;
      }

      await createBlog({
        title,
        metaTitle,
        metaDescription,
        slug,
        coverImage: uploadResponse.url,
        content,
      });

      setSuccess(true);
      setTitle("");
      setMetaTitle("");
      setMetaDescription("");
      setSlug("");
      setContent("");
      setImage(null);
    } catch (err) {
      console.error("Failed to add blog:", err);
      setError("An unexpected error occurred while adding the blog.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={addBlog}>
      {error && <div className="mb-4 text-red-500 font-medium px-2">{error}</div>}
      {success && <div className="mb-4 text-green-500 font-medium px-2">Blog added successfully!</div>}
      <div className="space-y-4">
        <div>
          <input
            type="text"
            className="w-full rounded-3xl border border-zinc-200/70 p-6 shadow-[0_20px_60px_-24px_rgba(15,23,42,0.35)] backdrop-blur-xl dark:border-zinc-800/70"
            placeholder="Title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <input
            type="text"
            className={`w-full rounded-3xl border ${metaTitle.length > 60 ? 'border-red-500/70' : 'border-zinc-200/70 dark:border-zinc-800/70'} p-6 shadow-[0_20px_60px_-24px_rgba(15,23,42,0.35)] backdrop-blur-xl`}
            placeholder="Meta Title"
            name="metaTitle"
            value={metaTitle}
            onChange={(e) => setMetaTitle(e.target.value)}
          />
          <div className={`text-xs px-4 mt-2 font-medium ${metaTitle.length > 60 ? 'text-red-500' : metaTitle.length > 50 ? 'text-green-500' : 'text-zinc-500'}`}>
            {metaTitle.length}/60 characters {metaTitle.length > 60 ? '(Too long)' : metaTitle.length > 50 ? '(Optimal SEO)' : ''}
          </div>
        </div>

        <div>
          <input
            type="text"
            className={`w-full rounded-3xl border ${slug && !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) ? 'border-red-500/70' : 'border-zinc-200/70 dark:border-zinc-800/70'} p-6 shadow-[0_20px_60px_-24px_rgba(15,23,42,0.35)] backdrop-blur-xl`}
            placeholder="Slug (e.g. my-awesome-post)"
            name="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
          />
          <div className={`text-xs px-4 mt-2 font-medium ${slug && !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) ? 'text-red-500' : 'text-zinc-500'}`}>
            Format: lowercase letters, numbers, and hyphens only
          </div>
        </div>

        <div>
          <input
            type="text"
            className={`w-full rounded-3xl border ${metaDescription.length > 160 ? 'border-red-500/70' : 'border-zinc-200/70 dark:border-zinc-800/70'} p-6 shadow-[0_20px_60px_-24px_rgba(15,23,42,0.35)] backdrop-blur-xl`}
            placeholder="Meta Description"
            name="metaDescription"
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
          />
          <div className={`text-xs px-4 mt-2 font-medium ${metaDescription.length > 160 ? 'text-red-500' : metaDescription.length > 150 ? 'text-green-500' : 'text-zinc-500'}`}>
            {metaDescription.length}/160 characters {metaDescription.length > 160 ? '(Too long)' : metaDescription.length > 120 ? '(Optimal SEO)' : ''}
          </div>
        </div>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={imageRef}
          onChange={(e) => setImage(e.target?.files?.[0] ?? null)}
        />
        {!imageUrl ? (
          <Button type="button" onClick={() => imageRef.current?.click()}>
            Add Cover Image
          </Button>
        ) : (
          <div className="relative h-110 overflow-hidden rounded-2xl">
            <Image
              src={imageUrl}
              alt="blog-image"
              fill
              className="h-full w-full object-cover"
            />
            <Button
              type="button"
              variant="secondary"
              className="absolute top-2 right-2 bg-red-600 text-white hover:bg-red-600 cursor-pointer"
              onClick={() => setImage(null)}
            >
              Delete
            </Button>
          </div>
        )}
      </div>

      <div className="overflow-hidden rounded-[32px] border border-zinc-200/80 bg-white p-2 shadow-[0_25px_80px_-32px_rgba(15,23,42,0.35)] dark:border-zinc-800 dark:bg-zinc-950 mt-4">
        <SimpleEditor value={content} onChange={setContent} />
      </div>

      <Button type="submit" disabled={isSubmitting} className={"cursor-pointer mt-4 w-full"}>
        {isSubmitting ? "Adding Blog..." : "Add Blog"}
      </Button>
    </form>
  );
};
