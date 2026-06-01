import type { Locale, RouteKey } from "@/src/i18n/translations";

export type SeoPageKind = "service" | "pricing" | "gallery" | "blogIndex" | "article" | "info";

export type SeoFaq = {
  question: string;
  answer: string;
};

export type SeoInternalLink = {
  label: string;
  routeKey: RouteKey;
};

export type CakeFlavorPrice = {
  flavor: string;
  price: number;
};

export type SeoGalleryItem = {
  title: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  tags: string[];
  language: Locale;
};

export type SeoArticle = {
  routeKey: RouteKey;
  title: string;
  excerpt: string;
  publishedAt: string;
  modifiedAt: string;
  paragraphs: string[];
  links: SeoInternalLink[];
};

export const serviceRouteKeys: RouteKey[] = [
  "torturi-la-comanda-chisinau",
  "torturi-personalizate",
  "torturi-pentru-copii",
  "torturi-aniversare",
  "torturi-nunta",
  "torturi-botez",
  "torturi-minimaliste",
  "torturi-luxury",
  "candy-bar",
  "macarons",
  "cupcakes",
  "prajituri-individuale",
  "biscuiti-fini"
];

export const articleRouteKeys: RouteKey[] = [
  "blog-cum-alegi-un-tort-personalizat-in-chisinau",
  "blog-cu-cat-timp-inainte-comanzi-un-tort",
  "blog-tort-pentru-copii-idei-design",
  "blog-tort-de-nunta-chisinau-ghid",
  "blog-candy-bar-pentru-botez",
  "blog-gusturi-de-tort-pentru-evenimente"
];

export function getSeoPageKind(routeKey: RouteKey): SeoPageKind {
  if (routeKey === "preturi-torturi-la-comanda") return "pricing";
  if (routeKey === "galerie") return "gallery";
  if (routeKey === "blog") return "blogIndex";
  if (articleRouteKeys.includes(routeKey)) return "article";
  if (serviceRouteKeys.includes(routeKey)) return "service";
  return "info";
}

export function getRouteImage(routeKey: RouteKey) {
  const images: Partial<Record<RouteKey, string>> = {
    "torturi-la-comanda-chisinau": "/transparent/torturi-personalizate-carocakes.png",
    "torturi-personalizate": "/transparent/torturi-personalizate-carocakes.png",
    "torturi-pentru-copii": "/transparent/tort-roz-copii-carocakes.png",
    "torturi-aniversare": "/transparent/torturi-aniversare-carocakes.png",
    "torturi-nunta": "/transparent/torturi-nunta-carocakes.png",
    "torturi-botez": "/transparent/torturi-botez-carocakes.png",
    "torturi-minimaliste": "/transparent/torturi-minimaliste-carocakes.png",
    "torturi-luxury": "/transparent/torturi-luxury-carocakes.png",
    "candy-bar": "/transparent/candy-bar-carocakes.png",
    macarons: "/transparent/macarons-carocakes.png",
    cupcakes: "/transparent/cupcakes-carocakes.png",
    "prajituri-individuale": "/transparent/prajituri-individuale-carocakes.png",
    "biscuiti-fini": "/transparent/biscuiti-fini-carocakes.png",
    galerie: "/transparent/tort-luxury-auriu-carocakes.png",
    "preturi-torturi-la-comanda": "/transparent/tort-aniversar-statement-carocakes.png"
  };

  return images[routeKey] || "/og-carocakes.png";
}

export const pricingFactors: Record<Locale, string[]> = {
  ro: [
    "Greutatea tortului și numărul estimativ de porții",
    "Compoziția aleasă și complexitatea gustului",
    "Nivelul de decor, culorile și finisajele vizuale",
    "Figurine, flori, elemente 3D sau accente speciale",
    "Data evenimentului și timpul disponibil pentru pregătire",
    "Livrare în Chișinău, ridicare sau solicitare urgentă"
  ],
  ru: [
    "Вес торта и ориентировочное количество порций",
    "Выбранная начинка и сложность вкуса",
    "Уровень декора, цвета и визуальные детали",
    "Фигурки, цветы, 3D-декор или специальные акценты",
    "Дата события и время, доступное для подготовки",
    "Доставка по Кишиневу, самовывоз или срочный заказ"
  ]
};

