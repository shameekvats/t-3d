import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://t-3d.me', // ← CHANGED: Your custom domain
  base: '/', // ← CHANGED: Root path for custom domain
  output: 'static',
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
  googleSiteVerificationId: '',
};

export const I18N = {
  language: 'en',
  textDirection: 'ltr',
};

export const METADATA = {
  title: {
    default: 'tattva-3d — 3d Printing Journey & Design Showcase',
    template: '%s — tattva-3d'
  },
  description: "Showcasing my 3d printing journey, custom designs, and modeling skills. From concept to creation.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    site_name: 'tattva-3d',
    images: [
      {
        url: '~/assets/images/default.png',
        width: 1200,
        height: 628,
      }
    ],
    type: 'website',
  },
  twitter: {
    handle: '@tattva3d',
    site: '@tattva3d',
    cardType: 'summary_large_image',
  },
};

export const ANALYTICS = {
  vendors: {
    googleAnalytics: {
      id: undefined,
    },
  },
};

export const APP_BLOG = {
  isEnabled: true,
  postsPerPage: 6,
  isRelatedPostsEnabled: true,
  relatedPostsCount: 4,
  post: {
    isEnabled: true,
    permalink: '/%slug%',
    robots: {
      index: true,
      follow: true,
    },
  },
  list: {
    isEnabled: true,
    pathname: 'blog',
    robots: {
      index: true,
      follow: true,
    },
  },
  category: {
    isEnabled: true,
    pathname: 'category',
    robots: {
      index: true,
      follow: true,
    },
  },
  tag: {
    isEnabled: true,
    pathname: 'tag',
    robots: {
      index: true,
      follow: true,
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
