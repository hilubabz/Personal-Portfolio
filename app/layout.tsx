import "./globals.css";
import { StaggeredNavbar } from "@/components/Common/StaggeredNavbar";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/Common/theme-provider";
import { Footer } from "@/components/layout/footer";
import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";
import { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { LoadingScreen } from "@/components/Common/LoadingScreen";

const inter = localFont({
  src: [
    { path: "../fonts/Inter-Regular.otf", weight: "400" },
    { path: "../fonts/Inter-Medium.otf", weight: "500" },
    { path: "../fonts/Inter-SemiBold.otf", weight: "600" },
    { path: "../fonts/Inter-Bold.otf", weight: "700" },
  ],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://utsargamanandhar.com.np"),
  title: {
    default: "Utsarga Manandhar | Full Stack Developer",
    template: "%s | Utsarga Manandhar",
  },
  description:
    "Full Stack Developer specializing in Next.js, React, TypeScript, Node.js, and modern web technologies.",

  openGraph: {
    title: "Utsarga Manandhar | Full Stack Developer",
    description:
      "Full Stack Developer building modern web applications with Next.js, React, TypeScript, and Node.js.",
    url: "https://utsargamanandhar.com.np",
    siteName: "Utsarga Manandhar",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Utsarga Manandhar — Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Utsarga Manandhar | Full Stack Developer",
    description:
      "Full Stack Developer building modern web applications with Next.js, React, TypeScript, and Node.js.",
    images: ["/og-image.png"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Utsarga Manandhar",
  url: "https://utsargamanandhar.com.np",
  image: "https://utsargamanandhar.com.np/Utsarga.jpg",
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer specializing in Next.js, React, TypeScript, Node.js and modern web development.",
  email: "mailto:utsargam44@gmail.com",
  worksFor: {
    "@type": "Organization",
    name: "Global Square IT Company",
  },
  alumniOf: "Tribhuvan University",
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Go",
    "MongoDB",
    "PostgreSQL",
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
    <html
      lang="en"
      className={cn("h-full", inter.variable, spaceGrotesk.variable)}
      suppressHydrationWarning
    >
      <body
        className={`flex min-h-dvh flex-col overflow-x-hidden antialiased ${inter.className}`}
      >
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* Premium Background Effects (Light & Dark Mode) */}
            <div className="fixed inset-0 z-[-1] pointer-events-none bg-background">
              {/* Fading Grid Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#818cf810_1px,transparent_1px),linear-gradient(to_bottom,#818cf810_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#818cf815_1px,transparent_1px),linear-gradient(to_bottom,#818cf815_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
              {/* Primary Color Glow Orb */}
              <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-150 h-150 rounded-full bg-primary/5 dark:bg-primary/10 blur-[120px]"></div>
            </div>

            <LoadingScreen />
            <StaggeredNavbar />
            <div className="flex-1 relative z-0">{children}</div>
            <Footer />
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
