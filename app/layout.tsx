import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Common/navbar";
import { cn } from "@/lib/utils";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/Common/theme-provider";
import { MobileSidebar } from "@/components/Common/mobile-sidebar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Utsarga Manandhar | Portfolio",
  description:
    "A polished personal portfolio showcasing projects, skills, experience, and contact details.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden transition-all duration-500">
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
