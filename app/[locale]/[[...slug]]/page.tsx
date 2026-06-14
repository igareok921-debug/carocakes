import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import CaroCakesExperience from "@/components/CaroCakesExperience";
import {
  absoluteUrl,
  businessTelephone,
  getJsonLdGraph,
  getLocalizedPath,
  getRouteAlternates,
  getRouteKeyBySlug,
  getSeoRoute,
  instagramUrl,
  localeConfig,
  locales,
  ogImagePath,
  routeKeys,
  siteName,
  siteUrl,
  tiktokUrl,
  whatsappNumber,
  type Locale,
  type RouteKey
} from "@/lib/seo";
import { getTranslations, isLocale } from "@/src/i18n/translations";
import {
  articleRouteKeys,
  blogArticles,
  cakeFlavorPrices,
  galleryItems,
  getArticle,
  getFooterLinks,
  getRouteImage,
  getSeoPageKind,
  pricingFactors,
  pricingFaq,
  serviceFaq,
  serviceRouteKeys
} from "@/src/i18n/seoContent";

type LocalizedPageProps = {
  params: {
    locale: string;
    slug?: string[];
  };
};

export const dynamicParams = false;

function resolveRoute(params: LocalizedPageProps["params"]): { locale: Locale; routeKey: RouteKey } | undefined {
  if (!isLocale(params.locale)) return undefined;
  const slug = params.slug?.join("/") || "";
  const routeKey = getRouteKeyBySlug(params.locale, slug);

  if (routeKey === undefined) return undefined;

  return { locale: params.locale, routeKey };
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    routeKeys.map((routeKey) => {
      const slug = getSeoRoute(locale, routeKey).slug;
      return {
        locale,
        slug: slug ? slug.split("/") : []
      };
    })
  );
}

