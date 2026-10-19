// Single source of truth for categories, add-ons, products and prices (English + Danish).
// The catalog, product pages, price list, order form and structured data all read from this file,
// so changing a price is a one-line edit here.
//
// Images are '~/assets/images/...' paths (resolved with findImage from ~/utils/images).
// An empty `images` array means "no photo yet": show the PhotoComingSoon placeholder.
// Danish text comes from private/da-copy.md. Anything still marked [DA] is waiting for a translation.

import type { Lang } from '../i18n/translations';

export type { Lang };
/** A string in every site language */
export type L = Record<Lang, string>;

export const currency = 'DKK';

export type CategoryId = 'photo-gifts' | 'places' | 'lights';
export type AddonId = 'glow' | 'nfc' | 'giftbox';

export interface ProductImage {
  src: string;
  /** Descriptive English alt text, also used in structured data */
  alt: string;
  /** Danish alt text; defaults to "{Danish name} – 3D-printet af tattva-3d i Aalborg" */
  altDa?: string;
}

export interface Category {
  id: CategoryId;
  name: L;
  tagline: L;
  description: L;
  /** Short "How it's made" line (product language, no technique names) */
  howItsMade?: L;
  /** Page title and meta description; {from} is replaced with the lowest price */
  seo: { title: L; description: L };
  /** "See all …" link and "More …" heading */
  seeAll: L;
  more: L;
  /** Cover photo for category cards on the homepage */
  image?: ProductImage;
}

export interface Addon {
  id: AddonId;
  name: L;
  price: number;
  description?: L;
}

export interface Product {
  id: string;
  /** null for the custom / business quote entry, which isn't in a category */
  category: CategoryId | null;
  name: L;
  shortDescription: L;
  /** Price in DKK; null means "price on quote" */
  price: number | null;
  /** Multi-buy price, e.g. 3 for 229 kr. Shown as a price note and used by the order estimate */
  bundle?: { quantity: number; price: number };
  /** English options drive needsPhoto(); keep both languages in the same order */
  options: L[];
  addons: AddonId[];
  images: ProductImage[];
  available: boolean;
}

