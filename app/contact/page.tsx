import { ContactComponent } from "@/features/contact/contact-component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "A list of ways you can contact Utsarga Manandhar.",
  openGraph: {
    title: "Contact | Utsarga Manandhar",
    description: "Ways you can contact me.",
    url: "https://utsargamanandhar.com.np/contact",
  },
};

export default function ContactPage() {
  return <ContactComponent />;
}
