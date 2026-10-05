"use client";

import StaggeredMenu from "@/components/ui/StaggeredMenu";
import ThemeToggle from "@/components/Common/theme-toggle";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function StaggeredNavbar() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const menuItems = [
    { label: "Home", ariaLabel: "Home", link: "/" },
    { label: "Projects", ariaLabel: "Projects", link: "/projects" },
    { label: "Experience", ariaLabel: "Experience", link: "/experience" },
    { label: "Skills", ariaLabel: "Skills", link: "/skills" },
    { label: "Blog", ariaLabel: "Blog", link: "/blogs" },
    { label: "Contact", ariaLabel: "Contact", link: "/contact" },
  ];

  const socialItems = [
    { label: "GitHub", link: "https://github.com/hilubabz" },
    { label: "LinkedIn", link: "https://linkedin.com/in/utsargamanandhar" },
  ];

  const isLight = mounted && resolvedTheme === "light";

  return (
    <StaggeredMenu
      isFixed={true}
      position="right"
      //@ts-expect-error tsx to jsx
      items={menuItems}
      //@ts-expect-error tsx to jsx
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      menuButtonColor={isLight ? "#000" : "#fff"}
      openMenuButtonColor={isLight ? "#000" : "#fff"}
      changeMenuColorOnOpen={true}
      colors={isLight ? ["#f3f4f6", "#e5e7eb"] : ["#1e1b4b", "#312e81"]}
      logoUrl={isLight ? "/icon.png" : "/full-logo.jpg"}
      accentColor="var(--primary)"
      closeOnClickAway={true}
      headerRight={<ThemeToggle />}
    />
  );
}
