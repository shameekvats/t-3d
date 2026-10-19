import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

import { categories, catalogProducts } from './src/data/products';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://t-3d.me', // ← CHANGED: Your custom domain
  base: '/', // ← CHANGED: Root path for custom domain
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  image: {
    remotePatterns: [{ protocol: 'https' }],
  },
  redirects: {
    // French versions of the new catalog pages don't exist yet (Stage 6) — send the language switcher to /fr/catalog
    ...Object.fromEntries([
      ...categories.map((c) => `/fr/catalog/${c.id}`),
      ...catalogProducts().map((p) => `/fr/catalog/${p.category}/${p.id}`),
    ].map((from) => [from, '/fr/catalog'])),
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
    '/fr/portfolio': '/fr/catalog',
    '/fr/portfolio/bookmarks': '/fr/catalog/bookmarks',
    '/fr/portfolio/fridge-magnets': '/fr/catalog/fridge-magnets',
    '/fr/portfolio/glow-photos': '/fr/catalog/glow-photos',
    '/fr/portfolio/keychains': '/fr/catalog/keychains',
    '/fr/portfolio/lamps': '/fr/catalog/lamps',
    '/fr/portfolio/maps-cityscapes': '/fr/catalog/maps-cityscapes',
    '/fr/portfolio/cookie-cutters': '/fr/catalog',
    '/fr/portfolio/electronics': '/fr/catalog',
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
    '/fr/catalog/wireless-mouse': '/fr/catalog',
    '/fr/catalog/iphone-dock': '/fr/catalog',
    '/fr/catalog/cookie-cutters': '/fr/catalog',
    '/fr/catalog/clock': '/fr/catalog',
    // Old technique-based category pages (Stage 3)
    '/catalog/keychains': '/catalog/photo-gifts',
    '/catalog/bookmarks': '/catalog/photo-gifts',
    '/catalog/glow-photos': '/catalog/photo-gifts',
    '/catalog/fridge-magnets': '/catalog/photo-gifts',
    '/catalog/maps-cityscapes': '/catalog/places',
    '/catalog/lamps': '/catalog/lights',
    '/catalog/lightboxes': '/catalog/lights',
    // Legal pages exist in English only
    '/fr/terms': '/terms',
    '/fr/privacy': '/privacy',
    '/catalog/electronics': '/catalog',
    '/fr/catalog/electronics': '/fr/catalog',
    // Workshops temporarily suspended — remove these two redirects to unhide the workshop pages
    '/workshop': '/',
    '/workshop/thank-you': '/',
    '/fr/workshop': '/fr',
    '/fr/workshop/thank-you': '/fr',
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
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
  trailingSlash: false,
  googleSiteVerificationId: '7BP559-kvcXtG6PUq64np72RrwD4KrDAuE0uz5_KiJI',
};

export const I18N = {
  language: 'en',
  textDirection: 'ltr',
};

export const METADATA = {
  title: {
    default: 'tattva-3d — 3d Printing on demand',
    template: '%s — tattva-3d'
  },
  description: "Custom 3D printing service in Luxembourg. We create personalised gifts, business items, and creative keepsakes on demand.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    site_name: 'tattva-3d',
    type: 'website',
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
