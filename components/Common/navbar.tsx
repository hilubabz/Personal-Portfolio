"use client";

import { NAV_LINKS } from "@/constants/nav-links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./theme-toggle";

export const Navbar = () => {
  const location = usePathname();

  return (
    <nav className="hidden md:block">
      <div className="flex w-full justify-center px-4 py-4">
        <div className="flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-2 shadow-sm shadow-black/10 backdrop-blur-md">
          {NAV_LINKS.map((val) => {
            const isActive = location === val.link;

            return (
              <Link
                key={val.title}
                href={val.link}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-red-500/10 text-red-500"
                    : "text-muted-foreground hover:bg-red-500/10 hover:text-foreground"
                }`}
              >
                <span className="relative z-10">{val.title}</span>
                {isActive ? (
                  <span className="absolute inset-0 rounded-full bg-red-500/10" />
                ) : null}
              </Link>
            );
          })}
          <div className="ml-2 rounded-full border border-border/60 bg-background/70 p-1">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
