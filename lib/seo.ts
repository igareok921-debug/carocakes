import {
  defaultLocale,
  getLocalizedPath,
  getRouteAlternates,
  getSeoRoute as getTranslatedSeoRoute,
  getRouteKeyBySlug,
  localeConfig,
  locales,
  routeKeys,
  translations,
  type Locale,
  type RouteKey
} from "@/src/i18n/translations";
import { serviceRouteKeys } from "@/src/i18n/seoContent";

export const siteUrl = "https://carocakes.md";
export const siteName = "CaroCakes";
export const businessName = "CaroCakes";
export const whatsappNumber = "37360718756";
export const businessTelephone = "+37360718756";
export const instagramUrl = "https://www.instagram.com/carocakescraft/";
export const tiktokUrl = "https://www.tiktok.com/@carocakescraft";
export const ogImagePath = "/opengraph-image";

export const homeTitle = translations[defaultLocale].meta.title;
export const homeDescription = translations[defaultLocale].meta.description;
export const seoKeywords = translations[defaultLocale].meta.keywords;

export { defaultLocale, getLocalizedPath, getRouteAlternates, getRouteKeyBySlug, localeConfig, locales, routeKeys };
export type { Locale, RouteKey };

export function absoluteUrl(path: string) {
  return `${siteUrl}${path}`;
}

export function absoluteLocalizedUrl(locale: Locale, routeKey: RouteKey = "") {
  return absoluteUrl(getLocalizedPath(locale, routeKey));
}

export function getSeoRoute(locale: Locale, routeKey: RouteKey) {
  const route = getTranslatedSeoRoute(locale, routeKey);

  return {
    ...route,
    path: getLocalizedPath(locale, routeKey),
    routeKey
  };
}

export const seoCategoryRoutes = routeKeys.filter((routeKey) => routeKey !== "");

export function getJsonLdGraph(locale: Locale, routeKey: RouteKey = "") {
  const t = translations[locale];
  const currentUrl = absoluteLocalizedUrl(locale, routeKey);
  const currentRoute = getSeoRoute(locale, routeKey);
  const serviceRoutes = serviceRouteKeys;

  return [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: businessName,
      url: siteUrl,
      logo: `${siteUrl}/android-chrome-512x512.png`,
      image: `${siteUrl}${ogImagePath}`,
      sameAs: [instagramUrl, tiktokUrl]
    },
    {
      "@type": "Bakery",
      "@id": `${siteUrl}/#bakery`,
      name: businessName,
      url: siteUrl,
      image: `${siteUrl}${ogImagePath}`,
      logo: `${siteUrl}/android-chrome-512x512.png`,
      telephone: businessTelephone,
      areaServed: [
        { "@type": "City", name: locale === "ru" ? "Кишинев" : "Chișinău" },
        { "@type": "Country", name: locale === "ru" ? "Молдова" : "Moldova" }
      ],
      sameAs: [instagramUrl, tiktokUrl],
      makesOffer: serviceRoutes.map((key) => {
        const route = getSeoRoute(locale, key);

        return {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: route.serviceName,
            serviceType: route.serviceName,
            areaServed: locale === "ru" ? "Кишинев, Молдова" : "Chișinău, Moldova",
            provider: { "@id": `${siteUrl}/#bakery` }
          }
        };
      })
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      url: siteUrl,
      inLanguage: localeConfig[locale].htmlLang,
      publisher: { "@id": `${siteUrl}/#organization` }
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${currentUrl}#breadcrumbs`,
      itemListElement:
        routeKey === ""
          ? [
              {
                "@type": "ListItem",
                position: 1,
                name: locale === "ru" ? "Главная" : "Acasă",
                item: currentUrl
              }
            ]
          : [
              {
                "@type": "ListItem",
                position: 1,
                name: locale === "ru" ? "Главная" : "Acasă",
                item: absoluteLocalizedUrl(locale)
              },
              {
                "@type": "ListItem",
                position: 2,
                name: currentRoute.heading,
                item: currentUrl
              }
            ]
    }
  ];
}

export const jsonLdGraph = getJsonLdGraph(defaultLocale);
