import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://shameekvats.github.io',
  base: '/t-3d',
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
  name: 'AstroWind',
  site: 'https://shameekvats.github.io',
  base: '/t-3d',
  trailingSlash: false,
  googleSiteVerificationId: '',
};

export const I18N = {
  language: 'en',
  textDirection: 'ltr',
};

export const METADATA = {
  title: {
    default: 'AstroWind — Free template for creating websites with Astro + Tailwind CSS',
    template: '%s — AstroWind'
  },
  description: "🚀 Suitable for Startups, Small Business, Sass Websites, Professional Portfolios, Marketing Websites, Landing Pages & Blogs.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    site_name: 'AstroWind',
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
    handle: '@onwidget',
    site: '@onwidget',
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