export const categories: Category[] = [
  {
    id: 'photo-gifts',
    name: { en: 'Photo Gifts', da: 'Fotogaver' },
    tagline: { en: 'Your photo, made into something you can hold', da: 'Dit billede som noget, du kan holde i hånden' },
    description: {
      en: 'Send us a photo or a few words and we turn it into a keychain, magnet, bookmark, glow panel or photo cube. You see a preview before anything is printed.',
      da: 'Gør dit yndlingsbillede til en gave, der holder. Nøgleringe, køleskabsmagneter, bogmærker og lysbokse med dine egne fotos – en personlig gave til fødselsdag, jul eller bare fordi.',
    },
    howItsMade: {
      en: 'Printed in layers of colour so your photo appears in the plastic.',
      da: 'Printet i lag af farve, så dit billede kommer til syne i selve materialet.',
    },
    seo: {
      title: { en: 'Photo Gifts', da: 'Fotogaver' },
      description: {
        en: 'Your photo, made into something you can hold. Photo Gifts from {from}, 3D printed to order in Aalborg.',
        da: 'Gave med billede: nøglering, køleskabsmagnet, bogmærke og lysboks med dine egne fotos. Fra {from}, 3D-printet i Aalborg.',
      },
    },
    seeAll: { en: 'See all photo gifts →', da: 'Se alle fotogaver →' },
    more: { en: 'More photo gifts', da: 'Flere fotogaver' },
    image: {
      src: '~/assets/images/Gallery/keychain/PHOTO-2025-09-21-11-54-36.jpg',
      alt: '3D printed keychain cut to the outline of a dog, made from a photo',
      altDa: 'Fotogaver – 3D-printet af tattva-3d i Aalborg',
    },
  },
  {
    id: 'places',
    name: { en: 'Places', da: '3D-kort' },
    tagline: { en: 'Any place on Earth, in 3D', da: 'Ethvert sted på jorden, i 3D' },
    description: {
      en: 'Turn any place on Earth into a 3D art piece. The mountain range you hiked, the city you grew up in, a dream destination, or a spot with a special memory — we source the real terrain data and print it with precision. Share a place name, coordinates or a rough area, and we handle everything else.',
      da: 'Gør et sted, der betyder noget, til et lille kunstværk i 3D. Byen, du voksede op i, bjerget, du besteg, eller stedet, hvor I mødtes – vi bruger rigtige kortdata og printer det præcist. Send et stednavn, koordinater eller et omtrentligt område, så klarer vi resten. Et 3D-kort over Aalborg, din hjemby eller jeres feriested er en gave, der bliver hængende.',
    },
    seo: {
      title: { en: 'Places', da: '3D-kort' },
      description: {
        en: 'Any place on Earth, in 3D. Places from {from}, 3D printed to order in Aalborg.',
        da: 'Din by, dit sted, i 3D: et 3D-printet kort over ethvert sted på jorden. Fra {from}, lavet på bestilling i Aalborg.',
      },
    },
    seeAll: { en: 'See all places →', da: 'Se alle 3D-kort →' },
    more: { en: 'More places', da: 'Flere 3D-kort' },
    image: {
      src: '~/assets/images/Gallery/maps_cityscapes/trieste.jpg',
      alt: 'Multicolour 3D printed map of Trieste with the blue sea and city streets, in a dark frame',
      altDa: '3D-kort – 3D-printet af tattva-3d i Aalborg',
    },
  },
  {
    id: 'lights',
    name: { en: 'Lights', da: 'Lamper' },
    tagline: { en: 'Lamps and lightboxes that glow', da: 'Lamper og lysbokse, der lyser' },
    description: {
      en: 'Add character to your space. Choose a compact mini lamp for a desk or bedside, a full-size lamp for your living room, or a lightbox with your own text or logo. Each one casts a warm, cosy glow — and makes a genuinely unique gift.',
      da: 'Giv dit hjem lidt ekstra hygge. Vælg en lille lampe til skrivebordet eller natbordet, en større lampe til stuen eller en lysboks med din egen tekst eller dit logo. Hver enkelt giver et varmt, hyggeligt lys – og er en gave, ingen andre har.',
    },
    seo: {
      title: { en: 'Lights', da: 'Lamper og lysbokse' },
      description: {
        en: 'Lamps and lightboxes that glow. Lights from {from}, 3D printed to order in Aalborg.',
        da: '3D-printede lamper og lysbokse med din tekst eller dit logo. Fra {from}, lavet på bestilling i Aalborg.',
      },
    },
    seeAll: { en: 'See all lights →', da: 'Se alle lamper →' },
    more: { en: 'More lights', da: 'Flere lamper' },
    image: {
      src: '~/assets/images/Gallery/lamps/mini-lamps.jpg',
      alt: 'Four lit 3D printed mini lamps in yellow, gold and blue',
      altDa: 'Lamper – 3D-printet af tattva-3d i Aalborg',
    },
  },
];

export const addons: Addon[] = [
  {
    id: 'glow',
    name: { en: 'Glow-in-the-dark finish', da: 'Selvlysende finish' },
    price: 29,
    description: {
      en: 'Absorbs light during the day and glows softly in the dark.',
      da: 'Opsuger lys i løbet af dagen og lyser svagt i mørket.',
    },
  },
  {
    id: 'nfc',
    name: { en: 'NFC tag (tap to share a link or contact)', da: 'NFC-tag (del et link eller din kontakt med et tap)' },
    price: 39,
    description: {
      en: 'Tap any NFC-enabled phone to it to instantly share a contact, link or social profile — no app needed. Works with all modern smartphones.',
      da: 'Hold en telefon med NFC mod den, og del straks din kontakt, et link eller din profil på sociale medier – uden app. Virker med alle nyere smartphones.',
    },
  },
  { id: 'giftbox', name: { en: 'Gift box', da: 'Gaveæske' }, price: 19 },
];

