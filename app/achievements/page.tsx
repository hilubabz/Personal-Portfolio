import { AchievementsComponent } from "@/features/achievements/achievements-component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Notable achievements and milestones in the career of Utsarga Manandhar, Full Stack Developer.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AchievementsPage() {
  return <AchievementsComponent />;
}
