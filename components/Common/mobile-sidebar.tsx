"use client";
import { NAV_LINKS } from "@/constants/nav-links";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "../ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MobileSidebar = () => {
  const location = usePathname();
  const { setOpenMobile } = useSidebar();

  return (
    <>
      <div className="fixed left-2 top-2">
        <SidebarTrigger />
      </div>
      <Sidebar className="md:hidden border-r border-border/50 bg-[linear-gradient(135deg,rgba(15,15,15,0.98),rgba(30,30,30,0.95))] text-foreground shadow-2xl backdrop-blur-2xl">
        <SidebarHeader className="px-5 pb-3 pt-5">
          <div className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-red-400">
            Portfolio
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Explore my work, experience, and contact details.
          </p>
        </SidebarHeader>
        <SidebarContent className="px-2 py-2">
          <SidebarMenu className="space-y-2">
            {NAV_LINKS.map((val) => {
              const isActive = location === val.link;

              return (
                <SidebarMenuItem key={val.title}>
                  <Link
                    href={val.link}
                    onClick={() => setOpenMobile(false)}
                    className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "border-red-500/30 bg-red-500/10 text-red-400 shadow-lg shadow-red-500/10"
                        : "border-transparent text-foreground hover:border-red-500/20 hover:bg-red-500/10 hover:text-red-400"
                    }`}
                  >
                    <div className="rounded-xl border border-white/10 bg-white/10 p-2 shadow-sm">
                      <val.icon size={16} />
                    </div>
                    <span>{val.title}</span>
                  </Link>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </>
  );
};
