import translations, { type Lang } from './translations';

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof translations['en']): string {
    const langTranslations = translations[lang] as Record<string, string>;
    const enTranslations = translations['en'] as Record<string, string>;
    return langTranslations[key] ?? enTranslations[key] ?? key;
  };
}

export function getLangFromUrl(url: URL): Lang {
  const segments = url.pathname.split('/');
  if (segments[1] === 'fr') return 'fr';
  return 'en';
}

export function getLocalizedUrl(path: string, lang: Lang): string {
  if (lang === 'en') return path;
  return `/fr${path}`;
}

export function getAlternateUrl(url: URL): string {
  const pathname = url.pathname;
  const isFrench = pathname === '/fr' || pathname.startsWith('/fr/');
  if (isFrench) {
    const withoutPrefix = pathname.slice(3);
    return withoutPrefix === '' ? '/' : withoutPrefix;
  }
  return pathname === '/' ? '/fr' : `/fr${pathname}`;
}
