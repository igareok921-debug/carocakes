export const locales = ["ro", "ru"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ro";

export const localeConfig: Record<Locale, { label: string; htmlLang: string; ogLocale: string; dateLocale: string }> = {
  ro: {
    label: "RO",
    htmlLang: "ro-MD",
    ogLocale: "ro_MD",
    dateLocale: "ro-MD"
  },
  ru: {
    label: "RU",
    htmlLang: "ru-MD",
    ogLocale: "ru_MD",
    dateLocale: "ru-MD"
  }
};

export const routeKeys = [
  "",
  "preturi-torturi-la-comanda",
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
  "biscuiti-fini",
  "galerie",
  "blog",
  "blog-cum-alegi-un-tort-personalizat-in-chisinau",
  "blog-cu-cat-timp-inainte-comanzi-un-tort",
  "blog-tort-pentru-copii-idei-design",
  "blog-tort-de-nunta-chisinau-ghid",
  "blog-candy-bar-pentru-botez",
  "blog-gusturi-de-tort-pentru-evenimente",
  "despre",
  "contact"
] as const;

export type RouteKey = (typeof routeKeys)[number];

type SeoRouteTranslation = {
  slug: string;
  title: string;
  description: string;
  heading: string;
  eyebrow: string;
  intro: string;
  serviceName: string;
  keywords: string[];
  priority: string;
};

export type Translation = {
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  seoRoutes: Record<RouteKey, SeoRouteTranslation>;
  navigation: {
    aria: string;
    homeAria: string;
    menuAria: string;
    links: Array<{ label: string; href: string }>;
    order: string;
  };
  language: {
    label: string;
    switchTo: Record<Locale, string>;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    orderCta: string;
    galleryCta: string;
    pills: string[];
    logoAlt: string;
    scrollAria: string;
  };
  signature: {
    eyebrow: string;
    title: string;
    intro: string;
    cardBadge: string;
    items: Array<{ title: string; description: string; image: string; alt: string }>;
  };
  dessertsSection: {
    eyebrow: string;
    title: string;
    items: Array<{ title: string; image: string; alt: string }>;
  };
  orderSteps: {
    eyebrow: string;
    title: string;
    description: string;
    steps: string[];
  };
  gallerySection: {
    eyebrow: string;
    title: string;
    intro: string;
    instagramCta: string;
    tiktokCta: string;
    cardBadge: string;
    items: Array<{ title: string; text: string; image: string; alt: string }>;
  };
  reels: {
    eyebrow: string;
    title: string;
    cardBadge: string;
    playAria: string;
    items: Array<{ title: string; text: string; image: string; alt: string; url: string }>;
  };
  reviews: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{ src: string; alt: string }>;
  };
  about: {
    eyebrow: string;
    title: string;
    scriptTitle: string;
    paragraphs: string[];
    tags: string[];
  };
  contact: {
    partner: {
      textBefore: string;
      linkText: string;
      logoAlt: string;
      bodyBefore: string;
      bodyAfter: string;
    };
    eyebrow: string;
    title: string;
    intro: string;
    instagramCta: string;
    tiktokCta: string;
  };
  form: {
    name: string;
    phone: string;
    eventDate: string;
    chooseEventDateAria: string;
    flavors: string;
    details: string;
    submit: string;
    whatsappIntro: string;
    whatsappDetailsTitle: string;
    fields: {
      name: string;
      phone: string;
      date: string;
      flavor: string;
      details: string;
    };
  };
  calendar: {
    months: string[];
    weekdays: string[];
    previousMonthAria: string;
    nextMonthAria: string;
  };
  chat: {
    title: string;
    subtitle: string;
    closeAria: string;
    openAria: string;
    sendAria: string;
    inputPlaceholder: string;
    typing: string;
    initialMessage: string;
    fallbackReply: string;
    errorReply: string;
    prompts: string[];
    quickQuestions: string[];
  };
  controls: {
    upAria: string;
    downAria: string;
    showCakeAria: string;
  };
  categoryPage: {
    backHomeAria: string;
    quoteCta: string;
    whatsappCta: string;
    galleryCta: string;
    panelEyebrow: string;
    panelTitle: string;
    panelText: string;
    benefits: string[];
    benefitText: string;
  };
};

const cakeFlavors = [
  "Banana - caramel",
  "Carrot cake",
  "Cocos - vișine",
  "Cafea - alune",
  "Fistic - zmeură",
  "Honey cake clasic",
  "Honey cake cu vișine",
  "Kinder milk slice",
  "Nutella",
  "Oreo",
  "Pădurea Neagră",
  "Red Velvet cu căpșuni",
  "Snickers",
  "Tropical",
  "Vanilie - fructe de pădure"
];

const ruCakeFlavors = [
  "Banana - caramel",
  "Carrot cake",
  "Cocos - vișine",
  "Cafea - alune",
  "Fistic - zmeură",
  "Honey cake clasic",
  "Honey cake cu vișine",
  "Kinder milk slice",
  "Nutella",
  "Oreo",
  "Pădurea Neagră",
  "Red Velvet cu căpșuni",
  "Snickers",
  "Tropical",
  "Vanilie - fructe de pădure"
];

