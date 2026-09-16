import "./globals.css";
import { Navbar } from "@/components/Common/navbar";
import { cn } from "@/lib/utils";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/Common/theme-provider";
import { MobileSidebar } from "@/components/Common/mobile-sidebar";
import localFont from "next/font/local";
import { Metadata } from "next";
import { SessionProvider } from "next-auth/react";

const Inter = localFont({
  src: [
    {
      path: "../fonts/Inter-Regular.otf",
      weight: "400",
    },
    {
      path: "../fonts/Inter-Medium.otf",
      weight: "500",
    },
    {
      path: "../fonts/Inter-SemiBold.otf",
      weight: "600",
    },
    {
      path: "../fonts/Inter-Bold.otf",
      weight: "700",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://utsargamanandhar.com.np"),
  title: {
    default: "Utsarga Manandhar | Frontend Developer",
    template: "",
  },
  description:
    "Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies.",

  openGraph: {
    title: "Utsarga Manandhar | Frontend Developer",
    description:
      "Portfolio of Utsarga Manandhar, a Frontend Developer specializing in React, Next.js, TypeScript, and modern web applications.",
    url: "https://utsargamanandhar.com.np",
    siteName: "Utsarga Manandhar",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Utsarga Manandhar Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Utsarga Manandhar | Frontend Developer",
    description:
      "Explore my portfolio showcasing projects, skills, and experience.",
    images: ["/og-image.png"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Utsarga Manandhar",
  url: "https://utsargamanandhar.com.np",
  image: "https://utsargamanandhar.com.np/Utsarga.jpg",
  jobTitle: "Frontend Developer",
  description:
    "Frontend Developer specializing in React, Next.js, TypeScript and modern web development.",
  email: "mailto:utsargam44@gmail.com",
  workFor: "Global Square IT Company",
  alumniOf: "Tribuvan University",
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Tanstack Start",
    "MongoDb",
    "Postgres SQL",
    "Nest.js",
  ],
  sameAs: [
    "https://github.com/hilubabz",
    "https://linkedin.com/in/utsargamanandhar",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "antialiased")}>
      <body
        className={`min-h-dvh flex flex-col overflow-x-hidden transition-all duration-500 ${Inter.className}`}
      >
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider defaultOpen={false} className="flex flex-col">
              <div className="md:hidden">
                <MobileSidebar />
              </div>
              <div className="hidden md:block">
                <Navbar />
              </div>
              {children}
            </SidebarProvider>
          </ThemeProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(personSchema),
            }}
          />
        </SessionProvider>
      </body>
    </html>
  );
}