export const cakeFlavorPrices: Record<Locale, CakeFlavorPrice[]> = {
  ro: [
    { flavor: "Banana - caramel", price: 450 },
    { flavor: "Carrot cake", price: 450 },
    { flavor: "Cocos - vișine", price: 450 },
    { flavor: "Cafea - alune", price: 480 },
    { flavor: "Fistic - zmeură", price: 520 },
    { flavor: "Honey cake clasic", price: 450 },
    { flavor: "Honey cake cu vișine", price: 480 },
    { flavor: "Kinder milk slice", price: 450 },
    { flavor: "Nutella", price: 480 },
    { flavor: "Oreo", price: 480 },
    { flavor: "Pădurea Neagră", price: 480 },
    { flavor: "Red Velvet cu căpșuni", price: 480 },
    { flavor: "Snickers", price: 500 },
    { flavor: "Tropical", price: 500 },
    { flavor: "Vanilie - fructe de pădure", price: 480 }
  ],
  ru: [
    { flavor: "Банан - карамель", price: 450 },
    { flavor: "Carrot cake", price: 450 },
    { flavor: "Кокос - вишня", price: 450 },
    { flavor: "Кофе - фундук", price: 480 },
    { flavor: "Фисташка - малина", price: 520 },
    { flavor: "Honey cake classic", price: 450 },
    { flavor: "Honey cake с вишней", price: 480 },
    { flavor: "Kinder milk slice", price: 450 },
    { flavor: "Nutella", price: 480 },
    { flavor: "Oreo", price: 480 },
    { flavor: "Черный лес", price: 480 },
    { flavor: "Red Velvet с клубникой", price: 480 },
    { flavor: "Snickers", price: 500 },
    { flavor: "Tropical", price: 500 },
    { flavor: "Ваниль - лесные ягоды", price: 480 }
  ]
};

export const serviceFaq: Record<Locale, SeoFaq[]> = {
  ro: [
    {
      question: "Cum primesc un preț exact?",
      answer: "Trimite pe WhatsApp data evenimentului, numărul aproximativ de porții, gustul dorit și o poză de inspirație."
    },
    {
      question: "Faceți livrare în Chișinău?",
      answer: "Da, putem discuta livrarea în Chișinău în funcție de data evenimentului, zonă și tipul desertului."
    },
    {
      question: "Pot alege gustul tortului?",
      answer: "Da, lucrăm cu gusturi precum Banana-caramel, Fistic-zmeură, Honey cake, Red Velvet, Snickers, Oreo și alte compoziții."
    }
  ],
  ru: [
    {
      question: "Как получить точную цену?",
      answer: "Отправьте в WhatsApp дату события, примерное количество порций, желаемый вкус и фото для вдохновения."
    },
    {
      question: "Есть доставка по Кишиневу?",
      answer: "Да, доставку по Кишиневу можно обсудить с учетом даты события, района и типа десерта."
    },
    {
      question: "Можно выбрать вкус торта?",
      answer: "Да, доступны вкусы Banana-caramel, Фисташка-малина, Honey cake, Red Velvet, Snickers, Oreo и другие композиции."
    }
  ]
};

export const pricingFaq: Record<Locale, SeoFaq[]> = {
  ro: [
    {
      question: "Prețurile sunt per 1 kg?",
      answer: "Da, prețurile pentru gusturi sunt afișate per 1 kg. Decorul personalizat, figurinele, florile și livrarea se calculează separat."
    },
    {
      question: "Ce trebuie să trimit pentru ofertă?",
      answer: "O poză de inspirație, data evenimentului, numărul aproximativ de invitați, gustul dorit și detalii despre livrare sau ridicare."
    }
  ],
  ru: [
    {
      question: "Цены указаны за 1 кг?",
      answer: "Да, цены для вкусов указаны за 1 кг. Индивидуальный декор, фигурки, цветы и доставка рассчитываются отдельно."
    },
    {
      question: "Что отправить для расчета?",
      answer: "Фото для вдохновения, дату события, примерное количество гостей, желаемый вкус и детали доставки или самовывоза."
    }
  ]
};

