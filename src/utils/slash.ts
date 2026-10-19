/**
 * GitHub Pages serves every page at /path/ and answers /path with a 301, so internal links
 * end in a slash to skip that hop. Query strings and hashes are kept: /order?x=1 -> /order/?x=1.
 * Paths whose last segment has a file extension (e.g. /sitemap-index.xml) are left alone.
 */
export const withTrailingSlash = (url: string): string => {
  const match = url.match(/^([^?#]*)(.*)$/)!;
  const [, path, rest] = match;
  if (path === '' || path.endsWith('/') || /\.[a-z0-9]+$/i.test(path.split('/').pop() ?? '')) return url;
  return `${path}/${rest}`;
};
