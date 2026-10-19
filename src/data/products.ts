// Single source of truth for categories, add-ons, products and prices.
// The catalog, product pages, price list and order form all read from this file,
// so changing a price is a one-line edit here.
//
// Images are '~/assets/images/...' paths (resolved with findImage from ~/utils/images).
// An empty `images` array means "no photo yet": show the PhotoComingSoon placeholder.

export const currency = 'DKK';

export type CategoryId = 'photo-gifts' | 'places' | 'lights';
export type AddonId = 'glow' | 'nfc' | 'giftbox';

export interface Category {
  id: CategoryId;
  name: string;
  tagline: string;
  description?: string;
  /** Short "How it's made" line (product language, no technique names) */
  howItsMade?: string;
  /** Cover photo for category cards on the homepage */
  image?: string;
}

export interface Addon {
  id: AddonId;
  name: string;
  price: number;
  description?: string;
}

export interface Product {
  id: string;
  /** null for the custom / business quote entry, which isn't in a category */
  category: CategoryId | null;
  name: string;
  shortDescription: string;
  /** Price in DKK; null means "price on quote" */
  price: number | null;
  priceNote?: string;
  /** Multi-buy price used by the order estimate, e.g. 3 for 229 kr */
  bundle?: { quantity: number; price: number };
  options: string[];
  addons: AddonId[];
  images: string[];
  available: boolean;
}

export const categories: Category[] = [
  {
    id: 'photo-gifts',
    name: 'Photo Gifts',
    tagline: 'Your photo, made into something you can hold',
    description:
      'Send us a photo or a few words and we turn it into a keychain, magnet, bookmark, glow panel or photo cube. You see a preview before anything is printed.',
    howItsMade: 'Printed in layers of colour so your photo appears in the plastic.',
    image: '~/assets/images/Gallery/keychain/PHOTO-2025-09-21-11-54-36.jpg',
  },
  {
    id: 'places',
    name: 'Places',
    tagline: 'Any place on Earth, in 3D',
    description:
      'Turn any place on Earth into a 3D art piece. The mountain range you hiked, the city you grew up in, a dream destination, or a spot with a special memory — we source the real terrain data and print it with precision. Share a place name, coordinates or a rough area, and we handle everything else.',
    image: '~/assets/images/Gallery/maps_cityscapes/trieste.jpg',
  },
  {
    id: 'lights',
    name: 'Lights',
    tagline: 'Lamps and lightboxes that glow',
    description:
      'Add character to your space. Choose a compact mini lamp for a desk or bedside, a full-size lamp for your living room, or a lightbox with your own text or logo. Each one casts a warm, cosy glow — and makes a genuinely unique gift.',
    image: '~/assets/images/Gallery/lamps/mini-lamps.jpg',
  },
];

export const addons: Addon[] = [
  {
    id: 'glow',
    name: 'Glow-in-the-dark finish',
    price: 29,
    description: 'Absorbs light during the day and glows softly in the dark.',
  },
  {
    id: 'nfc',
    name: 'NFC tag (tap to share a link or contact)',
    price: 39,
    description:
      'Tap any NFC-enabled phone to it to instantly share a contact, link or social profile — no app needed. Works with all modern smartphones.',
  },
  { id: 'giftbox', name: 'Gift box', price: 19 },
];

/** Shown on products that need a customer photo */
export const photoTip = 'A high-resolution photo works best (at least 1000 px). You can email it after sending your order.';

const IMG = '~/assets/images/Gallery';

