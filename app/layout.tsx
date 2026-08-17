import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import CaroCakesAssistant from "@/components/CaroCakesAssistant";
import { homeDescription, homeTitle, ogImagePath, seoKeywords, siteName, siteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: homeTitle,
  description: homeDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  keywords: seoKeywords,
  alternates: {
    canonical: `${siteUrl}/ro`,
    languages: {
      "ro-MD": `${siteUrl}/ro`,
      "ru-MD": `${siteUrl}/ru`,
      "x-default": `${siteUrl}/ro`
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: `${siteUrl}/ro`,
    siteName,
    type: "website",
    locale: "ro_MD",
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: "CaroCakes - torturi personalizate la comandă în Chișinău"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [ogImagePath]
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  category: "Bakery"
};

export const viewport: Viewport = {
  themeColor: "#482511",
  colorScheme: "light"
};

function getPageContext() {
  const pathname = headers().get("x-pathname") || "";

  return {
    isMaintenancePage:
      pathname === "/maintenance" || headers().get("x-maintenance-mode") === "true",
    lang: pathname.startsWith("/ru") ? "ru" : "ro"
  };
}

function getHtmlLang() {
  const { lang } = getPageContext();

  return lang;
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isMaintenancePage } = getPageContext();

  return (
    <html lang={getHtmlLang()}>
      <body>
        {children}
        {!isMaintenancePage && <CaroCakesAssistant />}
      </body>
    </html>
  );
}
