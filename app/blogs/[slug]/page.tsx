import { getBlogBySlug } from "@/actions/blog";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const res = await getBlogBySlug(params.slug);
  
  if (!res.success || !res.data) {
    return { title: "Blog Not Found" };
  }

  const blog = res.data;

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription,
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription,
      images: blog.coverImage ? [blog.coverImage] : [],
    },
    alternates: {
      canonical: `/blogs/${blog.slug}`,
    },
  };
}

export default async function SingleBlogPage(
  props: { params: Promise<{ slug: string }> }
) {
  const params = await props.params;
  const res = await getBlogBySlug(params.slug);
  
  if (!res.success || !res.data) {
    notFound();
  }

  const blog = res.data;

  return (
    <main className="min-h-screen px-6 pb-24 pt-28 md:px-10 lg:px-20">
      <div className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-heading">
            {blog.title}
          </h1>
          {blog.coverImage && (
            <div className="relative h-64 w-full overflow-hidden rounded-xl md:h-96">
              <Image
                src={blog.coverImage}
                alt={blog.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </header>

        <article
          className="mt-8 text-lg leading-relaxed text-muted-foreground [&>h1]:text-4xl [&>h1]:font-bold [&>h1]:text-foreground [&>h1]:mt-10 [&>h1]:mb-6 [&>h1]:font-heading [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-foreground [&>h2]:mt-10 [&>h2]:mb-6 [&>h2]:font-heading [&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:text-foreground [&>h3]:mt-8 [&>h3]:mb-4 [&>h3]:font-heading [&>p]:mb-6 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>li]:mb-2 [&>img]:rounded-xl [&>img]:my-10 [&>a]:text-primary [&>a]:underline [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:my-8 [&>pre]:bg-muted [&>pre]:p-6 [&>pre]:rounded-xl [&>pre]:overflow-x-auto [&>pre]:my-8 [&>code]:bg-muted [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:rounded-md [&>code]:text-sm"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </main>
  );
}
