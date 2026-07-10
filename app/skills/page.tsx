import { SkillsComponent } from "@/features/skills/skillls-component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description: "A list of skills learned by Utsarga Manandhar.",
};

export default function Skills() {
  return <SkillsComponent />;
}
