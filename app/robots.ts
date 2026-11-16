import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin/",
        "/login",
        "/simple",
        "/api/",
        "/achievements",
      ],
    },
    sitemap: "https://utsargamanandhar.com.np/sitemap.xml",
  };
}
