import { ContactComponent } from "@/features/contact/contact-component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Utsarga Manandhar for job opportunities, collaborations, or full-stack development work.",
  openGraph: {
    title: "Contact | Utsarga Manandhar",
    description:
      "Get in touch with Utsarga Manandhar, Full Stack Developer.",
    url: "https://utsargamanandhar.com.np/contact",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactComponent />;
}