export const products: Product[] = [
  // Photo Gifts
  {
    id: 'name-keychain',
    category: 'photo-gifts',
    name: 'Name keychain',
    shortDescription: 'A keychain with your name or short text, printed in the colour you pick.',
    price: 49,
    options: ['Your text', 'Colour from stock'],
    addons: ['nfc', 'giftbox'],
    images: ['~/assets/images/Models/After_BM_Keychain.jpg'],
    available: true,
  },
  {
    id: 'photo-keychain',
    category: 'photo-gifts',
    name: 'Photo keychain',
    shortDescription: 'Your favourite photo, printed as a keychain to carry every day.',
    price: 99,
    options: ['Your photo'],
    addons: ['glow', 'nfc', 'giftbox'],
    images: [`${IMG}/keychain/IMG_4973.jpg`, `${IMG}/keychain/PHOTO-2025-09-21-11-54-36.jpg`],
    available: true,
  },
  {
    id: 'photo-magnet',
    category: 'photo-gifts',
    name: 'Photo fridge magnet',
    shortDescription: 'Your photo as a fridge magnet. Order one, or a set of three.',
    price: 89,
    priceNote: 'set of 3: 229 kr',
    bundle: { quantity: 3, price: 229 },
    options: ['Your photo(s)'],
    addons: ['glow', 'nfc'],
    images: [],
    available: true,
  },
  {
    id: 'photo-bookmark',
    category: 'photo-gifts',
    name: 'Photo bookmark',
    shortDescription: 'A bookmark made from your photo, with optional text.',
    price: 89,
    options: ['Your photo', 'Optional text'],
    addons: ['glow', 'giftbox'],
    images: [
      `${IMG}/bookmarks/shameek.png`,
      `${IMG}/bookmarks/shameek2.png`,
      `${IMG}/bookmarks/Cat_Sticker_Bookmark.jpeg`,
      `${IMG}/bookmarks/IMG_5479.jpg`,
      `${IMG}/bookmarks/IMG_5480.jpg`,
    ],
    available: true,
  },
  {
    id: 'glow-panel',
    category: 'photo-gifts',
    name: 'Glow photo panel (~15×15 cm)',
    shortDescription: 'Your photo on a panel that glows in the dark, on a stand or a wall hook.',
    price: 199,
    options: ['Your photo', 'Stand or wall hook'],
    addons: ['giftbox'],
    images: [],
    available: true,
  },
  {
    id: 'photo-cube',
    category: 'photo-gifts',
    name: 'Photo cube lightbox (5 photos, 10×10 cm)',
    shortDescription: 'A lit cube with five of your photos that appear when the light is on.',
    price: 349,
    options: ['5 photos (monochrome, revealed in light)'],
    addons: ['giftbox'],
    images: [],
    available: true,
  },

  // Places
  {
    id: 'map-single',
    category: 'places',
    name: '3D map, 15×15 cm, single colour',
    shortDescription: 'Any city or place on Earth as a 3D map in one colour.',
    price: 249,
    options: ['Any location', 'Colour from stock'],
    addons: ['giftbox'],
    images: [`${IMG}/maps_cityscapes/IMG_4173.JPG`],
    available: true,
  },
  {
    id: 'map-multi',
    category: 'places',
    name: '3D map, 15×15 cm, multicolour',
    shortDescription: 'Any city or place on Earth as a 3D map, with parks, water and streets in colour.',
    price: 299,
    options: ['Any location'],
    addons: ['giftbox'],
    images: [
      `${IMG}/maps_cityscapes/1_Lux_Ville.jpg`,
      `${IMG}/maps_cityscapes/trieste.jpg`,
      `${IMG}/maps_cityscapes/spilimbergo.jpg`,
    ],
    available: true,
  },

  // Lights
  {
    id: 'mini-lamp',
    category: 'lights',
    name: 'Mini lamp',
    shortDescription: 'A small decorative lamp in the design and colour you choose.',
    price: 99,
    options: ['Design', 'Colour from stock'],
    addons: ['giftbox'],
    images: [`${IMG}/lamps/mini-lamps.jpg`, `${IMG}/lamps/mini-lamp_Circular.jpg`],
    available: true,
  },
  {
    id: 'lamp',
    category: 'lights',
    name: 'Lamp',
    shortDescription: 'A table lamp in the design and colour you choose.',
    price: 199,
    options: ['Design', 'Colour from stock'],
    addons: ['giftbox'],
    images: [`${IMG}/lamps/1_lamp.jpg`, `${IMG}/lamps/led_lamp.PNG`, `${IMG}/lamps/led_lamp2.PNG`],
    available: true,
  },
  {
    id: 'logo-lightbox',
    category: 'lights',
    name: 'Text / logo lightbox',
    shortDescription: 'Your text or logo in a lightbox that glows on a desk or shelf.',
    price: 249,
    options: ['Your text or logo'],
    addons: [],
    images: [
      `${IMG}/electronics/lightbox.jpg`,
      `${IMG}/lightbox/low_key/Image_1.png`,
      `${IMG}/lightbox/low_key/Image_3.png`,
      `${IMG}/lightbox/beyond_music/BM_1.png`,
      `${IMG}/lightbox/beyond_music/BM_3.png`,
    ],
    available: true,
  },

  // Custom & business (no fixed price; used by the order form and the /custom page).
  // Examples: owner's own branded work only — no downloaded models.
  {
    id: 'custom',
    category: null,
    name: 'Custom request / business order — quote',
    shortDescription: 'Branded keychains, logo lightboxes, large maps, workshops or anything else: ask for a quote.',
    price: null,
    options: [],
    addons: [],
    images: [
      `${IMG}/lightbox/beyond_music/BM_2.png`,
      `${IMG}/lightbox/low_key/Image_2.png`,
      `${IMG}/electronics/lightbox.jpg`,
      `${IMG}/lightbox/low_key/Image_4.png`,
      `${IMG}/fridge_magnets/IMG_4137.jpg`,
      `${IMG}/fridge_magnets/IMG_4140.jpg`,
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

export const formatPrice = (price: number) => `${price} kr`;
export const priceLabel = (product: Product) => (product.price === null ? 'Price on quote' : formatPrice(product.price));
export const lowestPrice = (id: CategoryId) =>
  Math.min(...productsInCategory(id).flatMap((p) => (p.price === null ? [] : [p.price])));

export const needsPhoto = (product: Product) => product.options.some((o) => /photo/i.test(o));

export const categoryPath = (id: CategoryId) => `/catalog/${id}`;
export const productPath = (product: Product) =>
  product.category ? `/catalog/${product.category}/${product.id}` : '/custom';
export const orderPath = (product: Product) => `/order?product=${product.id}`;

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
