# CaroCakes SEO Checklist

## Implementat in proiect

- [x] Ruta principala redirectioneaza spre `/ro`, iar site-ul are versiuni separate `/ro` si `/ru`.
- [x] `html lang="ro"` setat in layout si `lang` localizat pe continutul fiecarei versiuni.
- [x] Meta title principal: `CaroCakes — Torturi personalizate la comandă în Chișinău`.
- [x] Meta description principala pentru torturi personalizate, nunti, botez, aniversari, macarons, cupcakes si candy bar in Chisinau.
- [x] Canonical principal localizat: `https://carocakes.md/ro`.
- [x] Hreflang pentru `ro-MD`, `ru-MD` si `x-default`.
- [x] Meta robots: `index, follow`.
- [x] Open Graph: title, description, image generata prin `app/opengraph-image.tsx`, url, type `website`, locale `ro_MD`.
- [x] Twitter Card: `summary_large_image`.
- [x] Favicon set complet in `public/`.
- [x] `site.webmanifest` configurat.
- [x] `robots.txt` creat cu sitemap.
- [x] `sitemap.xml` creat pentru rutele SEO principale in romana si rusa.
- [x] Pagină comercială de prețuri pregătită bilingv: `/ro/preturi-torturi-la-comanda` și `/ru/tseny-na-torty`.
- [x] Paginile comerciale SEO au FAQ, CTA WhatsApp, linkuri interne spre prețuri, galerie și contact.
- [x] Galerie SEO pregătită cu imagini, titluri, categorii, descrieri, taguri și alt text localizat.
- [x] Blog bilingv pregătit cu 6 articole prioritare și Article JSON-LD.
- [x] `llms.txt` creat pentru sumarul public al site-ului și paginile importante.
- [x] JSON-LD pentru `Organization`, `Bakery`, `WebSite`, `BreadcrumbList` si servicii.
- [x] H1 unic pe pagina principala.
- [x] H2/H3 ajustate pentru sectiunile principale.
- [x] Texte on-page optimizate natural pentru Chisinau/Moldova in romana si rusa.
- [x] Textele vizibile sunt mutate in `src/i18n/translations.ts`.
- [x] WhatsApp foloseste mesaj precompletat diferit pentru romana si rusa.
- [x] Alt text descriptiv pe imaginile folosite in componente.
- [x] CTA-urile principale duc spre formular, WhatsApp sau galerie.
- [x] Linkurile icon Instagram/TikTok au `aria-label`.
- [x] Inputurile formularului au label semantic.
- [x] Fisiere exportate Instagram/HTML nefolosite sunt ignorate la deploy Vercel prin `.vercelignore`, fara sa fie sterse local.

## Fisiere favicon necesare

- [x] `/favicon.ico`
- [x] `/favicon-16x16.png`
- [x] `/favicon-32x32.png`
- [x] `/favicon-48x48.png`
- [x] `/apple-touch-icon.png`
- [x] `/android-chrome-192x192.png`
- [x] `/android-chrome-512x512.png`
- [x] `/site.webmanifest`

## Rute SEO pregatite

- [x] `/ro`
- [x] `/ru`
- [x] `/ro/preturi-torturi-la-comanda` si `/ru/tseny-na-torty`
- [x] `/ro/torturi-la-comanda-chisinau` si `/ru/torty-na-zakaz-v-kishineve`
- [x] `/ro/torturi-personalizate` si `/ru/individualnye-torty`
- [x] `/ro/torturi-pentru-copii` si `/ru/detskie-torty`
- [x] `/ro/torturi-aniversare` si `/ru/torty-na-den-rozhdeniya`
- [x] `/ro/torturi-nunta` si `/ru/svadebnye-torty`
- [x] `/ro/torturi-botez` si `/ru/tort-na-kreshchenie`
- [x] `/ro/torturi-minimaliste` si `/ru/minimalistichnye-torty`
- [x] `/ro/torturi-luxury` si `/ru/luxury-torty`
- [x] `/ro/candy-bar-chisinau` si `/ru/candy-bar-v-kishineve`
- [x] `/ro/macarons` si `/ru/makarons`
- [x] `/ro/cupcakes` si `/ru/kapkeyki`
- [x] `/ro/prajituri-individuale` si `/ru/individualnye-deserty`
- [x] `/ro/biscuiti-fini` si `/ru/pechene-na-zakaz`
- [x] `/ro/galerie-torturi` si `/ru/galereya-tortov`
- [x] `/ro/blog` si `/ru/blog`
- [x] `/ro/blog/cum-alegi-un-tort-personalizat-in-chisinau` si `/ru/blog/kak-vybrat-tort-na-zakaz-v-kishineve`
- [x] `/ro/blog/cu-cat-timp-inainte-comanzi-un-tort` si `/ru/blog/za-skolko-dney-zakazyvat-tort`
- [x] `/ro/blog/tort-pentru-copii-idei-design` si `/ru/blog/detskiy-tort-idei-dizayna`
- [x] `/ro/blog/tort-de-nunta-chisinau-ghid` si `/ru/blog/svadebnyy-tort-kishinev-gid`
- [x] `/ro/blog/candy-bar-pentru-botez` si `/ru/blog/candy-bar-na-kreshchenie`
- [x] `/ro/blog/gusturi-de-tort-pentru-evenimente` si `/ru/blog/vkusi-tortov-dlya-meropriyatiy`
- [x] `/ro/despre` si `/ru/o-nas`
- [x] `/ro/contact` si `/ru/contact`

## De completat/verificat manual inainte de deploy

- [ ] Confirma ca domeniul final este `https://carocakes.md`.
- [ ] Confirma telefonul public: `+373 607 18 756`.
- [ ] Adauga adresa fizica doar daca va fi publica si folosita in Google Business Profile.
- [ ] Completeaza prețuri exacte doar daca exista o lista oficiala confirmata.
- [ ] Confirma link Instagram final: `https://www.instagram.com/carocakescraft/`.
- [ ] Confirma link TikTok final: `https://www.tiktok.com/@carocakescraft`.
- [ ] Creeaza si verifica Google Business Profile pentru CaroCakes.
- [ ] Adauga logo, poze reale, program, zona de livrare si categorii in Google Business Profile.
- [ ] Cere recenzii reale de la clienti in Google Business Profile, ideal cu poze.
- [ ] Trimite `https://carocakes.md/sitemap.xml` in Google Search Console.
- [ ] Verifica schema JSON-LD in Google Rich Results Test.
- [ ] Ruleaza Lighthouse dupa deploy pe URL-ul final si urmareste: Performance 90+, SEO 95+, Accessibility 90+, Best Practices 90+.

## Observatii SEO

- Logo-ul afisat in Google este decis de Google. Faviconul, manifestul, Organization JSON-LD si Google Business Profile cresc sansele sa fie preluat corect.
- Ratingul in Google vine din Google Business Profile si recenzii reale, nu doar din codul site-ului.
- Fisierele mari nefolosite din `public/` ar trebui mutate intr-un folder de arhiva in afara proiectului dupa ce confirmi ca nu mai sunt necesare.
