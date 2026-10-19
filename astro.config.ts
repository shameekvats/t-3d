import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

import { categories, catalogProducts } from './src/data/products';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const enRedirects: Record<string, string> = {
  // Old template / portfolio URLs
  '/gallery': '/catalog',
  '/3d-models': '/catalog',
  '/models': '/catalog',
  '/about': '/',
  '/portfolio': '/catalog',
  '/portfolio/custom': '/catalog',
  '/portfolio/bookmarks': '/catalog/photo-gifts',
  '/portfolio/fridge-magnets': '/catalog/photo-gifts',
  '/portfolio/glow-photos': '/catalog/photo-gifts',
  '/portfolio/keychains': '/catalog/photo-gifts',
  '/portfolio/lamps': '/catalog/lights',
  '/portfolio/maps-cityscapes': '/catalog/places',
  '/portfolio/cookie-cutters': '/catalog',
  '/portfolio/electronics': '/catalog',
  '/portfolio-new': '/catalog',
  '/portfolio-old-backup': '/catalog',
  '/portfolio-gallery-backup': '/catalog',
  '/decapcms': '/',
  '/homes/mobile-app': '/',
  '/homes/personal': '/',
  '/homes/saas': '/',
  '/homes/startup': '/',
  '/landing': '/',
  '/landing/click-through': '/',
  '/landing/lead-generation': '/',
  '/landing/pre-launch': '/',
  '/landing/product': '/',
  '/landing/sales': '/',
  '/landing/subscription': '/',
  // Removed AstroWind demo pages and blog (Stage 1)
  '/pricing': '/',
  '/services': '/',
  '/blog': '/',
  '/category/documentation': '/',
  '/category/tutorials': '/',
  '/tag/astro': '/',
  '/tag/blog': '/',
  '/tag/front-end': '/',
  '/tag/landing-pages': '/',
  '/tag/markdown': '/',
  '/tag/resources': '/',
  '/tag/tailwind-css': '/',
  '/tag/theme': '/',
  '/tag/tools': '/',
  '/astrowind-template-in-depth': '/',
  '/get-started-website-with-astro-tailwind-css': '/',
  '/how-to-customize-astrowind-to-your-brand': '/',
  '/markdown-elements-demo-post': '/',
  '/useful-resources-to-create-websites': '/',
  // Products no longer sold (Stage 1)
  '/catalog/wireless-mouse': '/catalog',
  '/catalog/iphone-dock': '/catalog',
  '/catalog/cookie-cutters': '/catalog',
  '/catalog/clock': '/catalog',
  // Old technique-based category pages (Stage 3)
  '/catalog/keychains': '/catalog/photo-gifts',
  '/catalog/bookmarks': '/catalog/photo-gifts',
  '/catalog/glow-photos': '/catalog/photo-gifts',
  '/catalog/fridge-magnets': '/catalog/photo-gifts',
  '/catalog/maps-cityscapes': '/catalog/places',
  '/catalog/lamps': '/catalog/lights',
  '/catalog/lightboxes': '/catalog/lights',
  // Contact merged into the order form (Stage 4)
  '/contact': '/order',
  // Legal pages exist in English only
  '/catalog/electronics': '/catalog',
  // Workshops temporarily suspended — remove these two redirects to unhide the workshop pages
  '/workshop': '/',
  '/workshop/thank-you': '/',
};

// English pages (same slugs are served in Danish under /da)
const enPages = [
  '/',
  '/catalog',
  ...categories.map((c) => `/catalog/${c.id}`),
  ...catalogProducts().map((p) => `/catalog/${p.category}/${p.id}`),
  '/custom',
  '/order',
  '/order/thank-you',
  '/terms',
  '/privacy',
];

// French was dropped in Stage 6: send every old /fr URL (pages and redirects) to its English equivalent
const frRedirects = Object.fromEntries([
  ['/fr', '/'],
  ...enPages.filter((p) => p !== '/').map((p) => [`/fr${p}`, p]),
  ...Object.entries(enRedirects).map(([from, to]) => [`/fr${from}`, to]),
]);

export default defineConfig({
  site: 'https://t-3d.me', // ← CHANGED: Your custom domain
  base: '/', // ← CHANGED: Root path for custom domain
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'da'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  image: {
    remotePatterns: [{ protocol: 'https' }],
  },
  redirects: {
    ...enRedirects,
    ...frRedirects,
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', da: 'da' } },
    }),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),
  ],
  vite: {
    resolve: {
      alias: {
        '~': new URL('./src', import.meta.url).pathname,
      },
    },
    define: {
      __DATE__: `'${new Date().toISOString()}'`,
    },
    plugins: [
      {
        name: 'astrowind-config',
        resolveId(id) {
          if (id === 'astrowind:config') {
            return id;
          }
        },
        load(id) {
          if (id === 'astrowind:config') {
            return `
export const SITE = {
  name: 'tattva-3d',
  site: 'https://t-3d.me', // ← CHANGED: Your custom domain
  base: '/', // ← CHANGED: Root path for custom domain
  trailingSlash: true, // GitHub Pages serves pages at /path/ (it 301s /path), so canonical and hreflang URLs end in a slash
  googleSiteVerificationId: '7BP559-kvcXtG6PUq64np72RrwD4KrDAuE0uz5_KiJI',
};

export const I18N = {
  language: 'en',
  textDirection: 'ltr',
};

export const METADATA = {
  title: {
    default: 'tattva-3d — 3D-printed personal gifts in Aalborg',
    template: '%s | tattva-3d'
  },
  description: "Personal 3D printed gifts made to order in Aalborg, Denmark: photo gifts, 3D maps, lamps and lightboxes. Preview first, pay at pickup.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    site_name: 'tattva-3d',
    type: 'website',
    // Default share image (1200×630), made from real product photos
    images: [{ url: '~/assets/images/og-default.jpg', width: 1200, height: 630 }],
  },
};

export const ANALYTICS = {
  vendors: {
    googleAnalytics: {
      id: undefined,
    },
  },
};


export const UI = {
  theme: 'system',
};
            `;
          }
        },
      },
    ],
  },
});
