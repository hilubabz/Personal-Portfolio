import { ContactComponent } from "@/features/contact/contact-component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "A list of ways you can contact Utsarga Manandhar.",
};

export default function ContactPage() {
  return <ContactComponent />;
}
