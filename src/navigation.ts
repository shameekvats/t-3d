import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Gallery',
      href: getPermalink('/gallery'),
    },
    {
      text: '3D Models',
      href: getPermalink('/models'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'tattva-3d',
      links: [
        { text: 'Home', href: '/' },
        { text: 'Gallery', href: '/gallery' },
        { text: '3D Models', href: '/models' },
        { text: 'Contact', href: '/contact' },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: `
    Made with ❤️ by tattva-3d. All rights reserved.
  `,
};
