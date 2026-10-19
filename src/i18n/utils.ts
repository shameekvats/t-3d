import translations, { defaultLang, type Lang, type UiKey } from './translations';
import { withTrailingSlash } from '../utils/slash';

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return translations[lang][key] ?? translations[defaultLang][key] ?? key;
  };
}

export function getLangFromUrl(url: URL): Lang {
  const first = url.pathname.split('/')[1];
  return first === 'da' ? 'da' : 'en';
}

/** Prefix an English path with the language (Danish lives under /da with the same slugs); always ends in a slash */
export function getLocalizedUrl(path: string, lang: Lang): string {
  if (lang === 'en') return withTrailingSlash(path);
  return withTrailingSlash(path === '/' ? '/da' : `/da${path}`);
}

/** The same page in every language, e.g. { en: '/catalog', da: '/da/catalog' } */
export function getLanguageUrls(url: URL): Record<Lang, string> {
  const path = url.pathname.replace(/\/$/, '') || '/';
  const enPath = path === '/da' ? '/' : path.startsWith('/da/') ? path.slice(3) : path;
  return { en: getLocalizedUrl(enPath, 'en'), da: getLocalizedUrl(enPath, 'da') };
}

/** og:locale for each language */
export const ogLocale: Record<Lang, string> = { en: 'en_GB', da: 'da_DK' };
