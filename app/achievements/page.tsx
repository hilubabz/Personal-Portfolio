import { AchievementsComponent } from "@/features/achievements/achievements-component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Notable achievements and milestones in the career of Utsarga Manandhar, Full Stack Developer.",
  openGraph: {
    title: "Achievements | Utsarga Manandhar",
    description:
      "Notable achievements and milestones of Utsarga Manandhar.",
    url: "https://utsargamanandhar.com.np/achievements",
  },
  alternates: {
    canonical: "/achievements",
  },
};

export default function AchievementsPage() {
  return <AchievementsComponent />;
}