export const galleryItems: Record<Locale, SeoGalleryItem[]> = {
  ro: [
    {
      title: "Tort luxury cu decor auriu",
      category: "Torturi luxury",
      description: "Tort statement pentru evenimente în Chișinău, cu volum, accente metalice și decor personalizat.",
      image: "/transparent/tort-luxury-auriu-carocakes.png",
      alt: "Tort luxury cu decor auriu creat de CaroCakes în Chișinău",
      tags: ["tort luxury", "tort personalizat", "Chișinău"],
      language: "ro"
    },
    {
      title: "Tort aniversar statement",
      category: "Torturi aniversare",
      description: "Design aniversar cu contrast, detalii premium și compoziție adaptată momentului.",
      image: "/transparent/tort-aniversar-statement-carocakes.png",
      alt: "Tort aniversar personalizat statement în Chișinău",
      tags: ["tort aniversar", "decor premium", "la comandă"],
      language: "ro"
    },
    {
      title: "Tort roz pentru copii",
      category: "Torturi pentru copii",
      description: "Decor delicat, flori roz și atmosferă caldă pentru aniversări de familie.",
      image: "/transparent/tort-roz-copii-carocakes.png",
      alt: "Tort pentru copii roz cu flori creat de CaroCakes",
      tags: ["tort copii", "aniversare", "roz"],
      language: "ro"
    },
    {
      title: "Tort pentru nuntă",
      category: "Torturi pentru nuntă",
      description: "Tort elegant pentru nuntă, cu flori delicate și proporții potrivite evenimentului.",
      image: "/transparent/torturi-nunta-carocakes.png",
      alt: "Tort elegant pentru nuntă în Chișinău cu decor floral",
      tags: ["tort nuntă", "flori", "elegant"],
      language: "ro"
    },
    {
      title: "Candy bar cu deserturi fine",
      category: "Candy bar",
      description: "Masă dulce cu macarons, cupcakes, prăjituri individuale și biscuiți fini pentru evenimente.",
      image: "/transparent/candy-bar-carocakes.png",
      alt: "Candy bar pentru evenimente în Chișinău cu deserturi fine",
      tags: ["candy bar", "macarons", "cupcakes"],
      language: "ro"
    }
  ],
  ru: [
    {
      title: "Luxury торт с золотым декором",
      category: "Luxury торты",
      description: "Эффектный торт для событий в Кишиневе с объемом, металлическими акцентами и индивидуальным декором.",
      image: "/transparent/tort-luxury-auriu-carocakes.png",
      alt: "Luxury торт с золотым декором от CaroCakes в Кишиневе",
      tags: ["luxury торт", "индивидуальный торт", "Кишинев"],
      language: "ru"
    },
    {
      title: "Торт на день рождения",
      category: "Торты на день рождения",
      description: "Контрастный праздничный дизайн с премиальными деталями и вкусом под событие.",
      image: "/transparent/tort-aniversar-statement-carocakes.png",
      alt: "Индивидуальный торт на день рождения в Кишиневе",
      tags: ["день рождения", "торт на заказ", "декор"],
      language: "ru"
    },
    {
      title: "Розовый детский торт",
      category: "Детские торты",
      description: "Нежный декор, розовые цветы и теплая атмосфера для семейного праздника.",
      image: "/transparent/tort-roz-copii-carocakes.png",
      alt: "Розовый детский торт с цветами от CaroCakes",
      tags: ["детский торт", "день рождения", "розовый"],
      language: "ru"
    },
    {
      title: "Свадебный торт",
      category: "Свадебные торты",
      description: "Элегантный свадебный торт с нежными цветами и пропорциями под стиль события.",
      image: "/transparent/torturi-nunta-carocakes.png",
      alt: "Элегантный свадебный торт в Кишиневе с цветочным декором",
      tags: ["свадебный торт", "цветы", "элегантный"],
      language: "ru"
    },
    {
      title: "Candy bar с десертами",
      category: "Candy bar",
      description: "Сладкий стол с макаронс, капкейками, индивидуальными десертами и печеньем для события.",
      image: "/transparent/candy-bar-carocakes.png",
      alt: "Candy bar в Кишиневе с макаронс и десертами",
      tags: ["candy bar", "макаронс", "капкейки"],
      language: "ru"
    }
  ]
};

