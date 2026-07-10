import { AchievementsComponent } from "@/features/achievements/achievements-component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements",
  description: "A list of achievements.",
  openGraph: {
    title: "Achievements | Utsarga Manandhar",
    description: "A collection of my achievements.",
    url: "https://utsargamanandhar.com.np/achievements",
  },
};

export default function AchievementsPage() {
  return <AchievementsComponent />;
}