export const translations: Record<Locale, Translation> = {
  ro: {
    meta: {
      title: "CaroCakes — Torturi personalizate la comandă în Chișinău",
      description:
        "Comandă torturi personalizate, torturi pentru nuntă, botez, aniversări, macarons, cupcakes și candy bar în Chișinău. CaroCakes creează deserturi elegante pentru momente speciale.",
      keywords: [
        "torturi la comandă Chișinău",
        "torturi personalizate Chișinău",
        "torturi pentru copii Chișinău",
        "torturi pentru nuntă Chișinău",
        "torturi pentru botez Chișinău",
        "candy bar Chișinău",
        "macarons Chișinău",
        "cupcakes Chișinău",
        "prăjituri individuale Chișinău",
        "torturi luxury Chișinău",
        "torturi minimaliste Chișinău",
        "torturi aniversare Chișinău",
        "torturi cu livrare Chișinău"
      ]
    },
    seoRoutes: {
      "": {
        slug: "",
        title: "CaroCakes — Torturi personalizate la comandă în Chișinău",
        description:
          "Comandă torturi personalizate, torturi pentru nuntă, botez, aniversări, macarons, cupcakes și candy bar în Chișinău. CaroCakes creează deserturi elegante pentru momente speciale.",
        heading: "Torturi personalizate la comandă în Chișinău",
        eyebrow: "CaroCakes Chișinău",
        intro: "Torturi pentru nuntă, botez, aniversări, candy bar și deserturi personalizate pentru momente care merită ținute minte.",
        serviceName: "Torturi personalizate",
        keywords: ["torturi la comandă Chișinău", "torturi personalizate Chișinău"],
        priority: "1.0"
      },
      "preturi-torturi-la-comanda": {
        slug: "preturi-torturi-la-comanda",
        title: "Prețuri torturi la comandă în Chișinău | CaroCakes",
        description:
          "Vezi prețurile per 1 kg pentru gusturile de tort CaroCakes și află cum se calculează oferta finală pentru torturi la comandă în Chișinău.",
        heading: "Prețuri pentru torturi la comandă în Chișinău",
        eyebrow: "Prețuri & ofertă",
        intro:
          "Prețurile de mai jos sunt pentru 1 kg, în funcție de gustul ales. Oferta finală se calculează după greutate, design, decor, data evenimentului și livrare.",
        serviceName: "Prețuri torturi la comandă",
        keywords: ["preț tort la comandă Chișinău", "prețuri torturi personalizate", "torturi la comandă Chișinău"],
        priority: "0.9"
      },
      "torturi-la-comanda-chisinau": {
        slug: "torturi-la-comanda-chisinau",
        title: "Torturi la comandă în Chișinău | CaroCakes",
        description:
          "Torturi la comandă în Chișinău pentru aniversări, nunți, botezuri și evenimente private. Gusturi echilibrate, design personalizat și livrare.",
        heading: "Torturi la comandă în Chișinău",
        eyebrow: "Comenzi personalizate",
        intro:
          "CaroCakes creează torturi la comandă în Chișinău pentru evenimente care au nevoie de gust memorabil, decor atent și prezentare elegantă.",
        serviceName: "Torturi la comandă",
        keywords: ["torturi la comandă Chișinău", "torturi cu livrare Chișinău", "torturi personalizate Chișinău"],
        priority: "0.95"
      },
      "torturi-personalizate": {
        slug: "torturi-personalizate",
        title: "Torturi personalizate la comandă în Chișinău | CaroCakes",
        description:
          "Alege un tort personalizat pentru aniversare, nuntă, botez sau eveniment special. CaroCakes creează torturi manuale cu design unic în Chișinău.",
        heading: "Torturi personalizate la comandă în Chișinău",
        eyebrow: "Design unic pentru evenimentul tău",
        intro: "CaroCakes creează torturi personalizate în Chișinău, cu gusturi echilibrate, decor atent și detalii adaptate momentului.",
        serviceName: "Torturi personalizate",
        keywords: ["torturi personalizate Chișinău", "torturi la comandă Chișinău", "torturi cu livrare Chișinău"],
        priority: "0.9"
      },
      "torturi-pentru-copii": {
        slug: "torturi-pentru-copii",
        title: "Torturi pentru copii în Chișinău | CaroCakes",
        description:
          "Torturi pentru copii la comandă în Chișinău, cu teme delicate, culori potrivite și gusturi iubite de familie.",
        heading: "Torturi pentru copii în Chișinău",
        eyebrow: "Aniversări pentru cei mici",
        intro:
          "Pregătim torturi pentru copii cu decor tematic, figurine, culori calde și compoziții adaptate vârstei și momentului.",
        serviceName: "Torturi pentru copii",
        keywords: ["torturi pentru copii Chișinău", "tort copii Chișinău", "torturi aniversare Chișinău"],
        priority: "0.88"
      },
      "torturi-aniversare": {
        slug: "torturi-aniversare",
        title: "Torturi aniversare în Chișinău | CaroCakes",
        description:
          "Torturi aniversare personalizate pentru copii și adulți în Chișinău. Alege gustul, tema și decorul potrivit pentru ziua specială.",
        heading: "Torturi aniversare personalizate în Chișinău",
        eyebrow: "Aniversări memorabile",
        intro: "Pregătim torturi aniversare pentru copii, familie și evenimente private, cu decor elegant sau tematic și compoziții create manual.",
        serviceName: "Torturi aniversare",
        keywords: ["torturi aniversare Chișinău", "torturi pentru copii Chișinău", "torturi la comandă Chișinău"],
        priority: "0.85"
      },
      "torturi-nunta": {
        slug: "torturi-nunta",
        title: "Torturi pentru nuntă în Chișinău | CaroCakes",
        description:
          "Torturi elegante pentru nuntă, create personalizat după stilul evenimentului. Design rafinat, detalii fine și gusturi echilibrate.",
        heading: "Torturi pentru nuntă în Chișinău",
        eyebrow: "Eleganță pentru ziua nunții",
        intro: "CaroCakes creează torturi pentru nuntă în Chișinău, cu proporții elegante, decor floral, accente fine și gust adaptat evenimentului.",
        serviceName: "Torturi pentru nuntă",
        keywords: ["torturi pentru nuntă Chișinău", "tort nunta Chișinău", "torturi personalizate Chișinău"],
        priority: "0.85"
      },
      "torturi-botez": {
        slug: "torturi-botez",
        title: "Torturi pentru botez în Chișinău | CaroCakes",
        description:
          "Torturi pentru botez create personalizat în Chișinău, cu decor delicat, gusturi fine și detalii potrivite pentru familie.",
        heading: "Torturi pentru botez în Chișinău",
        eyebrow: "Detalii delicate pentru familie",
        intro: "Realizăm torturi pentru botez cu decor fin, palete calde și compoziții potrivite pentru un eveniment de familie.",
        serviceName: "Torturi pentru botez",
        keywords: ["torturi pentru botez Chișinău", "tort botez Chișinău", "torturi personalizate Chișinău"],
        priority: "0.85"
      },
      "torturi-minimaliste": {
        slug: "torturi-minimaliste",
        title: "Torturi minimaliste în Chișinău | CaroCakes",
        description:
          "Torturi minimaliste la comandă în Chișinău, cu design curat, culori elegante și gusturi echilibrate pentru evenimente moderne.",
        heading: "Torturi minimaliste la comandă în Chișinău",
        eyebrow: "Design curat și rafinat",
        intro: "Pentru evenimente moderne, CaroCakes creează torturi minimaliste cu forme curate, decor discret și gust memorabil.",
        serviceName: "Torturi minimaliste",
        keywords: ["torturi minimaliste Chișinău", "torturi la comandă Chișinău", "torturi elegante Chișinău"],
        priority: "0.8"
      },
      "torturi-luxury": {
        slug: "torturi-luxury",
        title: "Torturi luxury în Chișinău | CaroCakes",
        description:
          "Torturi luxury pentru evenimente speciale în Chișinău. Decor spectaculos, accente premium și design personalizat CaroCakes.",
        heading: "Torturi luxury pentru evenimente în Chișinău",
        eyebrow: "Accente premium",
        intro: "CaroCakes creează torturi luxury cu volum, accente metalice, flori, texturi elegante și compoziții gândite pentru evenimente speciale.",
        serviceName: "Torturi luxury",
        keywords: ["torturi luxury Chișinău", "torturi premium Chișinău", "torturi personalizate Chișinău"],
        priority: "0.8"
      },
      "candy-bar": {
        slug: "candy-bar-chisinau",
        title: "Candy bar pentru evenimente în Chișinău | CaroCakes",
        description:
          "Candy bar elegant pentru nunți, botezuri, aniversări și evenimente speciale. Macarons, cupcakes, prăjituri individuale și biscuiți fini.",
        heading: "Candy bar pentru evenimente în Chișinău",
        eyebrow: "Deserturi pentru masă elegantă",
        intro: "Pregătim candy bar în Chișinău pentru nunți, botezuri și aniversări, cu deserturi care arată bine împreună și se potrivesc temei.",
        serviceName: "Candy bar",
        keywords: ["candy bar Chișinău", "deserturi pentru evenimente Chișinău", "candy bar Moldova"],
        priority: "0.85"
      },
      macarons: {
        slug: "macarons",
        title: "Macarons în Chișinău | CaroCakes",
        description:
          "Macarons fine pentru cadouri, candy bar și evenimente în Chișinău. Culori delicate, texturi echilibrate și prezentare elegantă.",
        heading: "Macarons pentru evenimente în Chișinău",
        eyebrow: "Deserturi delicate",
        intro: "Macarons CaroCakes sunt pregătite pentru candy bar, cadouri dulci și mese de eveniment, cu nuanțe și gusturi potrivite temei.",
        serviceName: "Macarons",
        keywords: ["macarons Chișinău", "macarons la comandă Chișinău", "candy bar Chișinău"],
        priority: "0.75"
      },
      cupcakes: {
        slug: "cupcakes",
        title: "Cupcakes în Chișinău | CaroCakes",
        description:
          "Cupcakes personalizate pentru aniversări, botezuri, nunți și candy bar în Chișinău. Decor elegant și gusturi fine.",
        heading: "Cupcakes personalizate în Chișinău",
        eyebrow: "Porții dulci pentru invitați",
        intro: "Cupcakes create manual pentru candy bar, petreceri și evenimente în Chișinău, cu decor adaptat culorilor și stilului ales.",
        serviceName: "Cupcakes",
        keywords: ["cupcakes Chișinău", "cupcakes personalizate Chișinău", "candy bar Chișinău"],
        priority: "0.75"
      },
      "prajituri-individuale": {
        slug: "prajituri-individuale",
        title: "Prăjituri individuale în Chișinău | CaroCakes",
        description:
          "Prăjituri individuale pentru evenimente, candy bar și cadouri dulci în Chișinău. Deserturi elegante, create manual.",
        heading: "Prăjituri individuale pentru evenimente în Chișinău",
        eyebrow: "Deserturi fine, porții elegante",
        intro: "CaroCakes pregătește prăjituri individuale pentru evenimente în Chișinău, potrivite pentru candy bar, mese festive și momente de familie.",
        serviceName: "Prăjituri individuale",
        keywords: ["prăjituri individuale Chișinău", "deserturi la comandă Chișinău", "candy bar Chișinău"],
        priority: "0.75"
      },
      "biscuiti-fini": {
        slug: "biscuiti-fini",
        title: "Biscuiți fini în Chișinău | CaroCakes",
        description:
          "Biscuiți fini pentru candy bar, cadouri și evenimente în Chișinău. Deserturi delicate cu prezentare elegantă.",
        heading: "Biscuiți fini pentru evenimente în Chișinău",
        eyebrow: "Detalii dulci pentru masă",
        intro: "Biscuiții fini CaroCakes completează un candy bar elegant sau un cadou dulce, cu forme, culori și gusturi potrivite evenimentului.",
        serviceName: "Biscuiți fini",
        keywords: ["biscuiți fini Chișinău", "biscuiți la comandă Chișinău", "candy bar Chișinău"],
        priority: "0.75"
      },
      galerie: {
        slug: "galerie-torturi",
        title: "Galerie torturi personalizate în Chișinău | CaroCakes",
        description:
          "Vezi galeria CaroCakes cu torturi personalizate, torturi aniversare, torturi pentru nuntă, botez și deserturi pentru evenimente.",
        heading: "Galerie CaroCakes",
        eyebrow: "Inspirație pentru comandă",
        intro: "Explorează idei de torturi personalizate și deserturi create pentru evenimente în Chișinău și Moldova.",
        serviceName: "Galerie torturi personalizate",
        keywords: ["galerie torturi Chișinău", "torturi personalizate Chișinău"],
        priority: "0.7"
      },
      blog: {
        slug: "blog",
        title: "Blog CaroCakes | Ghiduri pentru torturi și candy bar în Chișinău",
        description:
          "Ghiduri utile despre torturi personalizate, torturi pentru copii, torturi de nuntă, candy bar și gusturi potrivite pentru evenimente.",
        heading: "Blog CaroCakes",
        eyebrow: "Ghiduri pentru comandă",
        intro: "Articole scurte și utile pentru a alege mai ușor tortul, gustul, decorul și momentul potrivit pentru comandă.",
        serviceName: "Blog torturi și deserturi",
        keywords: ["blog torturi Chișinău", "ghid torturi la comandă", "CaroCakes blog"],
        priority: "0.65"
      },
      "blog-cum-alegi-un-tort-personalizat-in-chisinau": {
        slug: "blog/cum-alegi-un-tort-personalizat-in-chisinau",
        title: "Cum alegi un tort personalizat în Chișinău | CaroCakes",
        description:
          "Ghid practic pentru alegerea unui tort personalizat în Chișinău: gust, design, mărime, temă și detalii pentru ofertă.",
        heading: "Cum alegi un tort personalizat în Chișinău",
        eyebrow: "Ghid CaroCakes",
        intro: "Alegerea unui tort personalizat devine mai simplă când știi ce detalii contează pentru gust, design și organizare.",
        serviceName: "Ghid tort personalizat",
        keywords: ["cum alegi un tort personalizat", "torturi personalizate Chișinău", "torturi la comandă Chișinău"],
        priority: "0.62"
      },
      "blog-cu-cat-timp-inainte-comanzi-un-tort": {
        slug: "blog/cu-cat-timp-inainte-comanzi-un-tort",
        title: "Cu cât timp înainte comanzi un tort | CaroCakes",
        description:
          "Află când este bine să comanzi un tort personalizat pentru aniversare, nuntă, botez sau candy bar în Chișinău.",
        heading: "Cu cât timp înainte comanzi un tort",
        eyebrow: "Planificare comandă",
        intro: "Data evenimentului influențează disponibilitatea, complexitatea decorului și organizarea livrării.",
        serviceName: "Planificare tort la comandă",
        keywords: ["cu cât timp înainte comand tort", "tort la comandă Chișinău", "comandă tort Chișinău"],
        priority: "0.62"
      },
      "blog-tort-pentru-copii-idei-design": {
        slug: "blog/tort-pentru-copii-idei-design",
        title: "Tort pentru copii: idei de design | CaroCakes",
        description:
          "Idei de design pentru torturi pentru copii în Chișinău: culori, figurine, decor tematic și gusturi potrivite pentru aniversări.",
        heading: "Tort pentru copii: idei de design",
        eyebrow: "Idei pentru aniversări",
        intro: "Un tort pentru copii trebuie să fie vesel, sigur ca stil vizual și potrivit cu atmosfera aniversării.",
        serviceName: "Idei torturi pentru copii",
        keywords: ["tort pentru copii idei", "torturi pentru copii Chișinău", "torturi aniversare Chișinău"],
        priority: "0.62"
      },
      "blog-tort-de-nunta-chisinau-ghid": {
        slug: "blog/tort-de-nunta-chisinau-ghid",
        title: "Tort de nuntă în Chișinău: ghid de alegere | CaroCakes",
        description:
          "Ghid pentru alegerea unui tort de nuntă în Chișinău: stil, decor, proporții, gust și detalii care ajută oferta.",
        heading: "Tort de nuntă în Chișinău: ghid de alegere",
        eyebrow: "Ghid pentru nuntă",
        intro: "Tortul de nuntă trebuie să susțină estetica evenimentului și să rămână memorabil pentru invitați.",
        serviceName: "Ghid tort de nuntă",
        keywords: ["tort de nuntă Chișinău", "torturi pentru nuntă Chișinău", "tort nuntă ghid"],
        priority: "0.62"
      },
      "blog-candy-bar-pentru-botez": {
        slug: "blog/candy-bar-pentru-botez",
        title: "Candy bar pentru botez în Chișinău | CaroCakes",
        description:
          "Cum alegi un candy bar pentru botez: macarons, cupcakes, prăjituri individuale, biscuiți fini și culori delicate.",
        heading: "Candy bar pentru botez",
        eyebrow: "Ghid pentru familie",
        intro: "Un candy bar pentru botez trebuie să fie delicat, coerent vizual și ușor de servit pentru invitați.",
        serviceName: "Ghid candy bar botez",
        keywords: ["candy bar pentru botez", "candy bar Chișinău", "deserturi botez Chișinău"],
        priority: "0.62"
      },
      "blog-gusturi-de-tort-pentru-evenimente": {
        slug: "blog/gusturi-de-tort-pentru-evenimente",
        title: "Gusturi de tort pentru evenimente | CaroCakes",
        description:
          "Ghid despre gusturi de tort pentru evenimente: banana-caramel, fistic-zmeură, Red Velvet, Oreo, Snickers și alte compoziții.",
        heading: "Gusturi de tort pentru evenimente",
        eyebrow: "Ghid de gusturi",
        intro: "Gustul potrivit depinde de sezon, tipul evenimentului și preferințele invitaților.",
        serviceName: "Ghid gusturi de tort",
        keywords: ["gusturi de tort", "gusturi tort evenimente", "torturi la comandă Chișinău"],
        priority: "0.62"
      },
      despre: {
        slug: "despre",
        title: "Despre CaroCakes | Atelier de torturi personalizate în Chișinău",
        description:
          "Află povestea CaroCakes, atelier de torturi personalizate și deserturi pentru evenimente în Chișinău și Moldova.",
        heading: "Despre CaroCakes",
        eyebrow: "Atelier de deserturi personalizate",
        intro: "CaroCakes transformă deserturile în amintiri prin torturi, macarons, cupcakes, prăjituri individuale și candy baruri create cu grijă.",
        serviceName: "Atelier de torturi personalizate",
        keywords: ["atelier de torturi personalizate", "CaroCakes Chișinău"],
        priority: "0.65"
      },
      contact: {
        slug: "contact",
        title: "Contact CaroCakes | Comandă tort în Chișinău",
        description:
          "Contactează CaroCakes pentru torturi personalizate, candy bar, macarons, cupcakes și deserturi la comandă în Chișinău.",
        heading: "Comandă tortul pentru momentul tău",
        eyebrow: "Contact / comandă",
        intro: "Trimite detaliile evenimentului și discutăm pe WhatsApp despre gust, design, data evenimentului și livrare în Chișinău.",
        serviceName: "Comenzi torturi și deserturi",
        keywords: ["comandă tort Chișinău", "torturi cu livrare Chișinău", "CaroCakes contact"],
        priority: "0.75"
      }
    },
    navigation: {
      aria: "Navigare principală",
      homeAria: "CaroCakes acasă",
      menuAria: "Meniu",
      links: [
        { label: "Torturi", href: "#signature" },
        { label: "Prețuri", href: "/ro/preturi-torturi-la-comanda" },
        { label: "Galerie", href: "#galerie" },
        { label: "Blog", href: "/ro/blog" },
        { label: "Despre", href: "#despre" },
        { label: "Contact", href: "#contact" }
      ],
      order: "Comandă"
    },
    language: {
      label: "Limbă",
      switchTo: {
        ro: "Schimbă în română",
        ru: "Schimbă în rusă"
      }
    },
    hero: {
      eyebrow: "atelier de torturi personalizate",
      title: "Torturi personalizate la comandă în Chișinău",
      subtitle:
        "CaroCakes creează torturi pentru nuntă, botez, aniversări, candy bar și deserturi personalizate pentru momente care merită ținute minte.",
      orderCta: "Comandă un tort",
      galleryCta: "Vezi galeria",
      pills: ["Personalizat", "Luxury", "Livrare"],
      logoAlt: "Logo CaroCakes",
      scrollAria: "Mergi la torturi personalizate"
    },
    signature: {
      eyebrow: "Torturi personalizate",
      title: "Torturi create pentru emoția momentului",
      intro: "Transformăm ideea ta într-un tort la comandă în Chișinău, cu texturi fine, gust echilibrat și detalii couture.",
      cardBadge: "CaroCakes atelier",
      items: [
        {
          title: "Torturi aniversare",
          description: "Create pentru momente de bucurie, cu design personalizat și gusturi care aduc oamenii împreună.",
          image: "/transparent/torturi-aniversare-carocakes.png",
          alt: "Tort aniversar personalizat creat de CaroCakes în Chișinău"
        },
        {
          title: "Torturi pentru nuntă",
          description: "Eleganță, rafinament și detalii atent alese pentru una dintre cele mai importante zile din viață.",
          image: "/transparent/torturi-nunta-carocakes.png",
          alt: "Tort elegant pentru nuntă în Chișinău cu flori delicate"
        },
        {
          title: "Torturi pentru botez",
          description: "Delicate și pline de emoție, realizate pentru primele amintiri ale celor mici.",
          image: "/transparent/torturi-botez-carocakes.png",
          alt: "Tort pentru botez personalizat în Chișinău"
        },
        {
          title: "Torturi personalizate",
          description: "Fiecare tort este conceput de la zero pentru povestea, stilul și preferințele tale.",
          image: "/transparent/torturi-personalizate-carocakes.png",
          alt: "Tort personalizat la comandă în Chișinău"
        },
        {
          title: "Torturi minimaliste",
          description: "Linii curate, detalii discrete și un design modern care impresionează prin simplitate.",
          image: "/transparent/torturi-minimaliste-carocakes.png",
          alt: "Tort minimalist la comandă creat de CaroCakes"
        },
        {
          title: "Torturi luxury",
          description: "Piese de colecție comestibile, create pentru evenimente exclusiviste și apariții spectaculoase.",
          image: "/transparent/torturi-luxury-carocakes.png",
          alt: "Tort luxury pentru eveniment special în Chișinău"
        }
      ]
    },
    dessertsSection: {
      eyebrow: "Deserturi & prăjituri",
      title: "Candy bar și deserturi pentru evenimente în Chișinău",
      items: [
        { title: "Macarons", image: "/transparent/macarons-carocakes.png", alt: "Macarons pentru candy bar și evenimente în Chișinău" },
        { title: "Cupcakes", image: "/transparent/cupcakes-carocakes.png", alt: "Cupcakes personalizate pentru evenimente în Chișinău" },
        { title: "Prăjituri individuale", image: "/transparent/prajituri-individuale-carocakes.png", alt: "Prăjituri individuale elegante pentru candy bar în Chișinău" },
        { title: "Biscuiți fini", image: "/transparent/biscuiti-fini-carocakes.png", alt: "Biscuiți fini pentru candy bar și cadouri dulci" },
        { title: "Candy bar", image: "/transparent/candy-bar-carocakes.png", alt: "Candy bar cu macarons și prăjituri individuale pentru eveniment" }
      ]
    },
    orderSteps: {
      eyebrow: "Experiența de comandă",
      title: "Cum comanzi un tort personalizat",
      description: "Fiecare detaliu este creat pentru emoția momentului, de la prima schiță până la livrare în Chișinău.",
      steps: ["Ne scrii ideea", "Alegem gustul și designul", "Creăm desertul", "Îl livrăm pentru momentul tău special"]
    },
    gallerySection: {
      eyebrow: "Galerie imersivă",
      title: "Galerie CaroCakes",
      intro: "Torturi personalizate, deserturi pentru evenimente și idei de candy bar create în Chișinău.",
      instagramCta: "Poze pe Instagram",
      tiktokCta: "Video pe TikTok",
      cardBadge: "CaroCakes",
      items: [
        { title: "Money cake couture", text: "Ciocolată, aur și detalii spectaculoase", image: "/transparent/tort-luxury-auriu-carocakes.png", alt: "Tort luxury la comandă cu decor de ciocolată și aur" },
        { title: "Birthday statement", text: "Volum, contrast și accente metalice", image: "/transparent/tort-aniversar-statement-carocakes.png", alt: "Tort aniversar statement cu decor personalizat" },
        { title: "Blush celebration", text: "Roz delicat pentru momente tandre", image: "/transparent/tort-roz-copii-carocakes.png", alt: "Tort roz cu flori pentru aniversare în Chișinău" },
        { title: "Fairy garden", text: "Flori fine și decor de poveste", image: "/transparent/tort-fairy-garden-carocakes.png", alt: "Tort personalizat cu decor floral de poveste" },
        { title: "Candy concept", text: "Creat pentru evenimentul tău", image: "/transparent/tort-candy-concept-carocakes.png", alt: "Tort personalizat pentru copii și evenimente de familie" }
      ]
    },
    reels: {
      eyebrow: "Reels din atelier",
      title: "Reels CaroCakes din atelier",
      cardBadge: "CaroCakes reel",
      playAria: "Deschide reel pe Instagram",
      items: [
        {
          title: "Choux au craquelin",
          text: "Cu creme patissiere, textură crocantă și cremă fină pregătită în atelier.",
          image: "/transparent/choux-craquelin-carocakes.png",
          alt: "Choux au craquelin cu creme patissiere pregătit de CaroCakes",
          url: "https://www.instagram.com/reel/DYj-8X6IPlo/"
        },
        {
          title: "Procesul de pregătire unui tort",
          text: "Etape din atelier, de la detalii fine până la forma finală.",
          image: "/transparent/proces-pregatire-tort-carocakes.png",
          alt: "Procesul de pregătire a unui tort personalizat CaroCakes",
          url: "https://www.instagram.com/reel/DYT4hdHoIeq/"
        },
        {
          title: "Macarons cube",
          text: "Macarons aranjate elegant pentru un cadou dulce și memorabil.",
          image: "/transparent/macarons-cube-carocakes.png",
          alt: "Macarons cube pentru cadou dulce și candy bar",
          url: "https://www.instagram.com/reel/DVQ4YCkiLsc/"
        }
      ]
    },
    reviews: {
      eyebrow: "Recenzii",
      title: "Recenzii de la clienți",
      intro: "Câteva reacții primite după torturi și deserturi create pentru aniversări, botezuri, nunți și momente de familie.",
      items: [
        { src: "/Recenzie1.jpeg", alt: "Recenzie client pentru tort personalizat CaroCakes" },
        { src: "/recenzie2.jpeg", alt: "Mesaj de mulțumire de la client CaroCakes" },
        { src: "/recenzie 3.jpeg", alt: "Feedback client pentru deserturi CaroCakes în Chișinău" },
        { src: "/recenzie4.jpeg", alt: "Recenzie reală de la client CaroCakes" }
      ]
    },
    about: {
      eyebrow: "Despre CaroCakes",
      title: "Despre CaroCakes",
      scriptTitle: "povestea CaroCakes",
      paragraphs: [
        "CaroCakes a pornit din dorința de a transforma deserturile în amintiri. În atelierul nostru de torturi personalizate pentru Chișinău și Moldova, fiecare tort personalizat, fiecare macaron, cupcake, prăjitură individuală sau biscuit fin este creat cu răbdare, gust echilibrat și detalii care se potrivesc momentului.",
        "Pregătim candy baruri pentru nunți, botezuri, aniversări și evenimente speciale în Chișinău, cu deserturi care arată elegant pe masă și rămân în memoria invitaților. Stilul CaroCakes combină atenția pentru detalii cu emoția deserturilor făcute pentru oameni reali și povești personale."
      ],
      tags: ["Torturi personalizate", "Macarons", "Cupcakes", "Prăjituri individuale", "Biscuiți fini", "Candy bar"]
    },
    contact: {
      partner: {
        textBefore: "În parteneriat cu echipa",
        linkText: "vilmgroup.md",
        logoAlt: "Logo Vilm Group",
        bodyBefore: "CaroCakes și",
        bodyAfter:
          "lucrează împreună pentru ca fiecare comandă să fie simplă, atent organizată și aproape de ceea ce îți dorești. Tu vii cu momentul, noi avem grijă de detalii."
      },
      eyebrow: "Contact / comandă",
      title: "Comandă tortul pentru momentul tău",
      intro: "Spune-ne evenimentul, stilul și emoția pe care vrei să o transmiți. Noi o transformăm într-un tort memorabil, cu opțiuni de livrare în Chișinău.",
      instagramCta: "Vezi Instagram",
      tiktokCta: "Vezi TikTok"
    },
    form: {
      name: "Nume",
      phone: "Telefon",
      eventDate: "Data evenimentului",
      chooseEventDateAria: "Alege data evenimentului",
      flavors: "Gusturi de tort",
      details: "Detalii despre design, temă, culori sau livrare",
      submit: "Trimite cererea pe WhatsApp",
      whatsappIntro: "Bună! Aș vrea să comand un tort personalizat de la CaroCakes.",
      whatsappDetailsTitle: "Detalii comandă:",
      fields: {
        name: "Nume",
        phone: "Telefon",
        date: "Data evenimentului",
        flavor: "Gust ales",
        details: "Detalii"
      }
    },
    calendar: {
      months: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
      weekdays: ["Lu", "Ma", "Mi", "Jo", "Vi", "Sâ", "Du"],
      previousMonthAria: "Luna precedentă",
      nextMonthAria: "Luna următoare"
    },
    chat: {
      title: "Caro AI",
      subtitle: "Asistent pentru comenzi",
      closeAria: "Închide agentul Caro",
      openAria: "Deschide agentul Caro",
      sendAria: "Trimite mesaj",
      inputPlaceholder: "Scrie întrebarea ta...",
      typing: "Caro scrie...",
      initialMessage: "Bună! Mă numesc Caro și sunt aici să vă ajut. Îți pot recomanda gusturi, stiluri de tort, pașii pentru comandă și să îți explic cum variază prețul.",
      fallbackReply: "Pot să te ajut să alegi gustul, designul, pașii pentru comandă și să îți explic cum se calculează prețul.",
      errorReply: "Momentan nu pot răspunde automat, dar poți completa formularul și mesajul ajunge direct pe WhatsApp.",
      prompts: ["Bună, sunt Caro.", "Ai nevoie de ajutor?", "Te ajut să alegi gustul.", "Îți explic cum se calculează prețul."],
      quickQuestions: ["Prețuri per 1 kg", "Ce gust recomanzi?", "Vreau tort pentru nuntă"]
    },
    controls: {
      upAria: "Mergi la secțiunea de sus",
      downAria: "Mergi la secțiunea de jos",
      showCakeAria: "Arată"
    },
    categoryPage: {
      backHomeAria: "CaroCakes acasă",
      quoteCta: "Cere ofertă",
      whatsappCta: "Cere ofertă pe WhatsApp",
      galleryCta: "Vezi galeria",
      panelEyebrow: "CaroCakes",
      panelTitle: "Deserturi create manual pentru evenimente în Moldova",
      panelText:
        "Discutăm gustul, data evenimentului, stilul vizual, culorile și detaliile de livrare în Chișinău. Pentru preț exact, trimite cererea pe WhatsApp cu câteva detalii despre eveniment.",
      benefits: ["Design personalizat", "Gusturi echilibrate", "Livrare în Chișinău"],
      benefitText: "Fiecare comandă este adaptată momentului, de la prima idee până la prezentarea finală."
    }
  },
  ru: {
    meta: {
      title: "CaroCakes — Торты на заказ в Кишиневе",
      description:
        "Закажите индивидуальные торты, свадебные торты, торты на день рождения, макаронс, капкейки и кенди-бар в Кишиневе. CaroCakes создает десерты для особенных моментов.",
      keywords: [
        "торты на заказ в Кишиневе",
        "индивидуальные торты",
        "свадебные торты",
        "торт на день рождения",
        "торт на крещение",
        "детские торты",
        "кенди бар в Кишиневе",
        "макаронс",
        "капкейки",
        "десерты на заказ",
        "доставка тортов по Кишиневу"
      ]
    },
    seoRoutes: {
      "": {
        slug: "",
        title: "CaroCakes — Торты на заказ в Кишиневе",
        description:
          "Закажите индивидуальные торты, свадебные торты, торты на день рождения, макаронс, капкейки и кенди-бар в Кишиневе. CaroCakes создает десерты для особенных моментов.",
        heading: "Торты на заказ в Кишиневе",
        eyebrow: "CaroCakes Кишинев",
        intro: "Индивидуальные торты для свадьбы, крещения, дня рождения, кенди-бар и десерты на заказ для моментов, которые хочется запомнить.",
        serviceName: "Торты на заказ",
        keywords: ["торты на заказ в Кишиневе", "индивидуальные торты"],
        priority: "1.0"
      },
      "preturi-torturi-la-comanda": {
        slug: "tseny-na-torty",
        title: "Цены на торты на заказ в Кишиневе | CaroCakes",
        description:
          "Посмотрите цены за 1 кг для вкусов CaroCakes и узнайте, как рассчитывается итоговая стоимость торта на заказ в Кишиневе.",
        heading: "Цены на торты на заказ в Кишиневе",
        eyebrow: "Цены & расчет",
        intro:
          "Цены ниже указаны за 1 кг и зависят от выбранного вкуса. Итоговая стоимость рассчитывается по весу, дизайну, декору, дате события и доставке.",
        serviceName: "Цены на торты на заказ",
        keywords: ["цены на торты Кишинев", "торты на заказ в Кишиневе", "индивидуальные торты"],
        priority: "0.9"
      },
      "torturi-la-comanda-chisinau": {
        slug: "torty-na-zakaz-v-kishineve",
        title: "Торты на заказ в Кишиневе | CaroCakes",
        description:
          "Торты на заказ в Кишиневе для дней рождения, свадеб, крещений и частных событий. Индивидуальный дизайн, вкус и доставка.",
        heading: "Торты на заказ в Кишиневе",
        eyebrow: "Индивидуальные заказы",
        intro:
          "CaroCakes создает торты на заказ в Кишиневе для событий, где важны вкус, аккуратный декор и элегантная подача.",
        serviceName: "Торты на заказ",
        keywords: ["торты на заказ в Кишиневе", "доставка тортов по Кишиневу", "индивидуальные торты"],
        priority: "0.95"
      },
      "torturi-personalizate": {
        slug: "individualnye-torty",
        title: "Индивидуальные торты на заказ в Кишиневе | CaroCakes",
        description:
          "Закажите индивидуальный торт для дня рождения, свадьбы, крещения или особого события. CaroCakes создает торты ручной работы в Кишиневе.",
        heading: "Индивидуальные торты на заказ в Кишиневе",
        eyebrow: "Уникальный дизайн для вашего события",
        intro: "CaroCakes создает индивидуальные торты в Кишиневе с гармоничным вкусом, аккуратным декором и деталями под ваш момент.",
        serviceName: "Индивидуальные торты",
        keywords: ["индивидуальные торты", "торты на заказ в Кишиневе", "доставка тортов по Кишиневу"],
        priority: "0.9"
      },
      "torturi-pentru-copii": {
        slug: "detskie-torty",
        title: "Детские торты в Кишиневе | CaroCakes",
        description:
          "Детские торты на заказ в Кишиневе с нежными темами, подходящими цветами, фигурками и вкусами для семейного праздника.",
        heading: "Детские торты в Кишиневе",
        eyebrow: "Праздники для детей",
        intro:
          "Готовим детские торты с тематическим декором, фигурками, теплыми цветами и вкусами, подходящими возрасту и событию.",
        serviceName: "Детские торты",
        keywords: ["детские торты", "детский торт Кишинев", "торт на день рождения"],
        priority: "0.88"
      },
      "torturi-aniversare": {
        slug: "torty-na-den-rozhdeniya",
        title: "Торт на день рождения в Кишиневе | CaroCakes",
        description:
          "Торты на день рождения для детей и взрослых в Кишиневе. Выберите вкус, тему и декор для особенного праздника.",
        heading: "Торты на день рождения в Кишиневе",
        eyebrow: "Праздники, которые запоминаются",
        intro: "Готовим торты на день рождения для детей, семьи и частных событий с элегантным или тематическим декором.",
        serviceName: "Торт на день рождения",
        keywords: ["торт на день рождения", "детские торты", "торты на заказ в Кишиневе"],
        priority: "0.85"
      },
      "torturi-nunta": {
        slug: "svadebnye-torty",
        title: "Свадебные торты в Кишиневе | CaroCakes",
        description:
          "Элегантные свадебные торты, созданные под стиль события. Изысканный дизайн, тонкие детали и сбалансированные вкусы.",
        heading: "Свадебные торты в Кишиневе",
        eyebrow: "Элегантность для дня свадьбы",
        intro: "CaroCakes создает свадебные торты в Кишиневе с изящными пропорциями, цветочным декором и вкусом, подходящим событию.",
        serviceName: "Свадебные торты",
        keywords: ["свадебные торты", "торт на свадьбу Кишинев", "индивидуальные торты"],
        priority: "0.85"
      },
      "torturi-botez": {
        slug: "tort-na-kreshchenie",
        title: "Торт на крещение в Кишиневе | CaroCakes",
        description:
          "Торты на крещение в Кишиневе с нежным декором, мягкими оттенками и вкусами для семейного события.",
        heading: "Торты на крещение в Кишиневе",
        eyebrow: "Нежные детали для семьи",
        intro: "Создаем торты на крещение с деликатным декором, теплыми палитрами и композициями для семейного праздника.",
        serviceName: "Торт на крещение",
        keywords: ["торт на крещение", "торты на заказ в Кишиневе", "индивидуальные торты"],
        priority: "0.85"
      },
      "torturi-minimaliste": {
        slug: "minimalistichnye-torty",
        title: "Минималистичные торты в Кишиневе | CaroCakes",
        description:
          "Минималистичные торты на заказ в Кишиневе с чистым дизайном, элегантными цветами и сбалансированными вкусами.",
        heading: "Минималистичные торты на заказ в Кишиневе",
        eyebrow: "Чистый и утонченный дизайн",
        intro: "Для современных событий CaroCakes создает минималистичные торты с аккуратными формами, сдержанным декором и запоминающимся вкусом.",
        serviceName: "Минималистичные торты",
        keywords: ["минималистичные торты", "торты на заказ в Кишиневе", "индивидуальные торты"],
        priority: "0.8"
      },
      "torturi-luxury": {
        slug: "luxury-torty",
        title: "Luxury торты в Кишиневе | CaroCakes",
        description:
          "Luxury торты для особых событий в Кишиневе. Эффектный декор, премиальные акценты и индивидуальный дизайн CaroCakes.",
        heading: "Luxury торты для событий в Кишиневе",
        eyebrow: "Премиальные акценты",
        intro: "CaroCakes создает luxury торты с объемом, металлическими акцентами, цветами, элегантными текстурами и продуманной композицией.",
        serviceName: "Luxury торты",
        keywords: ["luxury торты", "премиальные торты", "индивидуальные торты"],
        priority: "0.8"
      },
      "candy-bar": {
        slug: "candy-bar-v-kishineve",
        title: "Кенди бар в Кишиневе | CaroCakes",
        description:
          "Элегантный кенди бар для свадеб, крещений, дней рождения и особых событий. Макаронс, капкейки, индивидуальные десерты и печенье.",
        heading: "Кенди бар для событий в Кишиневе",
        eyebrow: "Десерты для красивого стола",
        intro: "Готовим кенди бар в Кишиневе для свадеб, крещений и дней рождения с десертами, которые сочетаются по стилю и вкусу.",
        serviceName: "Кенди бар",
        keywords: ["кенди бар в Кишиневе", "десерты на заказ", "макаронс", "капкейки"],
        priority: "0.85"
      },
      macarons: {
        slug: "makarons",
        title: "Макаронс в Кишиневе | CaroCakes",
        description:
          "Макаронс для подарков, кенди-бара и событий в Кишиневе. Нежные цвета, сбалансированные текстуры и элегантная подача.",
        heading: "Макаронс для событий в Кишиневе",
        eyebrow: "Деликатные десерты",
        intro: "Макаронс CaroCakes подходят для кенди-бара, сладких подарков и праздничного стола с оттенками и вкусами под вашу тему.",
        serviceName: "Макаронс",
        keywords: ["макаронс", "макаронс Кишинев", "кенди бар в Кишиневе"],
        priority: "0.75"
      },
      cupcakes: {
        slug: "kapkeyki",
        title: "Капкейки в Кишиневе | CaroCakes",
        description:
          "Капкейки для дней рождения, крещений, свадеб и кенди-бара в Кишиневе. Элегантный декор и нежные вкусы.",
        heading: "Капкейки на заказ в Кишиневе",
        eyebrow: "Порционные десерты для гостей",
        intro: "Капкейки ручной работы для кенди-бара, праздников и событий в Кишиневе с декором под выбранные цвета и стиль.",
        serviceName: "Капкейки",
        keywords: ["капкейки", "капкейки Кишинев", "кенди бар в Кишиневе"],
        priority: "0.75"
      },
      "prajituri-individuale": {
        slug: "individualnye-deserty",
        title: "Индивидуальные десерты в Кишиневе | CaroCakes",
        description:
          "Индивидуальные десерты для событий, кенди-бара и сладких подарков в Кишиневе. Элегантная ручная работа.",
        heading: "Индивидуальные десерты для событий в Кишиневе",
        eyebrow: "Нежные десерты, элегантные порции",
        intro: "CaroCakes готовит индивидуальные десерты для событий в Кишиневе, которые подходят для кенди-бара и праздничного стола.",
        serviceName: "Индивидуальные десерты",
        keywords: ["индивидуальные десерты", "десерты на заказ", "кенди бар в Кишиневе"],
        priority: "0.75"
      },
      "biscuiti-fini": {
        slug: "pechene-na-zakaz",
        title: "Печенье для событий в Кишиневе | CaroCakes",
        description:
          "Нежное печенье для кенди-бара, подарков и событий в Кишиневе. Деликатные десерты с элегантной подачей.",
        heading: "Печенье для событий в Кишиневе",
        eyebrow: "Сладкие детали для стола",
        intro: "Печенье CaroCakes дополняет элегантный кенди бар или сладкий подарок формами, цветами и вкусами под событие.",
        serviceName: "Печенье",
        keywords: ["печенье на заказ", "десерты на заказ", "кенди бар в Кишиневе"],
        priority: "0.75"
      },
      galerie: {
        slug: "galereya-tortov",
        title: "Галерея тортов на заказ в Кишиневе | CaroCakes",
        description:
          "Смотрите галерею CaroCakes: индивидуальные торты, торты на день рождения, свадебные торты, торты на крещение и десерты для событий.",
        heading: "Галерея CaroCakes",
        eyebrow: "Идеи для заказа",
        intro: "Посмотрите идеи индивидуальных тортов и десертов, созданных для событий в Кишиневе и Молдове.",
        serviceName: "Галерея тортов на заказ",
        keywords: ["галерея тортов", "торты на заказ в Кишиневе"],
        priority: "0.7"
      },
      blog: {
        slug: "blog",
        title: "Блог CaroCakes | Гиды по тортам и кенди-бару в Кишиневе",
        description:
          "Полезные гиды о тортах на заказ, детских тортах, свадебных тортах, кенди-баре и вкусах для событий.",
        heading: "Блог CaroCakes",
        eyebrow: "Гиды для заказа",
        intro: "Короткие и полезные статьи, которые помогают выбрать торт, вкус, декор и правильное время для заказа.",
        serviceName: "Блог о тортах и десертах",
        keywords: ["блог торты Кишинев", "гид торты на заказ", "CaroCakes blog"],
        priority: "0.65"
      },
      "blog-cum-alegi-un-tort-personalizat-in-chisinau": {
        slug: "blog/kak-vybrat-tort-na-zakaz-v-kishineve",
        title: "Как выбрать торт на заказ в Кишиневе | CaroCakes",
        description:
          "Практичный гид по выбору индивидуального торта в Кишиневе: вкус, дизайн, размер, тема и детали для расчета.",
        heading: "Как выбрать торт на заказ в Кишиневе",
        eyebrow: "Гид CaroCakes",
        intro: "Выбрать индивидуальный торт проще, когда заранее понятны вкус, дизайн и детали события.",
        serviceName: "Гид по тортам на заказ",
        keywords: ["как выбрать торт на заказ", "торты на заказ в Кишиневе", "индивидуальные торты"],
        priority: "0.62"
      },
      "blog-cu-cat-timp-inainte-comanzi-un-tort": {
        slug: "blog/za-skolko-dney-zakazyvat-tort",
        title: "За сколько дней заказывать торт | CaroCakes",
        description:
          "Когда лучше заказывать индивидуальный торт на день рождения, свадьбу, крещение или кенди-бар в Кишиневе.",
        heading: "За сколько дней заказывать торт",
        eyebrow: "Планирование заказа",
        intro: "Дата события влияет на доступность, сложность декора и организацию доставки по Кишиневу.",
        serviceName: "Планирование заказа торта",
        keywords: ["за сколько дней заказывать торт", "торты на заказ в Кишиневе", "заказать торт Кишинев"],
        priority: "0.62"
      },
      "blog-tort-pentru-copii-idei-design": {
        slug: "blog/detskiy-tort-idei-dizayna",
        title: "Детский торт: идеи дизайна | CaroCakes",
        description:
          "Идеи дизайна для детских тортов в Кишиневе: цвета, фигурки, тематический декор и вкусы для дня рождения.",
        heading: "Детский торт: идеи дизайна",
        eyebrow: "Идеи для дня рождения",
        intro: "Детский торт должен быть радостным, аккуратным визуально и подходящим атмосфере праздника.",
        serviceName: "Идеи детских тортов",
        keywords: ["детский торт идеи", "детские торты", "торт на день рождения"],
        priority: "0.62"
      },
      "blog-tort-de-nunta-chisinau-ghid": {
        slug: "blog/svadebnyy-tort-kishinev-gid",
        title: "Свадебный торт в Кишиневе: гид выбора | CaroCakes",
        description:
          "Гид по выбору свадебного торта в Кишиневе: стиль, декор, пропорции, вкус и детали для расчета.",
        heading: "Свадебный торт в Кишиневе: гид выбора",
        eyebrow: "Гид для свадьбы",
        intro: "Свадебный торт должен поддерживать эстетику события и оставаться запоминающимся для гостей.",
        serviceName: "Гид по свадебному торту",
        keywords: ["свадебный торт Кишинев", "свадебные торты", "торт на свадьбу"],
        priority: "0.62"
      },
      "blog-candy-bar-pentru-botez": {
        slug: "blog/candy-bar-na-kreshchenie",
        title: "Candy bar на крещение в Кишиневе | CaroCakes",
        description:
          "Как выбрать candy bar на крещение: макаронс, капкейки, индивидуальные десерты, печенье и нежная палитра.",
        heading: "Candy bar на крещение",
        eyebrow: "Гид для семьи",
        intro: "Candy bar на крещение должен быть нежным, визуально цельным и удобным для гостей.",
        serviceName: "Гид candy bar на крещение",
        keywords: ["candy bar на крещение", "candy bar в Кишиневе", "десерты на крещение"],
        priority: "0.62"
      },
      "blog-gusturi-de-tort-pentru-evenimente": {
        slug: "blog/vkusi-tortov-dlya-meropriyatiy",
        title: "Вкусы тортов для мероприятий | CaroCakes",
        description:
          "Гид по вкусам тортов для событий: banana-caramel, фисташка-малина, Red Velvet, Oreo, Snickers и другие композиции.",
        heading: "Вкусы тортов для мероприятий",
        eyebrow: "Гид по вкусам",
        intro: "Правильный вкус зависит от сезона, формата события и предпочтений гостей.",
        serviceName: "Гид по вкусам тортов",
        keywords: ["вкусы тортов", "торты на заказ в Кишиневе", "десерты на заказ"],
        priority: "0.62"
      },
      despre: {
        slug: "o-nas",
        title: "О CaroCakes | Торты на заказ в Кишиневе",
        description:
          "Узнайте историю CaroCakes: индивидуальные торты и десерты для событий в Кишиневе и Молдове.",
        heading: "О CaroCakes",
        eyebrow: "Десерты на заказ",
        intro: "CaroCakes превращает десерты в воспоминания через торты, макаронс, капкейки, индивидуальные десерты и кенди-бары.",
        serviceName: "Торты и десерты на заказ",
        keywords: ["CaroCakes Кишинев", "десерты на заказ", "индивидуальные торты"],
        priority: "0.65"
      },
      contact: {
        slug: "contact",
        title: "Контакты CaroCakes | Заказать торт в Кишиневе",
        description:
          "Свяжитесь с CaroCakes, чтобы заказать индивидуальный торт, кенди бар, макаронс, капкейки и десерты в Кишиневе.",
        heading: "Закажите торт для вашего момента",
        eyebrow: "Контакт / заказ",
        intro: "Отправьте детали события, и мы обсудим вкус, дизайн, дату, оформление и доставку тортов по Кишиневу в WhatsApp.",
        serviceName: "Заказы тортов и десертов",
        keywords: ["заказать торт Кишинев", "доставка тортов по Кишиневу", "CaroCakes contact"],
        priority: "0.75"
      }
    },
    navigation: {
      aria: "Главная навигация",
      homeAria: "CaroCakes главная",
      menuAria: "Меню",
      links: [
        { label: "Торты", href: "#signature" },
        { label: "Цены", href: "/ru/tseny-na-torty" },
        { label: "Галерея", href: "#galerie" },
        { label: "Блог", href: "/ru/blog" },
        { label: "О нас", href: "#despre" },
        { label: "Контакт", href: "#contact" }
      ],
      order: "Заказать"
    },
    language: {
      label: "Язык",
      switchTo: {
        ro: "Перейти на румынский",
        ru: "Перейти на русский"
      }
    },
    hero: {
      eyebrow: "торты и десерты на заказ",
      title: "Торты на заказ в Кишиневе",
      subtitle:
        "CaroCakes создает свадебные торты, торты на крещение, торт на день рождения, кенди-бар и десерты на заказ для особенных моментов.",
      orderCta: "Заказать торт",
      galleryCta: "Смотреть галерею",
      pills: ["На заказ", "Luxury", "Доставка"],
      logoAlt: "Логотип CaroCakes",
      scrollAria: "Перейти к тортам на заказ"
    },
    signature: {
      eyebrow: "Торты на заказ",
      title: "Торты, созданные для эмоции момента",
      intro: "Превращаем вашу идею в индивидуальный торт в Кишиневе: тонкие текстуры, сбалансированный вкус и аккуратные детали.",
      cardBadge: "CaroCakes atelier",
      items: [
        {
          title: "Торты на день рождения",
          description: "Созданы для радостных моментов, с индивидуальным дизайном и вкусами, которые объединяют близких.",
          image: "/transparent/torturi-aniversare-carocakes.png",
          alt: "Торт на день рождения от CaroCakes в Кишиневе"
        },
        {
          title: "Свадебные торты",
          description: "Элегантность, утонченность и продуманные детали для одного из самых важных дней в жизни.",
          image: "/transparent/torturi-nunta-carocakes.png",
          alt: "Элегантный свадебный торт в Кишиневе с нежными цветами"
        },
        {
          title: "Торты на крещение",
          description: "Нежные и наполненные эмоцией, созданные для первых семейных воспоминаний малыша.",
          image: "/transparent/torturi-botez-carocakes.png",
          alt: "Индивидуальный торт на крещение в Кишиневе"
        },
        {
          title: "Индивидуальные торты",
          description: "Каждый торт создается с нуля под вашу историю, стиль и вкусовые предпочтения.",
          image: "/transparent/torturi-personalizate-carocakes.png",
          alt: "Индивидуальный торт на заказ в Кишиневе"
        },
        {
          title: "Минималистичные торты",
          description: "Чистые линии, сдержанные детали и современный дизайн, который впечатляет простотой.",
          image: "/transparent/torturi-minimaliste-carocakes.png",
          alt: "Минималистичный торт на заказ от CaroCakes"
        },
        {
          title: "Luxury торты",
          description: "Съедобные коллекционные работы для эксклюзивных событий и эффектного появления.",
          image: "/transparent/torturi-luxury-carocakes.png",
          alt: "Luxury торт для особого события в Кишиневе"
        }
      ]
    },
    dessertsSection: {
      eyebrow: "Десерты & сладости",
      title: "Кенди бар и десерты для событий в Кишиневе",
      items: [
        { title: "Макаронс", image: "/transparent/macarons-carocakes.png", alt: "Макаронс для кенди-бара и событий в Кишиневе" },
        { title: "Капкейки", image: "/transparent/cupcakes-carocakes.png", alt: "Капкейки на заказ для событий в Кишиневе" },
        { title: "Индивидуальные десерты", image: "/transparent/prajituri-individuale-carocakes.png", alt: "Индивидуальные десерты для кенди-бара в Кишиневе" },
        { title: "Печенье", image: "/transparent/biscuiti-fini-carocakes.png", alt: "Нежное печенье для кенди-бара и сладких подарков" },
        { title: "Кенди бар", image: "/transparent/candy-bar-carocakes.png", alt: "Кенди бар с макаронс и индивидуальными десертами для события" }
      ]
    },
    orderSteps: {
      eyebrow: "Опыт заказа",
      title: "Как заказать индивидуальный торт",
      description: "Каждая деталь создается под эмоцию момента: от первой идеи до доставки по Кишиневу.",
      steps: ["Вы отправляете идею", "Выбираем вкус и дизайн", "Создаем десерт", "Доставляем к вашему событию"]
    },
    gallerySection: {
      eyebrow: "Иммерсивная галерея",
      title: "Галерея CaroCakes",
      intro: "Индивидуальные торты, десерты для событий и идеи кенди-бара, созданные в Кишиневе.",
      instagramCta: "Фото в Instagram",
      tiktokCta: "Видео в TikTok",
      cardBadge: "CaroCakes",
      items: [
        { title: "Money cake couture", text: "Шоколад, золото и эффектные детали", image: "/transparent/tort-luxury-auriu-carocakes.png", alt: "Luxury торт на заказ с шоколадом и золотым декором" },
        { title: "Birthday statement", text: "Объем, контраст и металлические акценты", image: "/transparent/tort-aniversar-statement-carocakes.png", alt: "Торт на день рождения с индивидуальным декором" },
        { title: "Blush celebration", text: "Нежный розовый для теплых моментов", image: "/transparent/tort-roz-copii-carocakes.png", alt: "Розовый торт с цветами для дня рождения в Кишиневе" },
        { title: "Fairy garden", text: "Цветы и сказочный декор", image: "/transparent/tort-fairy-garden-carocakes.png", alt: "Индивидуальный торт со сказочным цветочным декором" },
        { title: "Candy concept", text: "Создан для вашего события", image: "/transparent/tort-candy-concept-carocakes.png", alt: "Индивидуальный детский торт для семейного события" }
      ]
    },
    reels: {
      eyebrow: "Reels из мастерской",
      title: "Reels CaroCakes из мастерской",
      cardBadge: "CaroCakes reel",
      playAria: "Открыть reel в Instagram",
      items: [
        {
          title: "Choux au craquelin",
          text: "С creme patissiere, хрустящей текстурой и нежным кремом из мастерской.",
          image: "/transparent/choux-craquelin-carocakes.png",
          alt: "Choux au craquelin с creme patissiere от CaroCakes",
          url: "https://www.instagram.com/reel/DYj-8X6IPlo/"
        },
        {
          title: "Процесс подготовки торта",
          text: "Этапы из мастерской: от тонких деталей до финальной формы.",
          image: "/transparent/proces-pregatire-tort-carocakes.png",
          alt: "Процесс подготовки индивидуального торта CaroCakes",
          url: "https://www.instagram.com/reel/DYT4hdHoIeq/"
        },
        {
          title: "Macarons cube",
          text: "Макаронс в элегантной подаче для сладкого и запоминающегося подарка.",
          image: "/transparent/macarons-cube-carocakes.png",
          alt: "Macarons cube для сладкого подарка и кенди-бара",
          url: "https://www.instagram.com/reel/DVQ4YCkiLsc/"
        }
      ]
    },
    reviews: {
      eyebrow: "Отзывы",
      title: "Отзывы клиентов",
      intro: "Несколько реакций после тортов и десертов для дней рождения, крещений, свадеб и семейных моментов.",
      items: [
        { src: "/Recenzie1.jpeg", alt: "Отзыв клиента об индивидуальном торте CaroCakes" },
        { src: "/recenzie2.jpeg", alt: "Сообщение благодарности от клиента CaroCakes" },
        { src: "/recenzie 3.jpeg", alt: "Отзыв клиента о десертах CaroCakes в Кишиневе" },
        { src: "/recenzie4.jpeg", alt: "Реальный отзыв клиента CaroCakes" }
      ]
    },
    about: {
      eyebrow: "О CaroCakes",
      title: "О CaroCakes",
      scriptTitle: "история CaroCakes",
      paragraphs: [
        "CaroCakes появился из желания превращать десерты в воспоминания. В нашей работе для Кишинева и Молдовы каждый индивидуальный торт, макарон, капкейк, индивидуальный десерт или печенье создается с терпением, сбалансированным вкусом и деталями, подходящими моменту.",
        "Мы готовим кенди-бары для свадеб, крещений, дней рождения и особых событий в Кишиневе, с десертами, которые элегантно смотрятся на столе и остаются в памяти гостей. Стиль CaroCakes объединяет внимание к деталям и эмоцию десертов, созданных для реальных людей и личных историй."
      ],
      tags: ["Индивидуальные торты", "Макаронс", "Капкейки", "Индивидуальные десерты", "Печенье", "Кенди бар"]
    },
    contact: {
      partner: {
        textBefore: "В партнерстве с командой",
        linkText: "vilmgroup.md",
        logoAlt: "Логотип Vilm Group",
        bodyBefore: "CaroCakes и",
        bodyAfter:
          "работают вместе, чтобы каждый заказ был простым, аккуратно организованным и близким к тому, что вы хотите. Вы приходите с моментом, мы заботимся о деталях."
      },
      eyebrow: "Контакт / заказ",
      title: "Закажите торт для вашего момента",
      intro: "Расскажите о событии, стиле и эмоции, которую хотите передать. Мы превратим это в запоминающийся торт с доставкой по Кишиневу.",
      instagramCta: "Смотреть Instagram",
      tiktokCta: "Смотреть TikTok"
    },
    form: {
      name: "Имя",
      phone: "Телефон",
      eventDate: "Дата события",
      chooseEventDateAria: "Выбрать дату события",
      flavors: "Вкус торта",
      details: "Детали дизайна, тема, цвета или доставка",
      submit: "Отправить заявку в WhatsApp",
      whatsappIntro: "Здравствуйте! Хочу заказать индивидуальный торт от CaroCakes.",
      whatsappDetailsTitle: "Детали заказа:",
      fields: {
        name: "Имя",
        phone: "Телефон",
        date: "Дата события",
        flavor: "Выбранный вкус",
        details: "Детали"
      }
    },
    calendar: {
      months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
      weekdays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
      previousMonthAria: "Предыдущий месяц",
      nextMonthAria: "Следующий месяц"
    },
    chat: {
      title: "Caro AI",
      subtitle: "Помощник по заказам",
      closeAria: "Закрыть агента Caro",
      openAria: "Открыть агента Caro",
      sendAria: "Отправить сообщение",
      inputPlaceholder: "Напишите ваш вопрос...",
      typing: "Caro пишет...",
      initialMessage: "Здравствуйте! Меня зовут Caro, и я здесь, чтобы помочь. Могу подсказать вкусы, стиль торта, шаги для заказа и как формируется цена.",
      fallbackReply: "Я могу помочь выбрать вкус, дизайн, следующий шаг для заказа и объяснить ценообразование.",
      errorReply: "Сейчас я не могу ответить автоматически, но вы можете заполнить форму, и сообщение сразу откроется в WhatsApp.",
      prompts: ["Здравствуйте, я Caro.", "Нужна помощь?", "Помогу выбрать вкус.", "Объясню как формируется цена."],
      quickQuestions: ["Цены за 1 кг", "Какой вкус выбрать?", "Хочу свадебный торт"]
    },
    controls: {
      upAria: "Перейти к секции выше",
      downAria: "Перейти к секции ниже",
      showCakeAria: "Показать"
    },
    categoryPage: {
      backHomeAria: "CaroCakes главная",
      quoteCta: "Запросить цену",
      whatsappCta: "Запросить в WhatsApp",
      galleryCta: "Смотреть галерею",
      panelEyebrow: "CaroCakes",
      panelTitle: "Десерты ручной работы для событий в Молдове",
      panelText:
        "Обсуждаем вкус, дату события, визуальный стиль, цвета и доставку по Кишиневу. Для точной цены отправьте заявку в WhatsApp с несколькими деталями.",
      benefits: ["Индивидуальный дизайн", "Сбалансированные вкусы", "Доставка по Кишиневу"],
      benefitText: "Каждый заказ адаптируется под момент: от первой идеи до финальной подачи."
    }
  }
};

export const flavorsByLocale: Record<Locale, string[]> = {
  ro: cakeFlavors,
  ru: ruCakeFlavors
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getTranslations(locale: Locale) {
  return translations[locale];
}

export function getSeoRoute(locale: Locale, routeKey: RouteKey) {
  return translations[locale].seoRoutes[routeKey];
}

export function getRouteKeyBySlug(locale: Locale, slug = ""): RouteKey | undefined {
  return routeKeys.find((key) => translations[locale].seoRoutes[key].slug === slug);
}

export function getLocalizedPath(locale: Locale, routeKey: RouteKey = "") {
  const slug = translations[locale].seoRoutes[routeKey].slug;
  return `/${locale}${slug ? `/${slug}` : ""}`;
}

export function getRouteAlternates(routeKey: RouteKey) {
  return {
    "ro-MD": getLocalizedPath("ro", routeKey),
    "ru-MD": getLocalizedPath("ru", routeKey),
    "x-default": getLocalizedPath(defaultLocale, routeKey)
  };
}
