"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronUp, Instagram, Menu, MessageCircle, Play, X } from "lucide-react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type FormEvent, type MouseEvent, type ReactNode, useEffect, useState } from "react";
import { instagramUrl, tiktokUrl, whatsappNumber } from "@/lib/seo";
import { flavorsByLocale, getLocalizedPath, getTranslations, localeConfig, locales, type Locale } from "@/src/i18n/translations";
import { getFooterLinks } from "@/src/i18n/seoContent";

const whatsappUrl = `https://wa.me/${whatsappNumber}`;
const navigationSections = ["acasa", "signature", "galerie", "despre", "contact"];

const formatDateValue = (date: Date) => date.toLocaleDateString("en-CA");

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function FadeIn({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function InstagramBrandIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="instagram-gradient" x1="3" x2="21" y1="21" y2="3" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FEDA75" />
          <stop offset="0.28" stopColor="#FA7E1E" />
          <stop offset="0.52" stopColor="#D62976" />
          <stop offset="0.76" stopColor="#962FBF" />
          <stop offset="1" stopColor="#4F5BD5" />
        </linearGradient>
      </defs>
      <rect width="22" height="22" x="1" y="1" rx="6" fill="url(#instagram-gradient)" />
      <path fill="#fff" stroke="#6B341C" strokeWidth="0.45" d="M12 7.15A4.85 4.85 0 1 0 12 16.85 4.85 4.85 0 0 0 12 7.15Zm0 7.95A3.1 3.1 0 1 1 12 8.9a3.1 3.1 0 0 1 0 6.2Zm5.02-8.17a1.13 1.13 0 1 1-2.26 0 1.13 1.13 0 0 1 2.26 0Z" />
      <path fill="#fff" stroke="#6B341C" strokeWidth="0.45" d="M16.1 3.9H7.9a4 4 0 0 0-4 4v8.2a4 4 0 0 0 4 4h8.2a4 4 0 0 0 4-4V7.9a4 4 0 0 0-4-4Zm2.22 12.2a2.23 2.23 0 0 1-2.22 2.22H7.9a2.23 2.23 0 0 1-2.22-2.22V7.9A2.23 2.23 0 0 1 7.9 5.68h8.2a2.23 2.23 0 0 1 2.22 2.22v8.2Z" />
    </svg>
  );
}

function TikTokBrandIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path fill="#25F4EE" d="M15.2 3.1c.25 2.18 1.46 3.48 3.55 3.62v3.1a6.44 6.44 0 0 1-3.5-1.04v6.36c0 3.2-2.04 5.76-5.43 5.76-3.17 0-5.2-2.25-5.2-5.02 0-3.35 2.97-5.68 6.31-5.03v3.22c-1.45-.45-3.05.3-3.05 1.73 0 .98.77 1.82 1.96 1.82 1.35 0 2.14-.76 2.14-2.57V3.1h3.22Z" />
      <path fill="#FE2C55" d="M16.05 2.35c.25 2.18 1.46 3.48 3.55 3.62v3.1a6.44 6.44 0 0 1-3.5-1.04v6.36c0 3.2-2.04 5.76-5.43 5.76-3.17 0-5.2-2.25-5.2-5.02 0-3.35 2.97-5.68 6.31-5.03v3.22c-1.45-.45-3.05.3-3.05 1.73 0 .98.77 1.82 1.96 1.82 1.35 0 2.14-.76 2.14-2.57V2.35h3.22Z" />
      <path fill="#111" d="M15.62 2.72c.25 2.18 1.46 3.48 3.55 3.62v3.1a6.44 6.44 0 0 1-3.5-1.04v6.36c0 3.2-2.04 5.76-5.43 5.76-3.17 0-5.2-2.25-5.2-5.02 0-3.35 2.97-5.68 6.31-5.03v3.22c-1.45-.45-3.05.3-3.05 1.73 0 .98.77 1.82 1.96 1.82 1.35 0 2.14-.76 2.14-2.57V2.72h3.22Z" />
    </svg>
  );
}

function LanguageSwitcher({ locale, className = "" }: { locale: Locale; className?: string }) {
  const t = getTranslations(locale);

  const handleSwitch = (targetLocale: Locale) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.location.href = `${getLocalizedPath(targetLocale)}${window.location.hash || ""}`;
  };

  return (
    <div aria-label={t.language.label} className={`inline-flex items-center rounded-full border border-gold/25 bg-cream/72 p-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-chocolate ${className}`}>
      {locales.map((item, index) => (
        <a
          key={item}
          href={getLocalizedPath(item)}
          onClick={handleSwitch(item)}
          aria-label={t.language.switchTo[item]}
          className={`rounded-full px-2.5 py-2 transition ${locale === item ? "bg-chocolate text-ivory shadow-glow" : "hover:bg-ivory/70"}`}
        >
          {item.toUpperCase()}
          {index === 0 ? <span className="sr-only"> | </span> : null}
        </a>
      ))}
    </div>
  );
}

