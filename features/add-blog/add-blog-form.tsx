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
  return (
    <form>
      <div className="space-y-4">
        <input
          type="text"
          className="w-full rounded-3xl border border-zinc-200/70 p-6 shadow-[0_20px_60px_-24px_rgba(15,23,42,0.35)] backdrop-blur-xl dark:border-zinc-800/70"
          placeholder="Title"
        />

        <input
          type="text"
          className="w-full rounded-3xl border border-zinc-200/70 p-6 shadow-[0_20px_60px_-24px_rgba(15,23,42,0.35)] backdrop-blur-xl dark:border-zinc-800/70"
          placeholder="Meta Description"
        />
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={imageRef}
          onChange={(e) => setImage(e.target?.files?.[0] ?? null)}
        />
        {!imageUrl ? (
          <Button onClick={() => imageRef.current?.click()}>
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

      <Button className={"cursor-pointer mt-4 w-full"}>Add Blog</Button>
    </form>
  );
};
