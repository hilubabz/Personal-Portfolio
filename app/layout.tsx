import "./globals.css";
import { Navbar } from "@/components/Common/navbar";
import { cn } from "@/lib/utils";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/Common/theme-provider";
import { MobileSidebar } from "@/components/Common/mobile-sidebar";
import localFont from "next/font/local";

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
