import { AchievementsComponent } from "@/features/achievements/achievements-component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements",
  description: "A list of achievements.",
};

export default function AchievementsPage() {
  return <AchievementsComponent />;
}
