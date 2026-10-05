import { Hero } from "@/components/sections/hero";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { SkillsOverview } from "@/components/sections/skills-overview";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { AchievementsOverview } from "@/components/sections/achievements-overview";
import { BlogPreview } from "@/components/sections/blog-preview";
import { ContactCTA } from "@/components/sections/contact-cta";

export function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <SkillsOverview />
      <ExperienceTimeline />
      <AchievementsOverview />
      <BlogPreview />
      <ContactCTA />
    </main>
  );
}