export default function CaroCakesExperience({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  const signatureCakes = t.signature.items;
  const desserts = t.dessertsSection.items;
  const heroCakes = t.gallerySection.items;
  const gallery = t.gallerySection.items;
  const instagramReels = t.reels.items;
  const reviewImages = t.reviews.items;
  const cakeFlavors = flavorsByLocale[locale];
  const footerLinks = getFooterLinks(locale);
  const isRu = locale === "ru";
  const titleSize = isRu ? "text-4xl md:text-6xl" : "text-5xl md:text-7xl";
  const navTextSize = isRu ? "text-[0.62rem] tracking-[0.1em] lg:text-[0.66rem] lg:tracking-[0.12em]" : "text-[0.64rem] tracking-[0.12em] lg:text-[0.68rem] lg:tracking-[0.14em]";

  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.22], [1, 1.08]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0.55]);
  const heroCakeY = useTransform(scrollYProgress, [0, 0.18], [0, -90]);
  const heroCakeRotate = useTransform(scrollYProgress, [0, 0.22], [0, -4]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.18], [0, 54]);
  const [activeCake, setActiveCake] = useState(0);
  const [eventDate, setEventDate] = useState("");
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [calendarMonth, setCalendarMonth] = useState(() => new Date());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const formattedEventDate = eventDate
    ? new Date(`${eventDate}T00:00:00`).toLocaleDateString(localeConfig[locale].dateLocale, {
        day: "2-digit",
        month: "long",
        year: "numeric"
      })
    : "";
  const calendarYear = calendarMonth.getFullYear();
  const calendarMonthIndex = calendarMonth.getMonth();
  const firstWeekday = (new Date(calendarYear, calendarMonthIndex, 1).getDay() + 6) % 7;
  const daysInCalendarMonth = new Date(calendarYear, calendarMonthIndex + 1, 0).getDate();
  const calendarCells = Array.from({ length: firstWeekday + daysInCalendarMonth }, (_, index) => (index < firstWeekday ? null : new Date(calendarYear, calendarMonthIndex, index - firstWeekday + 1)));

  const selectEventDate = (date: Date) => {
    if (date < today) return;

    setEventDate(formatDateValue(date));
    setCalendarOpen(false);
  };

  const changeCalendarMonth = (offset: number) => {
    setCalendarMonth((current) => new Date(current.getFullYear(), current.getMonth() + offset, 1));
  };

  const scrollToAdjacentSection = (direction: "up" | "down") => {
    const currentIndex = navigationSections.reduce((closestIndex, sectionId, index) => {
      const section = document.getElementById(sectionId);
      const closestSection = document.getElementById(navigationSections[closestIndex]);
      if (!section || !closestSection) return closestIndex;

      return Math.abs(section.getBoundingClientRect().top) < Math.abs(closestSection.getBoundingClientRect().top) ? index : closestIndex;
    }, 0);
    const nextIndex = Math.min(Math.max(currentIndex + (direction === "down" ? 1 : -1), 0), navigationSections.length - 1);

    document.getElementById(navigationSections[nextIndex])?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleOrderSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const getValue = (name: string) => String(formData.get(name) || "").trim();
    const message = [
      t.form.whatsappIntro,
      "",
      t.form.whatsappDetailsTitle,
      `${t.form.fields.name}: ${getValue("name")}`,
      `${t.form.fields.phone}: ${getValue("contact")}`,
      `${t.form.fields.date}: ${getValue("date")}`,
      `${t.form.fields.flavor}: ${getValue("flavor")}`,
      `${t.form.fields.details}: ${getValue("details")}`
    ].join("\n");

    window.location.href = `${whatsappUrl}?text=${encodeURIComponent(message)}`;
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveCake((current) => (current + 1) % heroCakes.length);
    }, 2000);

    return () => window.clearInterval(timer);
  }, [heroCakes.length]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ duration: 1.35, smoothWheel: true, wheelMultiplier: 0.78 });
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const sections = gsap.utils.toArray<HTMLElement>("[data-cinema]");
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { y: 90, scale: 0.96, opacity: 0.35 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 86%", end: "top 38%", scrub: 0.8 }
        }
      );
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main lang={localeConfig[locale].htmlLang} className="relative overflow-hidden">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-70">
        <div className="absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(217,155,145,0.26),transparent_62%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(199,154,87,0.2),transparent_64%)] blur-3xl" />
      </div>

      <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8">
        <nav aria-label={t.navigation.aria} className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-gold/25 bg-ivory px-4 py-3 shadow-[0_18px_70px_rgba(20,10,4,0.26)] md:px-6">
          <a href="#acasa" aria-label={t.navigation.homeAria} className="relative flex h-12 w-24 items-center overflow-visible">
            <Image src="/logo/carocakes-logo-transparent.png" alt={t.hero.logoAlt} fill className="scale-[1.75] object-contain drop-shadow-[0_10px_22px_rgba(72,37,17,0.16)]" priority />
          </a>
          <div className={`hidden items-center gap-3 font-bold uppercase text-chocolate md:flex lg:gap-4 ${navTextSize}`}>
            {t.navigation.links.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-gold">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <LanguageSwitcher locale={locale} className="hidden md:inline-flex" />
            <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="CaroCakes Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 bg-cream text-chocolate transition hover:-translate-y-0.5 hover:border-gold/60 md:flex">
              <InstagramBrandIcon className="h-6 w-6 md:h-5 md:w-5" />
            </a>
            <a href={tiktokUrl} target="_blank" rel="noreferrer" aria-label="CaroCakes TikTok" className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 bg-cream text-chocolate transition hover:-translate-y-0.5 hover:border-gold/60 md:flex">
              <TikTokBrandIcon className="h-6 w-6 md:h-5 md:w-5" />
            </a>
            <a href="#contact" className="hidden rounded-full bg-chocolate px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-ivory shadow-glow transition hover:bg-cocoa sm:inline-flex">
              {t.navigation.order}
            </a>
            <button type="button" onClick={() => setMobileMenuOpen((current) => !current)} aria-label={t.navigation.menuAria} className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/35 bg-chocolate text-ivory shadow-glow transition hover:border-gold/60 md:hidden">
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
        {mobileMenuOpen ? (
          <div className="mx-auto mt-3 max-w-7xl rounded-[1.6rem] border border-gold/35 bg-chocolate p-4 text-ivory shadow-[0_18px_70px_rgba(20,10,4,0.28)] md:hidden">
            <div className="grid gap-2 text-sm font-bold uppercase tracking-[0.18em]">
              <div className="px-3 pb-2">
                <LanguageSwitcher locale={locale} className="bg-ivory text-chocolate" />
              </div>
              {t.navigation.links.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="rounded-full px-4 py-3 transition hover:bg-ivory/10">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <section id="acasa" className="relative z-10 min-h-screen overflow-hidden px-5 pb-12 pt-28 md:px-10">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,248,238,0.35),rgba(246,230,210,0.66)_38%,rgba(72,37,17,0.12)_100%)]" />
          <div className="absolute left-1/2 top-[12%] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(199,154,87,0.24),transparent_68%)] blur-3xl" />
          <div className="absolute bottom-[-20%] left-1/2 h-[34rem] w-[72rem] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse,rgba(72,37,17,0.18),transparent_66%)] blur-2xl" />
        </motion.div>

        <div className="pointer-events-none absolute inset-0 z-10 opacity-60">
          <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-ivory via-ivory/72 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-ivory via-ivory/60 to-transparent" />
          <div className="absolute left-[8%] top-[18%] h-px w-[84%] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        </div>

        <div className="relative z-30 mx-auto grid min-h-[calc(100vh-8.75rem)] max-w-7xl items-center gap-8 lg:grid-cols-[0.98fr_1.02fr]">
          <motion.div style={{ y: heroTextY }} className="relative z-20 w-full max-w-2xl overflow-hidden pt-5 text-left">
            <div className="pointer-events-none absolute -left-7 top-28 hidden h-40 w-px bg-gradient-to-b from-transparent via-gold/70 to-transparent md:block" />
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.12 }} className="mt-5">
              <p className="font-script text-3xl leading-none text-blush md:text-4xl">{t.hero.eyebrow}</p>
              <h1 className={`mt-3 max-w-full font-display leading-[0.92] text-chocolate md:max-w-2xl ${isRu ? "text-4xl md:text-6xl xl:text-7xl" : "text-5xl md:text-7xl"}`}>
                {t.hero.title}
              </h1>
              <div className="mt-6 h-px w-44 gold-line" />
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.24 }} className="mt-6 max-w-xl text-lg leading-8 text-cocoa md:text-xl">
              {t.hero.subtitle}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.34 }} className="mt-8 flex max-w-full flex-col gap-4 sm:flex-row">
              <a href="#contact" className="group inline-flex max-w-full items-center justify-center gap-3 rounded-full bg-chocolate px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-ivory shadow-velvet transition hover:-translate-y-1 hover:bg-cocoa sm:px-8 sm:tracking-[0.18em]">
                {t.hero.orderCta} <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </a>
              <a href="#galerie" className="inline-flex max-w-full items-center justify-center rounded-full border border-cocoa/20 bg-white/40 px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-chocolate backdrop-blur-xl transition hover:-translate-y-1 hover:border-gold/60 sm:px-8 sm:tracking-[0.18em]">
                {t.hero.galleryCta}
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.46 }} className="mt-8 grid max-w-xl grid-cols-3 gap-3">
              {t.hero.pills.map((item) => (
                <div key={item} className="rounded-2xl border border-white/60 bg-white/24 px-4 py-3 text-center shadow-[0_16px_38px_rgba(72,37,17,0.08)] backdrop-blur-xl">
                  <span className="text-[10px] uppercase tracking-[0.12em] text-cocoa/70 md:text-xs md:tracking-[0.2em]">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div style={{ y: heroCakeY, rotate: heroCakeRotate }} className="relative z-10 mx-auto flex w-full max-w-[38rem] flex-col items-center justify-center pb-12 pt-20 [perspective:1400px] md:flex-row lg:pb-0 lg:pt-20">
            <div className="absolute left-1/2 top-1/2 h-[86%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,248,238,0.95),rgba(217,155,145,0.18)_55%,transparent_72%)] blur-xl" />
            <motion.div
              className="absolute -top-4 left-1/2 z-20 h-28 w-52 -translate-x-1/2 overflow-visible md:-top-6 md:h-32 md:w-60"
              initial={{ opacity: 0, y: 18, scale: 0.94 }}
              animate={{ opacity: 1, y: [0, -8, 0], scale: 1 }}
              transition={{
                opacity: { duration: 0.9, delay: 0.2 },
                y: { duration: 5.2, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 0.9, delay: 0.2 }
              }}
            >
              <Image
                src="/logo/carocakes-logo-transparent.png"
                alt={t.hero.logoAlt}
                fill
                priority
                className="scale-[1.62] object-contain drop-shadow-[0_24px_48px_rgba(72,37,17,0.24)]"
              />
            </motion.div>
            <motion.div className="absolute right-2 top-10 h-[78%] w-[72%] rotate-3 rounded-[2rem] border border-white/55 bg-white/20 shadow-[0_34px_90px_rgba(72,37,17,0.12)] backdrop-blur-md" />
            <motion.div className="absolute right-8 top-4 h-[78%] w-[72%] -rotate-3 rounded-[2rem] border border-white/45 bg-blush/10 shadow-[0_24px_70px_rgba(72,37,17,0.1)] backdrop-blur-md" />

            <motion.div
              className="relative aspect-[4/5] w-[min(76vw,29rem)] overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-b from-white/60 to-cream/24 p-3 shadow-[0_42px_120px_rgba(72,37,17,0.22)] backdrop-blur-xl md:w-[min(64vw,30rem)]"
              initial={{ opacity: 0, y: 48, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.025, rotate: 0.4 }}
            >
              {heroCakes.map((cake, index) => {
                const isActive = index === activeCake;
                const offset = index > activeCake ? 1 : -1;

                return (
                  <motion.div
                    key={cake.image}
                    className="absolute inset-3 overflow-hidden rounded-[1.55rem] bg-cream"
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      x: isActive ? 0 : offset * 64,
                      rotateY: isActive ? 0 : offset * 26,
                      scale: isActive ? 1 : 0.94,
                      filter: isActive ? "blur(0px)" : "blur(8px)"
                    }}
                    transition={{ duration: 0.82, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      transformStyle: "preserve-3d",
                      zIndex: isActive ? 2 : 1,
                      pointerEvents: isActive ? "auto" : "none"
                    }}
                  >
                    <Image
                      src={cake.image}
                      alt={cake.alt}
                      fill
                      priority={index === 0}
                      sizes="(min-width: 1024px) 480px, 76vw"
                      className="object-contain object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ganache/16 via-transparent to-white/10" />
                  </motion.div>
                );
              })}

              <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2 rounded-full border border-white/60 bg-ivory/54 p-2 backdrop-blur-xl">
                {heroCakes.map((cake, index) => (
                  <button
                    key={cake.image}
                    aria-label={`${t.controls.showCakeAria} ${cake.title}`}
                    onClick={() => setActiveCake(index)}
                    className={`h-2.5 rounded-full transition-all ${activeCake === index ? "w-8 bg-chocolate" : "w-2.5 bg-cocoa/24 hover:bg-cocoa/45"}`}
                  />
                ))}
              </div>
            </motion.div>
            <motion.div
              className="glass relative z-20 mt-4 w-[min(88vw,28rem)] overflow-hidden rounded-[1.35rem] p-4 shadow-[0_28px_90px_rgba(72,37,17,0.22)] md:absolute md:bottom-8 md:left-4 md:mt-0 md:w-80 md:p-5 lg:bottom-14 lg:-left-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: [0, 0, 0], rotateX: [0, 0, 0], rotateZ: [0, 0, 0] }}
              transition={{
                opacity: { duration: 0.9, delay: 0.55 },
                y: { duration: 4.8, repeat: Infinity, ease: "easeInOut" },
                rotateX: { duration: 4.8, repeat: Infinity, ease: "easeInOut" },
                rotateZ: { duration: 5.4, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="pointer-events-none absolute -left-16 -top-16 h-32 w-32 rounded-full bg-gold/20 blur-2xl" />
              <motion.div
                className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/35 to-transparent"
                animate={{ x: ["0%", "320%"] }}
                transition={{ duration: 3.8, repeat: Infinity, repeatDelay: 1.8, ease: "easeInOut" }}
              />
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gold md:text-xs md:tracking-[0.24em]">{heroCakes[activeCake].title}</p>
              <p className="mt-2 font-display text-xl leading-tight text-chocolate md:text-2xl">{heroCakes[activeCake].text}</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.a href="#signature" aria-label={t.hero.scrollAria} className="absolute bottom-5 left-1/2 z-40 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-cocoa/20 bg-white/30 text-cocoa backdrop-blur-xl" animate={{ y: [0, 10, 0] }} transition={{ duration: 2.4, repeat: Infinity }}>
          <ChevronDown size={18} />
        </motion.a>
      </section>

      <section id="signature" data-cinema className="relative z-20 px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.32em] text-gold">{t.signature.eyebrow}</p>
              <h2 className={`font-display text-chocolate ${titleSize}`}>{t.signature.title}</h2>
            </div>
            <p className="max-w-sm text-lg leading-8 text-cocoa">{t.signature.intro}</p>
          </FadeIn>
          <div className="grid gap-5 md:grid-cols-3">
            {signatureCakes.map((item) => (
              <FadeIn key={item.title} className="group">
                <article className="glass relative min-h-[30rem] overflow-hidden rounded-[2rem] p-7 transition duration-500 hover:-translate-y-2 hover:shadow-glow">
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blush/20 blur-2xl transition group-hover:scale-125" />
                  <div className="relative mb-7 h-64 overflow-hidden rounded-[1.7rem] border border-white/70 bg-cream/70">
                    <Image src={item.image} alt={item.alt} fill sizes="(min-width: 768px) 33vw, 90vw" className="object-contain object-center p-2 transition duration-700 group-hover:scale-[1.02]" />
                  </div>
                  <h3 className="font-display text-3xl text-chocolate">{item.title}</h3>
                  <p className="mt-5 leading-7 text-cocoa/78">{t.signature.cardText}</p>
                  <span className="mt-8 inline-flex text-sm uppercase tracking-[0.2em] text-gold">{t.signature.cardBadge}</span>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section data-cinema className="relative z-20 px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-gold">{t.dessertsSection.eyebrow}</p>
            <h2 className={`font-display mx-auto max-w-4xl leading-none text-chocolate ${titleSize}`}>{t.dessertsSection.title}</h2>
          </FadeIn>
          <div className="mt-14 grid gap-5 md:grid-cols-5">
            {desserts.map((item) => (
              <FadeIn key={item.title}>
                <div className="group relative flex min-h-72 flex-col justify-end overflow-hidden rounded-[1.5rem] border border-white/60 bg-gradient-to-b from-white/50 to-cream/70 p-6 shadow-velvet transition hover:-translate-y-2">
                  <div className="absolute inset-x-5 top-5 h-40 overflow-hidden rounded-[1.2rem] border border-white/70 bg-ivory/70">
                    <Image src={item.image} alt={item.alt} fill sizes="(min-width: 768px) 20vw, 90vw" className="object-contain object-center p-3 transition duration-700 group-hover:scale-105" />
                  </div>
                  <h3 className="font-display text-3xl text-chocolate">{item.title}</h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section data-cinema className="relative z-20 px-5 py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <FadeIn className="mb-14 text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-gold">{t.orderSteps.eyebrow}</p>
            <h2 className={`font-display text-chocolate ${titleSize}`}>{t.orderSteps.title}</h2>
          </FadeIn>
          <div className="relative">
            <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent md:block" />
            {t.orderSteps.steps.map((step, index) => (
              <FadeIn key={step} className="mb-5">
                <div className="glass ml-0 grid gap-5 rounded-[1.6rem] p-6 md:ml-16 md:grid-cols-[auto_1fr] md:items-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-chocolate font-display text-2xl text-ivory">0{index + 1}</span>
                  <div>
                    <h3 className="font-display text-3xl text-chocolate">{step}</h3>
                    <p className="mt-2 text-cocoa/75">{t.orderSteps.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="galerie" data-cinema className="relative z-20 py-24">
        <div className="px-5 md:px-10">
          <FadeIn className="mx-auto mb-12 max-w-7xl">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.32em] text-gold">{t.gallerySection.eyebrow}</p>
              <h2 className={`font-display text-chocolate ${titleSize}`}>{t.gallerySection.title}</h2>
              <p className="mt-5 text-lg text-cocoa">{t.gallerySection.intro}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full border border-cocoa/20 bg-white/45 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-chocolate shadow-[0_14px_34px_rgba(72,37,17,0.08)] backdrop-blur transition hover:-translate-y-1 hover:border-gold/60">
                  <InstagramBrandIcon className="h-5 w-5" /> {t.gallerySection.instagramCta} <ArrowRight size={17} />
                </a>
                <a href={tiktokUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full bg-chocolate px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-ivory shadow-glow transition hover:-translate-y-1 hover:bg-cocoa">
                  <TikTokBrandIcon className="h-5 w-5" /> {t.gallerySection.tiktokCta} <ArrowRight size={17} />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {gallery.map((item) => (
              <article key={item.title} className="group flex min-h-[31rem] flex-col overflow-hidden rounded-[1.6rem] border border-white/70 bg-ivory shadow-[0_22px_60px_rgba(72,37,17,0.12)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(72,37,17,0.16)]">
                <div className="relative h-80 bg-cream/70">
                  <Image src={item.image} alt={item.alt} fill sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 90vw" className="object-contain object-center p-6 transition duration-700 group-hover:scale-105" />
                </div>
                <div className="border-t border-white/70 bg-ivory/95 p-5 md:p-6">
                  <p className="mb-3 text-xs uppercase tracking-[0.26em] text-gold">{t.gallerySection.cardBadge}</p>
                  <h3 className="font-display text-4xl text-chocolate">{item.title}</h3>
                  <p className="mt-2 text-cocoa">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-20">
            <FadeIn className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.32em] text-gold">{t.reels.eyebrow}</p>
                <h3 className="font-display text-4xl leading-none text-chocolate md:text-6xl">{t.reels.title}</h3>
              </div>
            </FadeIn>
            <div className="grid gap-6 md:grid-cols-3">
              {instagramReels.map((reel) => (
                <FadeIn key={reel.url}>
                  <article className="group relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-gradient-to-br from-cream via-ivory to-blush/20 p-4 shadow-[0_26px_80px_rgba(72,37,17,0.14)] transition duration-500 hover:-translate-y-1 hover:shadow-glow">
                    <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gold/20 blur-3xl transition duration-700 group-hover:scale-125" />
                    <div className="absolute -bottom-20 left-10 h-44 w-44 rounded-full bg-chocolate/10 blur-3xl" />
                    <div className="relative rounded-[1.45rem] border border-white/75 bg-ivory/62 p-4">
                      <div className="mb-4 flex items-center justify-between gap-5">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-gold">{t.reels.cardBadge}</p>
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-chocolate text-ivory shadow-glow">
                          <Instagram size={17} />
                        </span>
                      </div>
                      <a href={reel.url} target="_blank" rel="noreferrer" aria-label={t.reels.playAria} className="relative block aspect-[9/16] overflow-hidden rounded-[1.2rem] border border-white/80 bg-cream/70">
                        <Image src={reel.image} alt={reel.alt} fill sizes="(min-width: 768px) 28vw, 90vw" className="object-cover object-center transition duration-700 group-hover:scale-[1.03]" />
                        <span className="absolute inset-0 bg-gradient-to-t from-chocolate/26 via-transparent to-transparent" />
                        <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-chocolate/92 pl-1 text-ivory shadow-glow">
                          <Play size={25} fill="currentColor" />
                        </span>
                      </a>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section data-cinema className="relative z-20 px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mb-12 grid gap-6 md:grid-cols-[0.72fr_1fr] md:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.32em] text-gold">{t.reviews.eyebrow}</p>
              <h2 className={`font-display leading-none text-chocolate ${titleSize}`}>{t.reviews.title}</h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-cocoa md:justify-self-end">{t.reviews.intro}</p>
          </FadeIn>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {reviewImages.map((review) => (
              <FadeIn key={review.src}>
                <article className="group relative overflow-hidden rounded-[1.8rem] border border-white/70 bg-gradient-to-b from-white/58 to-cream/72 p-3 shadow-[0_24px_70px_rgba(72,37,17,0.12)] transition duration-500 hover:-translate-y-1 hover:shadow-glow">
                  <div className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-gold/20 blur-2xl transition duration-700 group-hover:scale-125" />
                  <div className="relative overflow-hidden rounded-[1.35rem] border border-white/80 bg-ivory/88 p-2">
                    <div className="relative aspect-[9/16] overflow-hidden rounded-[1rem] bg-cream/70">
                      <Image src={review.src} alt={review.alt} fill sizes="(min-width: 1280px) 22vw, (min-width: 768px) 44vw, 90vw" className="object-contain object-center transition duration-700 group-hover:scale-[1.01]" />
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="despre" data-cinema className="relative z-20 px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <FadeIn>
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-gold">{t.about.eyebrow}</p>
            <h2 className={`font-display leading-[0.95] text-chocolate ${titleSize}`}>{t.about.title}</h2>
          </FadeIn>
          <FadeIn className="glass rounded-[2rem] p-8 md:p-12">
            <p className="mb-5 font-script text-3xl leading-none text-blush md:text-4xl">{t.about.scriptTitle}</p>
            {t.about.paragraphs.map((paragraph, index) => (
              <p key={paragraph} className={`${index === 0 ? "text-xl leading-9 text-cocoa" : "mt-6 text-lg leading-8 text-cocoa/82"}`}>
                {paragraph}
              </p>
            ))}
            <div className="mt-8 h-px w-full gold-line" />
            <div className="mt-8 flex flex-wrap gap-3">
              {t.about.tags.map((item) => (
                <span key={item} className="rounded-full border border-gold/30 bg-ivory/60 px-4 py-2 text-xs uppercase tracking-[0.18em] text-cocoa/70">
                  {item}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="contact" data-cinema className="relative z-20 px-5 pb-10 pt-32 md:px-10 md:pt-40">
        <div className="relative mx-auto overflow-hidden rounded-[2.2rem] bg-chocolate px-6 pb-12 pt-24 text-ivory shadow-velvet md:px-14 md:pb-16 md:pt-28">
          <div className="absolute inset-x-0 top-0 h-px gold-line" />
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <FadeIn>
              <a href="https://www.vilmgroup.md" target="_blank" rel="noreferrer" className="mb-8 inline-flex max-w-sm items-center gap-4 text-base leading-7 text-cream/82 transition hover:text-ivory">
                <span className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-ivory p-2 shadow-[0_12px_30px_rgba(0,0,0,0.16)]">
                  <Image src="/logo/vilm-favicon-192.png" alt={t.contact.partner.logoAlt} fill sizes="56px" className="object-contain p-2" />
                </span>
                <span>
                  {t.contact.partner.textBefore} <span className="font-semibold text-gold underline-offset-4 hover:underline">{t.contact.partner.linkText}</span>
                </span>
              </a>
              <div className="relative mb-8 h-64 w-full max-w-md overflow-hidden rounded-[2rem] border border-ivory/60 shadow-[0_18px_48px_rgba(0,0,0,0.16)]">
                <Image src="/logo/carocakes-logo.png?v=footer-fill" alt={t.hero.logoAlt} fill sizes="(min-width: 768px) 448px, 90vw" className="object-cover object-center" />
              </div>
              <p className="text-sm uppercase tracking-[0.28em] text-gold">{t.contact.eyebrow}</p>
              <p className="mt-5 max-w-md text-base leading-7 text-cream/78">
                {t.contact.partner.bodyBefore}{" "}
                <a href="https://www.vilmgroup.md" target="_blank" rel="noreferrer" className="font-semibold text-gold underline-offset-4 transition hover:text-ivory hover:underline">
                  {t.contact.partner.linkText}
                </a>{" "}
                {t.contact.partner.bodyAfter}
              </p>
            </FadeIn>
            <FadeIn>
              <h2 className={`font-display leading-none ${titleSize}`}>{t.contact.title}</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-cream">{t.contact.intro}</p>
              <form onSubmit={handleOrderSubmit} className="mt-9 grid gap-4 rounded-[1.6rem] border border-ivory/12 bg-ivory/8 p-4 backdrop-blur md:grid-cols-2 md:p-5">
                <label className="grid gap-2">
                  <span className="sr-only">{t.form.name}</span>
                  <input name="name" required placeholder={t.form.name} autoComplete="name" className="rounded-full border border-ivory/20 bg-ivory/95 px-5 py-3 text-sm text-chocolate outline-none placeholder:text-cocoa/55 focus:border-gold" />
                </label>
                <label className="grid gap-2">
                  <span className="sr-only">{t.form.phone}</span>
                  <input name="contact" type="tel" required placeholder={t.form.phone} autoComplete="tel" className="rounded-full border border-ivory/20 bg-ivory/95 px-5 py-3 text-sm text-chocolate outline-none placeholder:text-cocoa/55 focus:border-gold" />
                </label>
                <div className="relative grid gap-2 md:col-span-2">
                  <span className="px-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">{t.form.eventDate}</span>
                  <button
                    type="button"
                    onClick={() => setCalendarOpen((current) => !current)}
                    aria-label={t.form.chooseEventDateAria}
                    aria-expanded={calendarOpen}
                    className="relative block h-14 overflow-hidden rounded-full border border-ivory/20 bg-ivory/95 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] transition hover:border-gold/70 focus:border-gold focus:outline-none"
                  >
                    <span className={`pointer-events-none flex h-full items-center px-5 text-sm ${eventDate ? "text-chocolate" : "text-cocoa/55"}`}>
                      {formattedEventDate || t.form.eventDate}
                    </span>
                  </button>
                  <input type="hidden" name="date" value={formattedEventDate || eventDate} />
                  {calendarOpen ? (
                    <div className="absolute left-0 top-[calc(100%+0.75rem)] z-50 w-full max-w-[30rem] rounded-[1.6rem] border border-ivory/60 bg-ivory p-4 text-chocolate shadow-[0_28px_80px_rgba(20,10,4,0.28)]">
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <button type="button" aria-label={t.calendar.previousMonthAria} onClick={() => changeCalendarMonth(-1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-xl text-cocoa transition hover:bg-cream">
                          ‹
                        </button>
                        <div className="text-center">
                          <p className="font-display text-3xl leading-none text-chocolate">{t.calendar.months[calendarMonthIndex]}</p>
                          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">{calendarYear}</p>
                        </div>
                        <button type="button" aria-label={t.calendar.nextMonthAria} onClick={() => changeCalendarMonth(1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-xl text-cocoa transition hover:bg-cream">
                          ›
                        </button>
                      </div>
                      <div className="grid grid-cols-7 gap-1.5 text-center">
                        {t.calendar.weekdays.map((day) => (
                          <span key={day} className="py-2 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-gold">
                            {day}
                          </span>
                        ))}
                        {calendarCells.map((date, index) => {
                          if (!date) return <span key={`empty-${index}`} />;

                          const value = formatDateValue(date);
                          const isSelected = value === eventDate;
                          const isPast = date < today;

                          return (
                            <button
                              key={value}
                              type="button"
                              disabled={isPast}
                              onClick={() => selectEventDate(date)}
                              className={`aspect-square rounded-full text-sm font-semibold transition ${
                                isSelected
                                  ? "bg-chocolate text-ivory shadow-glow"
                                  : isPast
                                    ? "cursor-not-allowed text-cocoa/24"
                                    : "text-cocoa hover:bg-cream hover:text-chocolate"
                              }`}
                            >
                              {date.getDate()}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ) : null}
                </div>
                <label className="grid gap-2 md:col-span-2">
                  <span className="px-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">{t.form.flavors}</span>
                  <select name="flavor" defaultValue={cakeFlavors[0]} className="rounded-full border border-ivory/20 bg-ivory/95 px-5 py-3 text-sm text-chocolate outline-none focus:border-gold">
                    {cakeFlavors.map((flavor) => (
                      <option key={flavor} value={flavor}>
                        {flavor}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2 md:col-span-2">
                  <span className="sr-only">{t.form.details}</span>
                  <textarea name="details" placeholder={t.form.details} rows={4} className="resize-none rounded-[1.2rem] border border-ivory/20 bg-ivory/95 px-5 py-4 text-sm text-chocolate outline-none placeholder:text-cocoa/55 focus:border-gold" />
                </label>
                <button type="submit" className="inline-flex items-center justify-center gap-3 rounded-full bg-ivory px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-chocolate transition hover:-translate-y-1 md:col-span-2">
                  <MessageCircle size={17} /> {t.form.submit}
                </button>
              </form>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full border border-ivory/30 px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-ivory transition hover:-translate-y-1 hover:bg-ivory/10">
                  <InstagramBrandIcon className="h-5 w-5" /> {t.contact.instagramCta}
                </a>
                <a href={tiktokUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full border border-ivory/30 px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-ivory transition hover:-translate-y-1 hover:bg-ivory/10">
                  <TikTokBrandIcon className="h-5 w-5" /> {t.contact.tiktokCta}
                </a>
              </div>
              <nav aria-label={locale === "ru" ? "Навигация в футере" : "Navigare footer"} className="mt-8 flex flex-wrap gap-3 border-t border-ivory/12 pt-6">
                {footerLinks.map((link) => (
                  <a key={link.routeKey} href={getLocalizedPath(locale, link.routeKey)} className="rounded-full border border-ivory/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cream transition hover:bg-ivory/10 hover:text-ivory">
                    {link.label}
                  </a>
                ))}
              </nav>
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="fixed bottom-4 left-3 z-[68] flex flex-col gap-2 md:bottom-6 md:left-6">
        <button type="button" onClick={() => scrollToAdjacentSection("up")} aria-label={t.controls.upAria} className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-ivory text-chocolate shadow-[0_14px_42px_rgba(44,22,12,0.22)] transition hover:-translate-y-0.5 hover:border-gold">
          <ChevronUp size={18} />
        </button>
        <button type="button" onClick={() => scrollToAdjacentSection("down")} aria-label={t.controls.downAria} className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-chocolate text-ivory shadow-[0_14px_42px_rgba(44,22,12,0.22)] transition hover:-translate-y-0.5 hover:border-gold">
          <ChevronDown size={18} />
        </button>
      </div>
    </main>
  );
}
