import { getLocalizedUrl, useTranslations } from './i18n/utils';
import type { Lang } from './i18n/translations';

export function getHeaderData(lang: Lang = 'en') {
  const t = useTranslations(lang);
  return {
    links: [
      { text: t('nav.home'), href: getLocalizedUrl('/', lang) },
      { text: t('nav.catalog'), href: getLocalizedUrl('/catalog', lang) },
      { text: t('nav.custom'), href: getLocalizedUrl('/custom', lang) },
      // Workshop temporarily suspended — re-add a link here to unhide it
      { text: t('nav.order'), href: getLocalizedUrl('/order', lang) },
    ],
  };
}

export function getFooterData(lang: Lang = 'en') {
  const t = useTranslations(lang);
  return {
    links: [
      {
        links: [
          { text: t('nav.home'), href: getLocalizedUrl('/', lang) },
          { text: t('nav.catalog'), href: getLocalizedUrl('/catalog', lang) },
          { text: t('nav.custom'), href: getLocalizedUrl('/custom', lang) },
          { text: t('nav.order'), href: getLocalizedUrl('/order', lang) },
          { text: t('footer.email'), href: 'mailto:t-3d@ik.me' },
        ],
      },
    ],
    secondaryLinks: [
      { text: t('footer.terms'), href: getLocalizedUrl('/terms', lang) },
      { text: t('footer.privacy'), href: getLocalizedUrl('/privacy', lang) },
    ],
    socialLinks: [
      {
        ariaLabel: 'Instagram',
        icon: 'tabler:brand-instagram',
        href: 'https://www.instagram.com/tattva_3d/',
        text: '',
      },
    ],
    footNote: t('footer.note'),
  };
}