export const blogArticles: Record<Locale, SeoArticle[]> = {
  ro: [
    {
      routeKey: "blog-cum-alegi-un-tort-personalizat-in-chisinau",
      title: "Cum alegi un tort personalizat în Chișinău",
      excerpt: "Ce detalii ajută atelierul să transforme inspirația într-un tort coerent, gustos și potrivit evenimentului.",
      publishedAt: "2026-05-31",
      modifiedAt: "2026-05-31",
      paragraphs: [
        "Un tort personalizat începe cu momentul pentru care este creat: aniversare, nuntă, botez sau eveniment privat. De aici se aleg stilul vizual, paleta de culori și nivelul de decor.",
        "Pentru o ofertă corectă, sunt utile data evenimentului, numărul aproximativ de porții, gustul preferat și o poză de inspirație. Aceste detalii ajută la calculul prețului și la estimarea timpului de lucru.",
        "La CaroCakes, designul se adaptează evenimentului, dar gustul rămâne la fel de important. Un tort reușit trebuie să arate elegant și să fie memorabil la servire."
      ],
      links: [
        { label: "Torturi personalizate", routeKey: "torturi-personalizate" },
        { label: "Prețuri torturi", routeKey: "preturi-torturi-la-comanda" }
      ]
    },
    {
      routeKey: "blog-cu-cat-timp-inainte-comanzi-un-tort",
      title: "Cu cât timp înainte comanzi un tort",
      excerpt: "De ce data evenimentului contează pentru disponibilitate, decor și livrare.",
      publishedAt: "2026-05-31",
      modifiedAt: "2026-05-31",
      paragraphs: [
        "Pentru torturile personalizate, timpul de pregătire depinde de complexitatea decorului și de perioada în care are loc evenimentul.",
        "Comenzile cu flori, figurine, decor 3D sau mai multe deserturi pentru candy bar au nevoie de planificare mai atentă.",
        "Dacă evenimentul este aproape, cel mai eficient este să trimiți pe WhatsApp data, inspirația și gustul dorit, ca să verificăm rapid disponibilitatea."
      ],
      links: [
        { label: "Torturi la comandă", routeKey: "torturi-la-comanda-chisinau" },
        { label: "Contact", routeKey: "contact" }
      ]
    },
    {
      routeKey: "blog-tort-pentru-copii-idei-design",
      title: "Tort pentru copii: idei de design",
      excerpt: "Idei pentru culori, teme, figurine și gusturi potrivite aniversărilor de copii.",
      publishedAt: "2026-05-31",
      modifiedAt: "2026-05-31",
      paragraphs: [
        "Pentru copii, tortul poate porni de la o culoare preferată, o poveste, un personaj sau o atmosferă de petrecere.",
        "Decorul trebuie să fie expresiv, dar echilibrat. Figurinele, florile și detaliile 3D se aleg în funcție de vârstă și de stilul mesei.",
        "Gusturile prietenoase pentru familie, cum ar fi Banana-caramel, Oreo sau Vanilie-fructe de pădure, sunt opțiuni bune pentru aniversări."
      ],
      links: [
        { label: "Torturi pentru copii", routeKey: "torturi-pentru-copii" },
        { label: "Galerie torturi", routeKey: "galerie" }
      ]
    },
    {
      routeKey: "blog-tort-de-nunta-chisinau-ghid",
      title: "Tort de nuntă în Chișinău: ghid de alegere",
      excerpt: "Cum alegi un tort de nuntă care arată elegant și se potrivește evenimentului.",
      publishedAt: "2026-05-31",
      modifiedAt: "2026-05-31",
      paragraphs: [
        "Tortul de nuntă trebuie să se integreze în stilul evenimentului: minimalist, floral, clasic, luxury sau modern.",
        "Înainte de ofertă, ajută să avem data nunții, numărul de invitați, paleta cromatică și câteva imagini de inspirație.",
        "Decorul floral, proporțiile și finisajele se stabilesc în funcție de locație, temă și momentul servirii."
      ],
      links: [
        { label: "Torturi pentru nuntă", routeKey: "torturi-nunta" },
        { label: "Prețuri torturi", routeKey: "preturi-torturi-la-comanda" }
      ]
    },
    {
      routeKey: "blog-candy-bar-pentru-botez",
      title: "Candy bar pentru botez",
      excerpt: "Cum combini macarons, cupcakes, prăjituri individuale și biscuiți fini într-un candy bar delicat.",
      publishedAt: "2026-05-31",
      modifiedAt: "2026-05-31",
      paragraphs: [
        "Un candy bar pentru botez arată cel mai bine când deserturile au aceeași direcție vizuală: culori delicate, forme fine și detalii discrete.",
        "Macarons, cupcakes, prăjituri individuale și biscuiți fini pot fi combinate pentru o masă echilibrată și ușor de servit.",
        "Pentru ofertă, sunt utile data evenimentului, numărul de invitați, culorile dorite și câteva referințe vizuale."
      ],
      links: [
        { label: "Candy bar Chișinău", routeKey: "candy-bar" },
        { label: "Torturi pentru botez", routeKey: "torturi-botez" }
      ]
    },
    {
      routeKey: "blog-gusturi-de-tort-pentru-evenimente",
      title: "Gusturi de tort pentru evenimente",
      excerpt: "Cum alegi gustul potrivit pentru invitați, sezon și tipul evenimentului.",
      publishedAt: "2026-05-31",
      modifiedAt: "2026-05-31",
      paragraphs: [
        "Gustul tortului trebuie ales în funcție de eveniment, sezon și preferințele invitaților. Pentru zile calde, compozițiile cu fructe pot fi mai ușoare.",
        "Pentru evenimente elegante, Fistic-zmeură, Red Velvet cu căpșuni sau Honey cake pot oferi un echilibru bun între gust și prezentare.",
        "Dacă nu știi ce să alegi, poți trimite câteva preferințe pe WhatsApp și îți recomandăm o direcție potrivită."
      ],
      links: [
        { label: "Torturi la comandă", routeKey: "torturi-la-comanda-chisinau" },
        { label: "Contact", routeKey: "contact" }
      ]
    }
  ],
  ru: [
    {
      routeKey: "blog-cum-alegi-un-tort-personalizat-in-chisinau",
      title: "Как выбрать торт на заказ в Кишиневе",
      excerpt: "Какие детали помогают превратить вдохновение в красивый и вкусный индивидуальный торт.",
      publishedAt: "2026-05-31",
      modifiedAt: "2026-05-31",
      paragraphs: [
        "Индивидуальный торт начинается с события: день рождения, свадьба, крещение или частный праздник. От этого зависят стиль, цвета и уровень декора.",
        "Для точного расчета полезны дата события, примерное количество порций, желаемый вкус и фото для вдохновения.",
        "В CaroCakes дизайн адаптируется под событие, но вкус остается не менее важным: торт должен быть красивым и запоминающимся."
      ],
      links: [
        { label: "Индивидуальные торты", routeKey: "torturi-personalizate" },
        { label: "Цены на торты", routeKey: "preturi-torturi-la-comanda" }
      ]
    },
    {
      routeKey: "blog-cu-cat-timp-inainte-comanzi-un-tort",
      title: "За сколько дней заказывать торт",
      excerpt: "Почему дата события важна для доступности, декора и доставки.",
      publishedAt: "2026-05-31",
      modifiedAt: "2026-05-31",
      paragraphs: [
        "Для индивидуальных тортов срок подготовки зависит от сложности декора и периода, в который проходит событие.",
        "Заказы с цветами, фигурками, 3D-декором или несколькими десертами для candy bar требуют более точного планирования.",
        "Если событие уже близко, отправьте дату, фото для вдохновения и желаемый вкус в WhatsApp, чтобы быстро проверить возможность заказа."
      ],
      links: [
        { label: "Торты на заказ", routeKey: "torturi-la-comanda-chisinau" },
        { label: "Контакт", routeKey: "contact" }
      ]
    },
    {
      routeKey: "blog-tort-pentru-copii-idei-design",
      title: "Детский торт: идеи дизайна",
      excerpt: "Идеи цветов, тем, фигурок и вкусов для детских дней рождения.",
      publishedAt: "2026-05-31",
      modifiedAt: "2026-05-31",
      paragraphs: [
        "Детский торт может начинаться с любимого цвета, истории, персонажа или атмосферы праздника.",
        "Декор должен быть выразительным, но аккуратным. Фигурки, цветы и 3D-детали выбираются по возрасту и стилю стола.",
        "Для семейных праздников хорошо подходят вкусы Banana-caramel, Oreo или Vanilie-fructe de pădure."
      ],
      links: [
        { label: "Детские торты", routeKey: "torturi-pentru-copii" },
        { label: "Галерея тортов", routeKey: "galerie" }
      ]
    },
    {
      routeKey: "blog-tort-de-nunta-chisinau-ghid",
      title: "Свадебный торт в Кишиневе: гид выбора",
      excerpt: "Как выбрать свадебный торт, который выглядит элегантно и подходит событию.",
      publishedAt: "2026-05-31",
      modifiedAt: "2026-05-31",
      paragraphs: [
        "Свадебный торт должен поддерживать стиль события: минималистичный, цветочный, классический, luxury или современный.",
        "Для расчета помогают дата свадьбы, количество гостей, цветовая палитра и несколько изображений для вдохновения.",
        "Цветочный декор, пропорции и отделка выбираются с учетом локации, темы и момента подачи."
      ],
      links: [
        { label: "Свадебные торты", routeKey: "torturi-nunta" },
        { label: "Цены на торты", routeKey: "preturi-torturi-la-comanda" }
      ]
    },
    {
      routeKey: "blog-candy-bar-pentru-botez",
      title: "Candy bar на крещение",
      excerpt: "Как объединить макаронс, капкейки, индивидуальные десерты и печенье в нежный candy bar.",
      publishedAt: "2026-05-31",
      modifiedAt: "2026-05-31",
      paragraphs: [
        "Candy bar на крещение лучше всего смотрится, когда все десерты объединены одной визуальной идеей: нежные цвета и аккуратные детали.",
        "Макаронс, капкейки, индивидуальные десерты и печенье можно сочетать для красивого и удобного сладкого стола.",
        "Для расчета полезны дата события, количество гостей, желаемые цвета и несколько визуальных примеров."
      ],
      links: [
        { label: "Candy bar в Кишиневе", routeKey: "candy-bar" },
        { label: "Торт на крещение", routeKey: "torturi-botez" }
      ]
    },
    {
      routeKey: "blog-gusturi-de-tort-pentru-evenimente",
      title: "Вкусы тортов для мероприятий",
      excerpt: "Как выбрать вкус под гостей, сезон и формат события.",
      publishedAt: "2026-05-31",
      modifiedAt: "2026-05-31",
      paragraphs: [
        "Вкус торта лучше выбирать с учетом события, сезона и предпочтений гостей. Для теплого времени фруктовые композиции могут быть легче.",
        "Для элегантных событий хорошо подходят Фисташка-малина, Red Velvet с клубникой или Honey cake.",
        "Если сложно выбрать, отправьте несколько предпочтений в WhatsApp, и мы подскажем подходящее направление."
      ],
      links: [
        { label: "Торты на заказ", routeKey: "torturi-la-comanda-chisinau" },
        { label: "Контакт", routeKey: "contact" }
      ]
    }
  ]
};

export function getArticle(locale: Locale, routeKey: RouteKey) {
  return blogArticles[locale].find((article) => article.routeKey === routeKey);
}

export function getFooterLinks(locale: Locale): SeoInternalLink[] {
  return [
    { label: locale === "ru" ? "Цены" : "Prețuri", routeKey: "preturi-torturi-la-comanda" },
    { label: locale === "ru" ? "Галерея" : "Galerie", routeKey: "galerie" },
    { label: locale === "ru" ? "Блог" : "Blog", routeKey: "blog" },
    { label: locale === "ru" ? "Контакт" : "Contact", routeKey: "contact" }
  ];
}
