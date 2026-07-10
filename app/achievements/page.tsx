import { AchievementsComponent } from "@/features/achievements/achievements-component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements | Utsarga Manandhar",
  description:
    "View certifications, awards, and notable achievements earned by Utsarga Manandhar.",
  openGraph: {
    title: "Achievements | Utsarga Manandhar",
    description:
      "View certifications, awards, and notable achievements earned by Utsarga Manandhar.",
    url: "https://utsargamanandhar.com.np/achievements",
  },
  alternates: {
    canonical: "/achievements",
  },
};

export default function AchievementsPage() {
  return <AchievementsComponent />;
}
