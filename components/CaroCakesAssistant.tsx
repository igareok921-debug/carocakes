"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LoaderCircle, Send, X } from "lucide-react";
import { getTranslations, isLocale, type Locale } from "@/src/i18n/translations";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function getLocaleFromPathname(pathname: string): Locale {
  const firstSegment = pathname.split("/")[1];
  return isLocale(firstSegment) ? firstSegment : "ro";
}

export default function CaroCakesAssistant() {
  const pathname = usePathname() || "";
  const locale = useMemo(() => getLocaleFromPathname(pathname), [pathname]);
  const t = getTranslations(locale);
  const [chatOpen, setChatOpen] = useState(false);
  const [agentPromptIndex, setAgentPromptIndex] = useState(0);
  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: t.chat.initialMessage }
  ]);

  useEffect(() => {
    setChatMessages([{ role: "assistant", content: t.chat.initialMessage }]);
    setChatInput("");
    setChatOpen(false);
    setChatLoading(false);
    setAgentPromptIndex(0);
  }, [locale, t.chat.initialMessage]);

  useEffect(() => {
    if (chatOpen) return;

    const timer = window.setInterval(() => {
      setAgentPromptIndex((current) => (current + 1) % t.chat.prompts.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, [chatOpen, t.chat.prompts.length]);

  const sendChatMessage = async (messageText = chatInput) => {
    const cleanMessage = messageText.trim();
    if (!cleanMessage || chatLoading) return;

    const nextMessages: ChatMessage[] = [...chatMessages, { role: "user", content: cleanMessage }];
    setChatMessages(nextMessages);
    setChatInput("");
    setChatLoading(true);

    try {
      const response = await fetch("/api/caro-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale, messages: nextMessages })
      });
      const data = (await response.json()) as { reply?: string };

      setChatMessages((current) => [
        ...current,
        { role: "assistant", content: data.reply || t.chat.fallbackReply }
      ]);
    } catch {
      setChatMessages((current) => [
        ...current,
        { role: "assistant", content: t.chat.errorReply }
      ]);
    } finally {
      setChatLoading(false);
    }
  };

  const handleChatSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendChatMessage();
  };

  return (
    <div className="fixed bottom-4 right-4 z-[70] flex max-w-[calc(100vw-2rem)] flex-col items-end text-left md:bottom-6 md:right-7">
      {chatOpen ? (
        <div className="mb-3 w-[min(26rem,calc(100vw-1.5rem))] overflow-hidden rounded-[1.7rem] border border-gold/35 bg-ivory text-chocolate shadow-[0_28px_90px_rgba(44,22,12,0.38)]">
          <div className="flex items-center justify-between gap-3 border-b border-gold/18 bg-gradient-to-r from-chocolate to-cocoa px-4 py-3 text-ivory">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold">{t.chat.title}</p>
              <p className="font-display text-2xl leading-none">{t.chat.subtitle}</p>
            </div>
            <button type="button" onClick={() => setChatOpen(false)} aria-label={t.chat.closeAria} className="flex h-9 w-9 items-center justify-center rounded-full bg-ivory/12 transition hover:bg-ivory/20">
              <X size={18} />
            </button>
          </div>
          <div data-lenis-prevent data-lenis-prevent-wheel className="max-h-[22rem] space-y-3 overflow-y-auto overscroll-contain px-4 py-4">
            {chatMessages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <p className={`max-w-[86%] rounded-[1.1rem] px-4 py-3 text-sm leading-6 ${message.role === "user" ? "bg-chocolate text-ivory" : "bg-cream text-cocoa"}`}>
                  {message.content}
                </p>
              </div>
            ))}
            {chatLoading ? (
              <div className="flex justify-start">
                <p className="inline-flex items-center gap-2 rounded-[1.1rem] bg-cream px-4 py-3 text-sm text-cocoa">
                  <LoaderCircle size={16} className="animate-spin" /> {t.chat.typing}
                </p>
              </div>
            ) : null}
          </div>
          {chatMessages.length === 1 ? (
            <div className="flex flex-wrap gap-2 border-t border-gold/15 px-4 py-3">
              {t.chat.quickQuestions.map((question) => (
                <button key={question} type="button" onClick={() => sendChatMessage(question)} className="rounded-full border border-gold/25 bg-white/55 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-cocoa transition hover:bg-cream">
                  {question}
                </button>
              ))}
            </div>
          ) : null}
          <form onSubmit={handleChatSubmit} className="flex gap-2 border-t border-gold/15 p-3">
            <input value={chatInput} onChange={(event) => setChatInput(event.target.value)} placeholder={t.chat.inputPlaceholder} className="min-w-0 flex-1 rounded-full border border-gold/20 bg-white px-4 py-3 text-sm text-chocolate outline-none placeholder:text-cocoa/45 focus:border-gold" />
            <button type="submit" disabled={chatLoading || !chatInput.trim()} className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-chocolate pl-0.5 text-ivory shadow-glow transition hover:bg-cocoa disabled:cursor-not-allowed disabled:opacity-45" aria-label={t.chat.sendAria}>
              <Send size={18} />
            </button>
          </form>
        </div>
      ) : null}
      <button
        type="button"
        onClick={() => setChatOpen((current) => !current)}
        aria-label={t.chat.openAria}
        className="flex flex-col items-end transition hover:-translate-y-1"
      >
        {!chatOpen ? (
          <span className="mb-2 max-w-[9.75rem] rounded-[0.95rem] border border-gold/50 bg-chocolate px-3 py-2 text-xs font-semibold leading-5 text-ivory shadow-[0_18px_60px_rgba(44,22,12,0.36)] md:mb-3 md:max-w-[15rem] md:px-4 md:py-3 md:text-base md:leading-6">
            {t.chat.prompts[agentPromptIndex]}
          </span>
        ) : null}
        <span className="relative flex h-[4.75rem] w-[4.75rem] items-center justify-center overflow-hidden rounded-[1.35rem] border border-gold/35 bg-ivory shadow-[0_16px_44px_rgba(44,22,12,0.26)] md:hidden">
          <Image
            src="/logo/carocakes-logo-transparent.png"
            alt=""
            fill
            sizes="76px"
            className="scale-[1.75] object-contain p-2"
          />
          <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-ivory bg-gold shadow-[0_0_18px_rgba(199,154,87,0.85)]" />
        </span>
        <span className="relative hidden h-56 w-56 overflow-visible md:block">
          <video
            src="/caro-agent.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-contain mix-blend-screen drop-shadow-[0_18px_34px_rgba(72,37,17,0.28)]"
          />
          <span className="absolute bottom-4 right-5 h-4 w-4 rounded-full border-2 border-ivory bg-gold shadow-[0_0_18px_rgba(199,154,87,0.85)]" />
        </span>
      </button>
    </div>
  );
}
