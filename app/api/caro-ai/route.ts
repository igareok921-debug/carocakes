import { NextResponse } from "next/server";
import { flavorsByLocale, getTranslations, isLocale, type Locale } from "@/src/i18n/translations";
import { cakeFlavorPrices } from "@/src/i18n/seoContent";

const localeNames: Record<Locale, string> = {
  ro: "romana",
  ru: "rusa"
};

function getCaroKnowledge(locale: Locale) {
  const flavors = flavorsByLocale[locale].join(", ");
  const flavorPrices = cakeFlavorPrices[locale].map((item) => `${item.flavor}: ${item.price} ${locale === "ru" ? "лей/кг" : "lei/kg"}`).join("; ");

  if (locale === "ru") {
    return `
CaroCakes создает индивидуальные торты и десерты на заказ в Кишиневе, Молдова.
Что мы делаем: индивидуальные торты, торты на день рождения, свадебные торты, торты на крещение, минималистичные торты, luxury торты, макаронс, капкейки, индивидуальные десерты, печенье и кенди бар для событий.
Доступные вкусы тортов: ${flavors}.
Цены на вкусы за 1 кг: ${flavorPrices}.
Заказ: клиент заполняет форму на сайте с именем, телефоном, датой события, выбранным вкусом и деталями дизайна/темы/цветов/доставки. Форма открывает готовое сообщение в WhatsApp для CaroCakes.
Если контекста мало, уточни: тип события, дату, желаемый размер, вкус, визуальный стиль, цвета, тему и нужна ли доставка по Кишиневу.
Цена: можешь назвать цену вкуса за 1 кг и, если клиент указал вес, посчитать базовую цену состава. Не называй финальную цену как гарантированную: декор, фигурки, цветы, 3D-элементы, срочность и доставка рассчитываются отдельно после обсуждения дизайна.
Тон: теплый, элегантный, короткий и естественный. Отвечай на русском. Не обещай гарантированную доступность без подтверждения.
`;
  }

  return `
CaroCakes creeaza torturi si deserturi personalizate in Chisinau, Moldova.
Ce facem: torturi personalizate, torturi aniversare, torturi pentru nunta, torturi pentru botez, torturi minimaliste, torturi luxury, macarons, cupcakes, prajituri individuale, biscuiti fini si candy bar pentru evenimente.
Gusturi de tort disponibile: ${flavors}.
Preturi pentru gusturi per 1 kg: ${flavorPrices}.
Comanda: clientul completeaza formularul de pe site cu nume, telefon, data evenimentului, gustul ales si detalii despre design/tema/culori/livrare. Formularul trimite mesaj direct pe WhatsApp la CaroCakes.
Ce trebuie intrebat daca lipseste contextul: tipul evenimentului, data evenimentului, marimea dorita, gustul preferat, stilul vizual, culorile, tema si daca doreste livrare in Chisinau.
Pret: poti spune pretul gustului per 1 kg si, daca userul a indicat greutatea, poti calcula baza compozitiei. Nu prezenta suma ca pret final garantat: decorul, figurinele, florile, elementele 3D, urgenta si livrarea se calculeaza separat dupa design.
Ton: cald, elegant, scurt, natural, in romana. Nu suna robotic. Nu promite disponibilitate garantata fara confirmare.
`;
}

type OpenAIResponse = {
  output_text?: string;
  output?: Array<{
    content?: Array<{
      type?: string;
      text?: string;
    }>;
  }>;
};

function extractResponseText(data: OpenAIResponse) {
  if (data.output_text) return data.output_text;

  return (
    data.output
      ?.flatMap((item) => item.content || [])
      .filter((content) => content.type === "output_text" && content.text)
      .map((content) => content.text)
      .join("\n")
      .trim() || ""
  );
}

function getPriceFallback(locale: Locale) {
  const prices = cakeFlavorPrices[locale]
    .map((item) => `- ${item.flavor}: ${item.price} ${locale === "ru" ? "лей/кг" : "lei/kg"}`)
    .join("\n");

  if (locale === "ru") {
    return `Цены на вкусы указаны за 1 кг:\n${prices}\n\nИтоговая стоимость зависит от веса, дизайна, фигурок, цветов, 3D-декора, срочности и доставки. Для точной цены отправьте дату события и фото для вдохновения.`;
  }

  return `Prețurile pentru gusturi sunt per 1 kg:\n${prices}\n\nPrețul final depinde de greutate, design, figurine, flori, decor 3D, urgență și livrare. Pentru ofertă exactă, trimite data evenimentului și o poză de inspirație.`;
}

function getLocalAssistantReply(locale: Locale, messages: Array<{ role: "user" | "assistant"; content: string }>, fallbackReply: string) {
  const latestUserMessage = [...messages].reverse().find((message) => message.role === "user")?.content.toLowerCase() || "";
  const asksPrice =
    latestUserMessage.includes("preț") ||
    latestUserMessage.includes("pret") ||
    latestUserMessage.includes("cost") ||
    latestUserMessage.includes("cât") ||
    latestUserMessage.includes("cat") ||
    latestUserMessage.includes("цена") ||
    latestUserMessage.includes("цены") ||
    latestUserMessage.includes("стоимость") ||
    latestUserMessage.includes("сколько");

  return asksPrice ? getPriceFallback(locale) : fallbackReply;
}

export async function POST(request: Request) {
  try {
    const { locale: requestedLocale, messages } = (await request.json()) as {
      locale?: string;
      messages?: Array<{ role: "user" | "assistant"; content: string }>;
    };
    const locale = requestedLocale && isLocale(requestedLocale) ? requestedLocale : "ro";
    const t = getTranslations(locale);
    const fallbackReply = t.chat.fallbackReply;

    const latestMessages = Array.isArray(messages) ? messages.slice(-8) : [];
    const conversation = latestMessages.map((message) => `${message.role === "assistant" ? "Caro" : "Client"}: ${message.content}`).join("\n");

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ reply: getLocalAssistantReply(locale, latestMessages, fallbackReply) });
    }

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
        instructions: `Esti Caro, asistenta virtuala CaroCakes. Raspunde strict in limba ${localeNames[locale]}.\n${getCaroKnowledge(locale)}`,
        input: conversation,
        max_output_tokens: 260
      })
    });

    if (!response.ok) {
      if (process.env.NODE_ENV !== "production") {
        console.error("OpenAI API error", response.status, await response.text());
      }
      return NextResponse.json({ reply: getLocalAssistantReply(locale, latestMessages, fallbackReply) });
    }

    const data = (await response.json()) as OpenAIResponse;
    return NextResponse.json({ reply: extractResponseText(data) || fallbackReply });
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Caro AI route error", error);
    }
    return NextResponse.json({ reply: getTranslations("ro").chat.fallbackReply });
  }
}
