import { getPermalink, getAsset } from './utils/permalinks';

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
      href: getPermalink('/3d-models'),
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
        { text: 'Home', href: getPermalink('/') },
        { text: 'Gallery', href: getPermalink('/gallery') },
        { text: '3D Models', href: getPermalink('/3d-models') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Contact Us', href: getPermalink('/contact') },
        { text: 'Email', href: 'mailto:t-3d@ik.me' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { 
      ariaLabel: 'Instagram', 
      icon: 'tabler:brand-instagram', 
      href: 'https://instagram.com/your-instagram-handle',
      text: '',
    },
  ],
  footNote: `
    Made with ❤️ by tattva-3d. All rights reserved.
  `,
};
