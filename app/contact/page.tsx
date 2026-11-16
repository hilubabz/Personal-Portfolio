import { ContactComponent } from "@/features/contact/contact-component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Reach Out",
  description:
    "Get in touch with Utsarga Manandhar for job opportunities, collaborations, or full-stack development work.",
  openGraph: {
    title: "Contact | Utsarga Manandhar — Full Stack Developer",
    description:
      "Contact Utsarga Manandhar to discuss web development projects, collaboration opportunities, and innovative ideas.",
    url: "https://utsargamanandhar.com.np/contact",
  },
  alternates: {
    canonical: "https://utsargamanandhar.com.np/contact",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      name: "Contact Utsarga Manandhar",
      url: "https://utsargamanandhar.com.np/contact",
      description:
        "Get in touch with Utsarga Manandhar for job opportunities, full-stack development work, or technical collaborations.",
      mainEntity: {
        "@type": "Person",
        name: "Utsarga Manandhar",
        email: "mailto:utsargam44@gmail.com",
        jobTitle: "Full Stack Developer",
        url: "https://utsargamanandhar.com.np",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What development services do you offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I specialize in building full-stack web applications, high-performance responsive frontend interfaces, REST/GraphQL APIs, and real-time systems using Next.js, React, TypeScript, Go, and Node.js.",
          },
        },
        {
          "@type": "Question",
          name: "Are you open to full-time or contract roles?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, I am actively open to discussing full-time software engineering opportunities, long-term contracts, and high-impact freelance collaborations.",
          },
        },
        {
          "@type": "Question",
          name: "What is your location and timezone?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I am based in Nepal (UTC+5:45) and experienced with asynchronous communication, agile workflows, and collaborating across international timezones.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best way to contact you?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The fastest way is emailing me directly at utsargam44@gmail.com or reaching out on LinkedIn. I typically respond within 24 hours.",
          },
        },
      ],
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <ContactComponent />
    </>
  );
}