/** Shown on products that need a customer photo */
export const photoTip: L = {
  en: 'A high-resolution photo works best (at least 1000 px). You can email it after sending your order.',
  da: 'Et billede i høj opløsning giver det bedste resultat (mindst 1000 px). Du kan sende det på mail, når du har sendt din bestilling.',
};

const IMG = '~/assets/images/Gallery';

export const products: Product[] = [
  // Photo Gifts
  {
    id: 'name-keychain',
    category: 'photo-gifts',
    name: { en: 'Name keychain', da: 'Nøglering med navn' },
    shortDescription: {
      en: 'A keychain with your name or short text, printed in the colour you pick.',
      da: 'En nøglering med dit navn eller en kort tekst, printet i den farve, du vælger.',
    },
    price: 49,
    options: [
      { en: 'Your text', da: 'Din tekst' },
      { en: 'Colour from stock', da: 'Farve fra lager' },
    ],
    addons: ['nfc', 'giftbox'],
    images: [
      { src: '~/assets/images/Models/After_BM_Keychain.jpg', alt: 'Round black-and-white 3D printed keychains with the Beyond Music logo' },
    ],
    available: true,
  },
  {
    id: 'photo-keychain',
    category: 'photo-gifts',
    name: { en: 'Photo keychain', da: 'Nøglering med billede' },
    shortDescription: {
      en: 'Your favourite photo, printed as a keychain to carry every day.',
      da: 'Dit yndlingsbillede som nøglering, du kan have med overalt.',
    },
    price: 99,
    options: [{ en: 'Your photo', da: 'Dit billede' }],
    addons: ['glow', 'nfc', 'giftbox'],
    images: [
      { src: `${IMG}/keychain/IMG_4973.jpg`, alt: 'Polaroid-style 3D printed photo keychain showing a black-and-white photo of a dog' },
      { src: `${IMG}/keychain/PHOTO-2025-09-21-11-54-36.jpg`, alt: '3D printed keychain cut to the outline of a dog, made from a photo' },
    ],
    available: true,
  },
  {
    id: 'photo-magnet',
    category: 'photo-gifts',
    name: { en: 'Photo fridge magnet', da: 'Køleskabsmagnet med billede' },
    shortDescription: {
      en: 'Your photo as a fridge magnet. Order one, or a set of three.',
      da: 'Dit billede som køleskabsmagnet. Bestil én, eller et sæt med tre.',
    },
    price: 89,
    bundle: { quantity: 3, price: 229 },
    options: [{ en: 'Your photo(s)', da: 'Dit/dine billede(r)' }],
    addons: ['glow', 'nfc'],
    images: [],
    available: true,
  },
  {
    id: 'photo-bookmark',
    category: 'photo-gifts',
    name: { en: 'Photo bookmark', da: 'Bogmærke med billede' },
    shortDescription: {
      en: 'A bookmark made from your photo, with optional text.',
      da: 'Et bogmærke med dit billede og eventuelt en kort tekst.',
    },
    price: 89,
    options: [
      { en: 'Your photo', da: 'Dit billede' },
      { en: 'Optional text', da: 'Valgfri tekst' },
    ],
    addons: ['glow', 'giftbox'],
    images: [
      { src: `${IMG}/bookmarks/shameek.png`, alt: 'Black-and-white 3D printed photo bookmark of a person in a suit, tucked into a book of Rumi poems' },
      { src: `${IMG}/bookmarks/shameek2.png`, alt: 'Black-and-white 3D printed photo bookmark of a person in a suit, lying in an open poetry book' },
      { src: `${IMG}/bookmarks/Cat_Sticker_Bookmark.jpeg`, alt: '3D printed bookmark of a cat wearing sunglasses, in green and black' },
      { src: `${IMG}/bookmarks/IMG_5479.jpg`, alt: '3D printed photo bookmark lying in an open book' },
      { src: `${IMG}/bookmarks/IMG_5480.jpg`, alt: '3D printed photo bookmark standing in a book of Rumi poems' },
    ],
    available: true,
  },
  {
    id: 'glow-panel',
    category: 'photo-gifts',
    name: { en: 'Glow photo panel (~15×15 cm)', da: 'Selvlysende fotoplade (ca. 15×15 cm)' },
    shortDescription: {
      en: 'Your photo on a panel that glows in the dark, on a stand or a wall hook.',
      da: 'Dit billede på en plade, der lyser i mørket – på fod eller til ophæng på væggen.',
    },
    price: 199,
    options: [
      { en: 'Your photo', da: 'Dit billede' },
      { en: 'Stand or wall hook', da: 'Fod eller vægophæng' },
    ],
    addons: ['giftbox'],
    images: [],
    available: true,
  },
  {
    id: 'photo-cube',
    category: 'photo-gifts',
    name: { en: 'Photo cube lightbox (5 photos, 10×10 cm)', da: 'Fototerning med lys (5 billeder, 10×10 cm)' },
    shortDescription: {
      en: 'A lit cube with five of your photos that appear when the light is on.',
      da: 'En lysende terning med fem af dine billeder, der kommer frem, når lyset tændes.',
    },
    price: 349,
    options: [{ en: '5 photos (monochrome, revealed in light)', da: '5 billeder (sort-hvide, kommer frem i lyset)' }],
    addons: ['giftbox'],
    images: [],
    available: true,
  },

  // Places
  {
    id: 'map-single',
    category: 'places',
    name: { en: '3D map, 15×15 cm, single colour', da: '3D-kort, 15×15 cm, én farve' },
    shortDescription: {
      en: 'Any city or place on Earth as a 3D map in one colour.',
      da: 'Enhver by eller ethvert sted på jorden som 3D-kort i én farve.',
    },
    price: 249,
    options: [
      { en: 'Any location', da: 'Valgfrit sted' },
      { en: 'Colour from stock', da: 'Farve fra lager' },
    ],
    addons: ['giftbox'],
    images: [{ src: `${IMG}/maps_cityscapes/IMG_4173.JPG`, alt: 'Single-colour white 3D printed relief map of a city centre' }],
    available: true,
  },
  {
    id: 'map-multi',
    category: 'places',
    name: { en: '3D map, 15×15 cm, multicolour', da: '3D-kort, 15×15 cm, flere farver' },
    shortDescription: {
      en: 'Any city or place on Earth as a 3D map, with parks, water and streets in colour.',
      da: 'Enhver by eller ethvert sted på jorden som 3D-kort med parker, vand og gader i farver.',
    },
    price: 299,
    options: [{ en: 'Any location', da: 'Valgfrit sted' }],
    addons: ['giftbox'],
    images: [
      {
        src: `${IMG}/maps_cityscapes/1_Lux_Ville.jpg`,
        alt: 'Multicolour 3D printed map of Luxembourg City with green parks and blue river, in a wooden frame',
        altDa: '3D-kort over Luxembourg by i flere farver – 3D-printet af tattva-3d i Aalborg',
      },
      { src: `${IMG}/maps_cityscapes/trieste.jpg`, alt: 'Multicolour 3D printed map of Trieste with the blue sea and city streets, in a dark frame' },
      { src: `${IMG}/maps_cityscapes/spilimbergo.jpg`, alt: 'Multicolour 3D printed map of Spilimbergo with green areas and streets, in a dark frame' },
    ],
    available: true,
  },

  // Lights
  {
    id: 'mini-lamp',
    category: 'lights',
    name: { en: 'Mini lamp', da: 'Minilampe' },
    shortDescription: {
      en: 'A small decorative lamp in the design and colour you choose.',
      da: 'En lille dekorativ lampe i det design og den farve, du vælger.',
    },
    price: 99,
    options: [
      { en: 'Design', da: 'Design' },
      { en: 'Colour from stock', da: 'Farve fra lager' },
    ],
    addons: ['giftbox'],
    images: [
      { src: `${IMG}/lamps/mini-lamps.jpg`, alt: 'Four lit 3D printed mini lamps in yellow, gold and blue' },
      { src: `${IMG}/lamps/mini-lamp_Circular.jpg`, alt: 'Round yellow 3D printed mini lamp glowing on a small tripod stand' },
    ],
    available: true,
  },
  {
    id: 'lamp',
    category: 'lights',
    name: { en: 'Lamp', da: 'Lampe' },
    shortDescription: {
      en: 'A table lamp in the design and colour you choose.',
      da: 'En bordlampe i det design og den farve, du vælger.',
    },
    price: 199,
    options: [
      { en: 'Design', da: 'Design' },
      { en: 'Colour from stock', da: 'Farve fra lager' },
    ],
    addons: ['giftbox'],
    images: [
      { src: `${IMG}/lamps/1_lamp.jpg`, alt: 'Lit white 3D printed table lamp with a diamond-pattern shade' },
      { src: `${IMG}/lamps/led_lamp.PNG`, alt: 'Lit white pleated 3D printed lamp on a wooden base' },
      { src: `${IMG}/lamps/led_lamp2.PNG`, alt: 'Three 3D printed table lamps: white pleated, white diamond-pattern and blue pleated' },
    ],
    available: true,
  },
  {
    id: 'logo-lightbox',
    category: 'lights',
    name: { en: 'Text / logo lightbox', da: 'Lysboks med tekst eller logo' },
    shortDescription: {
      en: 'Your text or logo in a lightbox that glows on a desk or shelf.',
      da: 'Din tekst eller dit logo i en lysboks, der lyser på skrivebordet eller hylden.',
    },
    price: 249,
    options: [{ en: 'Your text or logo', da: 'Din tekst eller dit logo' }],
    addons: [],
    images: [
      { src: `${IMG}/electronics/lightbox.jpg`, alt: 'Low Key logo lightbox glowing green in the dark' },
      { src: `${IMG}/lightbox/low_key/Image_1.png`, alt: 'Low Key logo lightbox glowing green on a dark shelf' },
      { src: `${IMG}/lightbox/low_key/Image_3.png`, alt: 'Low Key logo lightbox glowing green on a white shelf' },
      { src: `${IMG}/lightbox/beyond_music/BM_1.png`, alt: 'Black cube lightbox with the Beyond Music logo lit up, next to a plant' },
      { src: `${IMG}/lightbox/beyond_music/BM_3.png`, alt: 'Black cube lightbox with the Beyond Music logo glowing among candles' },
    ],
    available: true,
  },

  // Custom & business (no fixed price; used by the order form and the /custom page).
  // Examples: owner's own branded work only — no downloaded models.
  {
    id: 'custom',
    category: null,
    name: { en: 'Custom request / business order — quote', da: 'Specialopgave / erhvervsordre – tilbud' },
    shortDescription: {
      en: 'Branded keychains, logo lightboxes, large maps, workshops or anything else: ask for a quote.',
      da: 'Nøgleringe med logo, lysbokse med logo, store 3D-kort, workshops eller noget helt andet: få et tilbud.',
    },
    price: null,
    options: [],
    addons: [],
    images: [
      { src: `${IMG}/lightbox/beyond_music/BM_2.png`, alt: 'Black cube lightbox with the Beyond Music logo on a desk' },
      { src: `${IMG}/lightbox/low_key/Image_2.png`, alt: 'Low Key logo lightbox glowing green in a warmly lit room' },
      { src: `${IMG}/electronics/lightbox.jpg`, alt: 'Low Key logo lightbox glowing green in the dark' },
      { src: `${IMG}/lightbox/low_key/Image_4.png`, alt: 'Low Key logo lightbox on a white shelf next to a plant' },
      { src: `${IMG}/fridge_magnets/IMG_4137.jpg`, alt: '3D printed Warriors logo fridge magnet in brown, red and black' },
      { src: `${IMG}/fridge_magnets/IMG_4140.jpg`, alt: 'Round 3D printed Beyond Music logo fridge magnet' },
    ],
    available: true,
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
export const getAddon = (id: AddonId) => addons.find((a) => a.id === id);
export const getCategory = (id: CategoryId) => categories.find((c) => c.id === id);
export const productsInCategory = (id: CategoryId) => products.filter((p) => p.category === id && p.available);

/** Products that have their own page in the catalog (everything except the custom quote entry) */
export const catalogProducts = () => products.filter((p) => p.category !== null && p.available);

// ---- Language-aware formatting -------------------------------------------------------------

/** "99 kr" in English, "99 kr." in Danish */
export const formatPrice = (price: number, lang: Lang = 'en') => (lang === 'da' ? `${price} kr.` : `${price} kr`);
/** "from 49 kr" / "fra 49 kr." */
export const fromPrice = (price: number, lang: Lang = 'en') => `${lang === 'da' ? 'fra' : 'from'} ${formatPrice(price, lang)}`;
export const priceOnQuote: L = { en: 'Price on quote', da: '[DA] Price on quote' };
export const priceLabel = (product: Product, lang: Lang = 'en') =>
  product.price === null ? priceOnQuote[lang] : formatPrice(product.price, lang);
/** "set of 3: 229 kr" / "sæt med 3: 229 kr." */
export const priceNote = (product: Product, lang: Lang = 'en') =>
  product.bundle
    ? `${lang === 'da' ? 'sæt med' : 'set of'} ${product.bundle.quantity}: ${formatPrice(product.bundle.price, lang)}`
    : undefined;
export const lowestPrice = (id: CategoryId) =>
  Math.min(...productsInCategory(id).flatMap((p) => (p.price === null ? [] : [p.price])));

export const imageAlt = (img: ProductImage, lang: Lang, name: L) =>
  lang === 'da' ? (img.altDa ?? `${name.da} – 3D-printet af tattva-3d i Aalborg`) : img.alt;

export const needsPhoto = (product: Product) => product.options.some((o) => /photo/i.test(o.en));

// ---- Paths (same slugs in every language; Danish lives under /da) -------------------------

export const langPrefix = (lang: Lang) => (lang === 'da' ? '/da' : '');
export const categoryPath = (id: CategoryId, lang: Lang = 'en') => `${langPrefix(lang)}/catalog/${id}`;
export const productPath = (product: Product, lang: Lang = 'en') =>
  product.category ? `${langPrefix(lang)}/catalog/${product.category}/${product.id}` : `${langPrefix(lang)}/custom`;
export const orderPath = (product: Product, lang: Lang = 'en') => `${langPrefix(lang)}/order?product=${product.id}`;

/**
 * Order form estimate in DKK: product price × quantity (using the bundle price for full
 * bundles) plus each chosen add-on per item. Returns null for products priced on quote.
 */
export const estimate = (product: Product, quantity: number, addonIds: string[]): number | null => {
  if (product.price === null) return null;
  const q = Math.max(1, Math.floor(quantity) || 1);
  const base = product.bundle
    ? Math.floor(q / product.bundle.quantity) * product.bundle.price + (q % product.bundle.quantity) * product.price
    : q * product.price;
  const extras = addons
    .filter((a) => addonIds.includes(a.id) && product.addons.includes(a.id))
    .reduce((sum, a) => sum + a.price, 0);
  return base + extras * q;
};