export function generateMetadata({ params }: LocalizedPageProps): Metadata {
  const resolved = resolveRoute(params);
  if (!resolved) return {};

  const { locale, routeKey } = resolved;
  const route = getSeoRoute(locale, routeKey);
  const alternates = getRouteAlternates(routeKey);
  const alternateLocale = locale === "ro" ? localeConfig.ru.ogLocale : localeConfig.ro.ogLocale;

  return {
    title: route.title,
    description: route.description,
    keywords: route.keywords,
    alternates: {
      canonical: route.path,
      languages: Object.fromEntries(Object.entries(alternates).map(([key, path]) => [key, absoluteUrl(path)]))
    },
    openGraph: {
      title: route.title,
      description: route.description,
      url: route.path,
      siteName,
      type: "website",
      locale: localeConfig[locale].ogLocale,
      alternateLocale,
      images: [
        {
          url: ogImagePath,
          width: 1200,
          height: 630,
          alt: `${route.heading} - CaroCakes`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: route.title,
      description: route.description,
      images: [ogImagePath]
    }
  };
}

export default function LocalizedPage({ params }: LocalizedPageProps) {
  const resolved = resolveRoute(params);
  if (!resolved) notFound();

  const { locale, routeKey } = resolved;
  const t = getTranslations(locale);

  if (routeKey === "") {
    return (
      <>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": getJsonLdGraph(locale)
            })
          }}
        />
        <CaroCakesExperience locale={locale} />
      </>
    );
  }

  const route = getSeoRoute(locale, routeKey);
  const pageUrl = absoluteUrl(route.path);
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`${t.form.whatsappIntro} ${t.categoryPage.panelEyebrow}: ${route.serviceName}.`)}`;
  const alternateRoutes = locales.map((item) => ({
    locale: item,
    href: getLocalizedPath(item, routeKey)
  }));
  const pageNavLinks = t.navigation.links.map((link) => ({
    ...link,
    href: link.href.startsWith("#") ? `${getLocalizedPath(locale)}${link.href}` : link.href
  }));
  const pageKind = getSeoPageKind(routeKey);
  const routeImage = getRouteImage(routeKey);
  const shouldPrioritizeRouteImage = pageKind === "service" || pageKind === "blogIndex" || pageKind === "article";
  const footerLinks = getFooterLinks(locale);
  const currentArticle = getArticle(locale, routeKey);
  const currentFaq = pageKind === "pricing" ? pricingFaq[locale] : serviceFaq[locale];
  const priceRoute = getSeoRoute(locale, "preturi-torturi-la-comanda");
  const galleryRoute = getSeoRoute(locale, "galerie");
  const contactRoute = getSeoRoute(locale, "contact");
  const blogRoute = getSeoRoute(locale, "blog");
  const instagramReels = t.reels.items;
  const pageJsonLdGraph: Record<string, unknown>[] = [
    ...getJsonLdGraph(locale, routeKey),
    ...(pageKind === "article" && currentArticle
      ? [
          {
            "@type": "Article",
            "@id": `${pageUrl}#article`,
            headline: currentArticle.title,
            description: currentArticle.excerpt,
            author: { "@type": "Organization", name: "CaroCakes", url: siteUrl },
            publisher: { "@id": `${siteUrl}/#organization` },
            datePublished: currentArticle.publishedAt,
            dateModified: currentArticle.modifiedAt,
            mainEntityOfPage: pageUrl,
            image: `${siteUrl}${routeImage}`
          }
        ]
      : []),
    ...(pageKind === "service"
      ? [
          {
            "@type": "Service",
            "@id": `${pageUrl}#service`,
            name: route.serviceName,
            serviceType: route.serviceName,
            description: route.description,
            areaServed: [
              { "@type": "City", name: locale === "ru" ? "Кишинев" : "Chișinău" },
              { "@type": "Country", name: locale === "ru" ? "Молдова" : "Moldova" }
            ],
            provider: {
              "@type": "Bakery",
              name: "CaroCakes",
              url: siteUrl,
              telephone: businessTelephone,
              sameAs: [instagramUrl, tiktokUrl]
            }
          }
        ]
      : []),
    ...(pageKind === "gallery"
      ? [
          {
            "@type": "ImageGallery",
            "@id": `${pageUrl}#gallery`,
            name: route.heading,
            description: route.description,
            image: galleryItems[locale].map((item) => `${siteUrl}${item.image}`)
          }
        ]
      : []),
    ...((pageKind === "service" || pageKind === "pricing") && currentFaq.length
      ? [
          {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: currentFaq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer
              }
            }))
          }
        ]
      : []),
    ...(pageKind === "pricing"
      ? [
          {
            "@type": "OfferCatalog",
            "@id": `${pageUrl}#flavor-prices`,
            name: locale === "ru" ? "Цены на вкусы тортов за 1 кг" : "Prețuri gusturi de tort per 1 kg",
            itemListElement: cakeFlavorPrices[locale].map((item) => ({
              "@type": "Product",
              "@id": `${pageUrl}#product-${encodeURIComponent(item.flavor.toLowerCase())}`,
              name: `${item.flavor} - CaroCakes`,
              description:
                locale === "ru"
                  ? `Торт ${item.flavor} на заказ в Кишиневе, приготовленный вручную CaroCakes. Цена указана за 1 кг.`
                  : `Tort ${item.flavor} la comandă în Chișinău, preparat artizanal de CaroCakes. Prețul este indicat per 1 kg.`,
              image: `${siteUrl}${routeImage}`,
              category: locale === "ru" ? "Торт на заказ" : "Tort la comandă",
              brand: {
                "@type": "Brand",
                name: "CaroCakes"
              },
              offers: {
                "@type": "Offer",
                priceCurrency: "MDL",
                price: String(item.price),
                availability: "https://schema.org/InStock",
                url: pageUrl,
                unitText: "kg",
                shippingDetails: {
                  "@type": "OfferShippingDetails",
                  shippingDestination: {
                    "@type": "DefinedRegion",
                    addressCountry: "MD",
                    addressRegion: "Chișinău"
                  },
                  deliveryTime: {
                    "@type": "ShippingDeliveryTime",
                    handlingTime: {
                      "@type": "QuantitativeValue",
                      minValue: 1,
                      maxValue: 3,
                      unitCode: "DAY"
                    },
                    transitTime: {
                      "@type": "QuantitativeValue",
                      minValue: 0,
                      maxValue: 1,
                      unitCode: "DAY"
                    }
                  },
                  shippingRate: {
                    "@type": "MonetaryAmount",
                    value: "0",
                    currency: "MDL"
                  }
                },
                hasMerchantReturnPolicy: {
                  "@type": "MerchantReturnPolicy",
                  applicableCountry: "MD",
                  returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted"
                },
                seller: {
                  "@id": `${siteUrl}/#bakery`
                }
              }
            }))
          }
        ]
      : [])
  ];
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@graph": pageJsonLdGraph
  };

  return (
    <main lang={localeConfig[locale].htmlLang} className="min-h-screen bg-ivory text-chocolate">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <section className="relative overflow-hidden px-5 py-8 md:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(217,155,145,0.22),transparent_32rem),radial-gradient(circle_at_80%_20%,rgba(199,154,87,0.18),transparent_28rem)]" />
        <nav aria-label={t.navigation.aria} className="relative z-10 mx-auto flex max-w-6xl items-center justify-between rounded-full border border-gold/25 bg-ivory/88 px-4 py-3 shadow-[0_18px_70px_rgba(20,10,4,0.16)] backdrop-blur">
          <a href={getLocalizedPath(locale)} aria-label={t.categoryPage.backHomeAria} className="relative h-12 w-24">
            <Image src="/logo/carocakes-logo-transparent.png" alt={t.hero.logoAlt} fill sizes="96px" className="scale-[1.75] object-contain" priority />
          </a>
          <div className="hidden items-center gap-3 text-[0.64rem] font-bold uppercase tracking-[0.12em] text-chocolate md:flex lg:gap-4 lg:text-[0.68rem] lg:tracking-[0.14em]">
            {pageNavLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-gold">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div aria-label={t.language.label} className="inline-flex rounded-full border border-gold/25 bg-cream/72 p-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-chocolate">
              {alternateRoutes.map((item) => (
                <a
                  key={item.locale}
                  href={item.href}
                  aria-label={t.language.switchTo[item.locale]}
                  className={`rounded-full px-2.5 py-2 transition ${locale === item.locale ? "bg-chocolate text-ivory shadow-glow" : "hover:bg-ivory/70"}`}
                >
                  {item.locale.toUpperCase()}
                </a>
              ))}
            </div>
            <a href={whatsappHref} className="rounded-full bg-chocolate px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-ivory shadow-glow">
              {t.categoryPage.quoteCta}
            </a>
          </div>
        </nav>
        <div className="relative z-10 mx-auto mt-3 grid max-w-6xl grid-cols-2 gap-2 rounded-[1.4rem] border border-gold/20 bg-ivory/90 p-3 text-xs font-bold uppercase tracking-[0.14em] text-chocolate shadow-[0_16px_50px_rgba(20,10,4,0.12)] backdrop-blur md:hidden">
          {pageNavLinks.map((link) => (
            <a key={link.href} href={link.href} className="rounded-full px-3 py-2 transition hover:bg-cream">
              {link.label}
            </a>
          ))}
        </div>
        <div className="relative z-10 mx-auto grid max-w-6xl gap-10 py-20 md:grid-cols-[1fr_0.82fr] md:items-center md:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">{route.eyebrow}</p>
            <h1 className="mt-5 font-display text-5xl leading-[0.94] md:text-7xl">{route.heading}</h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-cocoa">{route.intro}</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href={whatsappHref} className="inline-flex items-center justify-center rounded-full bg-chocolate px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-ivory shadow-velvet">
                {t.categoryPage.whatsappCta}
              </a>
              <a href={galleryRoute.path} className="inline-flex items-center justify-center rounded-full border border-cocoa/20 bg-white/40 px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-chocolate">
                {t.categoryPage.galleryCta}
              </a>
              {routeKey !== "preturi-torturi-la-comanda" ? (
                <a href={priceRoute.path} className="inline-flex items-center justify-center rounded-full border border-gold/35 bg-cream/70 px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-chocolate">
                  {locale === "ru" ? "Цены" : "Prețuri"}
                </a>
              ) : null}
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/70 bg-gradient-to-br from-white/64 to-cream/58 p-6 shadow-velvet">
            <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-[1.4rem] border border-white/70 bg-cream/70">
              <Image src={routeImage} alt={`${route.heading} - CaroCakes`} fill sizes="(min-width: 768px) 36vw, 90vw" className="object-contain object-center p-4" priority={shouldPrioritizeRouteImage} />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">{t.categoryPage.panelEyebrow}</p>
            <h2 className="mt-4 font-display text-4xl leading-tight">{t.categoryPage.panelTitle}</h2>
            <p className="mt-5 leading-8 text-cocoa/82">{t.categoryPage.panelText}</p>
          </div>
        </div>
      </section>
      {pageKind === "pricing" ? (
        <section className="px-5 pb-20 md:px-10">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="rounded-[1.8rem] border border-white/70 bg-white/45 p-7 shadow-[0_20px_70px_rgba(72,37,17,0.1)]">
              <h2 className="font-display text-4xl">{locale === "ru" ? "Как рассчитывается цена" : "Cum se calculează prețul"}</h2>
              <p className="mt-5 leading-8 text-cocoa/82">{route.intro}</p>
              <p className="mt-5 rounded-[1.2rem] border border-gold/20 bg-cream/70 px-5 py-4 text-sm leading-7 text-cocoa/82">
                {locale === "ru"
                  ? "Цена декора, фигурок, цветов, 3D-элементов и доставки добавляется после обсуждения дизайна."
                  : "Decorul, figurinele, florile, elementele 3D și livrarea se adaugă după ce discutăm designul."}
              </p>
              <a href={whatsappHref} className="mt-8 inline-flex rounded-full bg-chocolate px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-ivory shadow-glow">
                {locale === "ru" ? "Получить цену в WhatsApp" : "Cere ofertă pe WhatsApp"}
              </a>
            </div>
            <div className="rounded-[1.8rem] border border-white/70 bg-ivory/78 p-5 shadow-[0_20px_70px_rgba(72,37,17,0.1)] md:p-7">
              <div className="flex flex-col gap-2 border-b border-gold/20 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">{locale === "ru" ? "Вкусы тортов" : "Gusturi de tort"}</p>
                  <h2 className="mt-2 font-display text-4xl">{locale === "ru" ? "Цена за 1 кг" : "Preț per 1 kg"}</h2>
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cocoa/70">{locale === "ru" ? "MDL / kg" : "lei / kg"}</p>
              </div>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {cakeFlavorPrices[locale].map((item) => (
                  <div key={item.flavor} className="flex items-center justify-between gap-4 rounded-[1rem] border border-gold/14 bg-white/42 px-4 py-3">
                    <span className="text-sm font-semibold text-chocolate">{item.flavor}</span>
                    <span className="shrink-0 rounded-full bg-chocolate px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-ivory">
                      {item.price} {locale === "ru" ? "лей" : "lei"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mx-auto mt-8 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pricingFactors[locale].map((factor) => (
              <article key={factor} className="rounded-[1.5rem] border border-white/70 bg-ivory/72 p-5 shadow-[0_18px_50px_rgba(72,37,17,0.08)]">
                <h3 className="font-display text-2xl text-chocolate">{factor}</h3>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {pageKind === "gallery" ? (
        <>
          <section className="px-5 pb-20 md:px-10">
            <div className="mx-auto mb-12 max-w-7xl">
              <p className="mb-4 text-xs uppercase tracking-[0.32em] text-gold">{t.gallerySection.eyebrow}</p>
              <h2 className={`font-display text-chocolate ${routeKey === "galerie" ? "text-5xl md:text-7xl" : "text-4xl md:text-6xl"}`}>{t.gallerySection.title}</h2>
              <p className="mt-5 text-lg text-cocoa">{t.gallerySection.intro}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full border border-cocoa/20 bg-white/45 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-chocolate shadow-[0_14px_34px_rgba(72,37,17,0.08)] backdrop-blur transition hover:-translate-y-1 hover:border-gold/60">
                  {t.gallerySection.instagramCta}
                </a>
                <a href={tiktokUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full bg-chocolate px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-ivory shadow-glow transition hover:-translate-y-1 hover:bg-cocoa">
                  {t.gallerySection.tiktokCta}
                </a>
              </div>
            </div>
          </section>

          <section className="px-5 pb-20 md:px-10">
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
              {galleryItems[locale].map((item) => (
                <article key={item.title} className="overflow-hidden rounded-[1.7rem] border border-white/70 bg-ivory shadow-[0_22px_70px_rgba(72,37,17,0.12)]">
                  <div className="relative h-72 bg-cream/70">
                    <Image src={item.image} alt={item.alt} fill sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 90vw" className="object-contain object-center p-6" />
                  </div>
                  <div className="border-t border-white/70 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">{item.category}</p>
                    <h2 className="mt-3 font-display text-3xl">{item.title}</h2>
                    <p className="mt-3 leading-7 text-cocoa/80">{item.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-gold/25 bg-cream px-3 py-1 text-xs uppercase tracking-[0.12em] text-cocoa/72">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="px-5 pb-20 md:px-10">
            <div className="mx-auto max-w-7xl">
              <div className="mb-10">
                <p className="text-xs uppercase tracking-[0.32em] text-gold">{t.reels.eyebrow}</p>
                <h3 className="mt-4 font-display text-4xl text-chocolate md:text-6xl">{t.reels.title}</h3>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {instagramReels.map((item) => (
                  <a key={item.title} href={item.url} target="_blank" rel="noreferrer" className="group overflow-hidden rounded-[1.6rem] border border-white/70 bg-cream/70 transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(72,37,17,0.14)]">
                    <div className="relative aspect-[9/16] overflow-hidden bg-cream/80">
                      <Image src={item.image} alt={item.alt} fill sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 90vw" className="object-cover object-center transition duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-5">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-gold">{t.reels.cardBadge}</p>
                      <h4 className="mt-3 text-2xl font-semibold text-chocolate">{item.title}</h4>
                      <p className="mt-3 text-sm leading-6 text-cocoa/80">{item.text}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : null}

      {pageKind === "blogIndex" ? (
        <section className="px-5 pb-20 md:px-10">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
            {blogArticles[locale].map((article) => {
              const articleRoute = getSeoRoute(locale, article.routeKey);

              return (
                <article key={article.routeKey} className="rounded-[1.7rem] border border-white/70 bg-white/45 p-6 shadow-[0_22px_70px_rgba(72,37,17,0.1)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">{article.publishedAt}</p>
                  <h2 className="mt-4 font-display text-3xl leading-tight">{article.title}</h2>
                  <p className="mt-4 leading-7 text-cocoa/80">{article.excerpt}</p>
                  <a href={articleRoute.path} className="mt-6 inline-flex rounded-full bg-chocolate px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-ivory">
                    {locale === "ru" ? "Читать" : "Citește"}
                  </a>
                </article>
              );
            })}
          </div>
        </section>
      ) : null}

      {pageKind === "article" && currentArticle ? (
        <section className="px-5 pb-20 md:px-10">
          <article className="mx-auto max-w-4xl rounded-[2rem] border border-white/70 bg-white/48 p-7 shadow-[0_24px_80px_rgba(72,37,17,0.1)] md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">
              {currentArticle.publishedAt} / {currentArticle.modifiedAt}
            </p>
            <div className="mt-8 space-y-6">
              {currentArticle.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-9 text-cocoa">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              {currentArticle.links.map((link) => {
                const linkedRoute = getSeoRoute(locale, link.routeKey);

                return (
                  <a key={link.routeKey} href={linkedRoute.path} className="rounded-full border border-gold/30 bg-cream px-5 py-3 text-sm font-semibold uppercase tracking-[0.13em] text-chocolate">
                    {link.label}
                  </a>
                );
              })}
              <a href={whatsappHref} className="rounded-full bg-chocolate px-5 py-3 text-sm font-semibold uppercase tracking-[0.13em] text-ivory">
                {t.categoryPage.whatsappCta}
              </a>
            </div>
          </article>
        </section>
      ) : null}

      {pageKind === "service" ? (
        <section className="px-5 pb-20 md:px-10">
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
            {t.categoryPage.benefits.map((item) => (
              <article key={item} className="rounded-[1.5rem] border border-white/70 bg-white/42 p-6 shadow-[0_20px_60px_rgba(72,37,17,0.1)]">
                <h2 className="font-display text-3xl">{item}</h2>
                <p className="mt-3 leading-7 text-cocoa/78">{t.categoryPage.benefitText}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {(pageKind === "service" || pageKind === "pricing") && currentFaq.length ? (
        <section className="px-5 pb-20 md:px-10">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/70 bg-ivory/70 p-7 shadow-[0_22px_70px_rgba(72,37,17,0.08)]">
            <h2 className="font-display text-4xl">{locale === "ru" ? "Вопросы и ответы" : "Întrebări frecvente"}</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {currentFaq.map((faq) => (
                <article key={faq.question}>
                  <h3 className="font-display text-2xl">{faq.question}</h3>
                  <p className="mt-3 leading-7 text-cocoa/78">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="px-5 pb-24 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-5 rounded-[2rem] border border-white/70 bg-chocolate p-6 text-ivory shadow-velvet md:grid-cols-[1fr_1.2fr] md:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">{locale === "ru" ? "Навигация" : "Navigare"}</p>
            <h2 className="mt-4 font-display text-4xl">{locale === "ru" ? "Продолжить выбор" : "Continuă alegerea"}</h2>
            <p className="mt-4 leading-8 text-cream/82">
              {locale === "ru"
                ? "Перейдите к ценам, галерее или свяжитесь с нами в WhatsApp для точного расчета."
                : "Mergi spre prețuri, galerie sau contactează-ne pe WhatsApp pentru o ofertă exactă."}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 md:justify-end">
            {footerLinks.map((link) => {
              const linkedRoute = getSeoRoute(locale, link.routeKey);

              return (
                <a key={link.routeKey} href={linkedRoute.path} className="rounded-full border border-ivory/25 px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-ivory transition hover:bg-ivory/10">
                  {link.label}
                </a>
              );
            })}
            <a href={whatsappHref} className="rounded-full bg-ivory px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-chocolate">
              {t.categoryPage.whatsappCta}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
