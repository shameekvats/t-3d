import { getPermalink, getAsset } from './utils/permalinks';
import { getLocalizedUrl } from './i18n/utils';
import type { Lang } from './i18n/translations';

export function getHeaderData(lang: Lang = 'en') {
  const nav = {
    en: { home: 'Home', portfolio: 'Catalog', workshop: 'Workshop', contact: 'Contact' },
    fr: { home: 'Accueil', portfolio: 'Catalogue', workshop: 'Atelier', contact: 'Contact' },
  }[lang];

  return {
    links: [
      { text: nav.home, href: getLocalizedUrl('/', lang) },
      { text: nav.portfolio, href: getLocalizedUrl('/catalog', lang) },
      { text: nav.workshop, href: getLocalizedUrl('/workshop', lang), badge: lang === 'fr' ? 'GRATUIT' : 'FREE' },
      { text: nav.contact, href: getLocalizedUrl('/contact', lang) },
    ],
  };
}

export function getFooterData(lang: Lang = 'en') {
  const labels = {
    en: { brand: 'tattva-3d', support: 'Support', contactUs: 'Contact Us', email: 'Email', note: 'Made with ❤️ by tattva-3d. All rights reserved.' },
    fr: { brand: 'tattva-3d', support: 'Assistance', contactUs: 'Nous Contacter', email: 'Email', note: 'Fait avec ❤️ par tattva-3d. Tous droits réservés.' },
  }[lang];

  return {
    links: [
      {
        title: labels.brand,
        links: [
          { text: lang === 'fr' ? 'Accueil' : 'Home', href: getLocalizedUrl('/', lang) },
          { text: lang === 'fr' ? 'Catalogue' : 'Catalog', href: getLocalizedUrl('/catalog', lang) },
          { text: lang === 'fr' ? 'Atelier' : 'Workshop', href: getLocalizedUrl('/workshop', lang) },
          { text: 'Contact', href: getLocalizedUrl('/contact', lang) },
        ],
      },
      {
        title: labels.support,
        links: [
          { text: labels.contactUs, href: getLocalizedUrl('/contact', lang) },
          { text: labels.email, href: 'mailto:t-3d@ik.me' },
        ],
      },
    ],
    secondaryLinks: [
      { text: lang === 'fr' ? 'Conditions' : 'Terms', href: getPermalink('/terms') },
      { text: lang === 'fr' ? 'Confidentialité' : 'Privacy Policy', href: getPermalink('/privacy') },
    ],
    socialLinks: [
      {
        ariaLabel: 'Instagram',
        icon: 'tabler:brand-instagram',
        href: 'https://www.instagram.com/tattva_3d/',
        text: '',
      },
    ],
    footNote: labels.note,
  };
}

// Keep backwards-compatible exports for any files that still import the old names
export const headerData = getHeaderData('en');
export const footerData = getFooterData('en');
