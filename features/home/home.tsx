import { Hero } from "@/components/sections/hero";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { SkillsOverview } from "@/components/sections/skills-overview";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { BlogPreview } from "@/components/sections/blog-preview";
import { ContactCTA } from "@/components/sections/contact-cta";
import { getFeaturedBlogs } from "@/actions/blog";

export async function Home() {
  const blogs = await getFeaturedBlogs();
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      {blogs && <BlogPreview blogs={blogs?.data ?? []} />}
      <SkillsOverview />
      <ExperienceTimeline />
      {/* <AchievementsOverview /> */}
      <ContactCTA />
    </main>
  );
}
