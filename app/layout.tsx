import "./globals.css";
import { Navbar } from "@/components/Common/navbar";
import { cn } from "@/lib/utils";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/Common/theme-provider";
import { MobileSidebar } from "@/components/Common/mobile-sidebar";
import localFont from "next/font/local";
import { Metadata } from "next";

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
    template: "%s | Utsarga Manandhar",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "antialiased")}>
      <body
        className={`min-h-full flex flex-col overflow-x-hidden transition-all duration-500 ${Inter.className}`}
      >
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
      </body>
    </html>
  );
}
