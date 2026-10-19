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
}

export interface Addon {
  id: AddonId;
  name: string;
  price: number;
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
  options: string[];
  addons: AddonId[];
  images: string[];
  available: boolean;
}

export const categories: Category[] = [
  { id: 'photo-gifts', name: 'Photo Gifts', tagline: 'Your photo, made into something you can hold' },
  { id: 'places', name: 'Places', tagline: 'Any place on Earth, in 3D' },
  { id: 'lights', name: 'Lights', tagline: 'Lamps and lightboxes that glow' },
];

export const addons: Addon[] = [
  { id: 'glow', name: 'Glow-in-the-dark finish', price: 29 },
  { id: 'nfc', name: 'NFC tag (tap to share a link or contact)', price: 39 },
  { id: 'giftbox', name: 'Gift box', price: 19 },
];

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

  // Custom & business (no fixed price; used by the order form and the Custom page)
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
      `${IMG}/fridge_magnets/IMG_4137.jpg`,
      `${IMG}/fridge_magnets/IMG_4140.jpg`,
    ],
    available: true,
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
export const getAddon = (id: AddonId) => addons.find((a) => a.id === id);
export const productsInCategory = (id: CategoryId) => products.filter((p) => p.category === id && p.available);
