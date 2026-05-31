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
    canonical: "/ro",
    languages: {
      "ro-MD": "/ro",
      "ru-MD": "/ru",
      "x-default": "/ro"
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
    url: "/ro",
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

function getHtmlLang() {
  const pathname = headers().get("x-pathname") || "";
  return pathname.startsWith("/ru") ? "ru" : "ro";
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={getHtmlLang()}>
      <body>
        {children}
        <CaroCakesAssistant />
      </body>
    </html>
  );
}
