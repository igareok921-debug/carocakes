import type { MetadataRoute } from "next";
import { absoluteUrl, getLocalizedPath, getRouteAlternates, getSeoRoute, locales, routeKeys } from "@/lib/seo";

const lastModified = new Date("2026-05-31");

export default function sitemap(): MetadataRoute.Sitemap {
  return routeKeys.flatMap((routeKey) => {
    const alternates = getRouteAlternates(routeKey);
    const languages = Object.fromEntries(Object.entries(alternates).map(([language, path]) => [language, absoluteUrl(path)]));

    return locales.map((locale) => {
      const route = getSeoRoute(locale, routeKey);
      const isArticle = route.slug.startsWith("blog/");

      return {
        url: absoluteUrl(getLocalizedPath(locale, routeKey)),
        lastModified,
        changeFrequency: isArticle ? "monthly" : "weekly",
        priority: Number(route.priority),
        alternates: {
          languages
        }
      };
    });
  });
}
