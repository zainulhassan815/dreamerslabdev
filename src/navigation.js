import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Blog',
      links: [
        {
          text: 'All Posts',
          href: getBlogPermalink(),
        },
        {
          text: 'Categories',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tags',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
  ],
};

export const footerData = {
  // secondaryLinks: [
  //   { text: 'Terms', href: getPermalink('/terms') },
  //   { text: 'Privacy Policy', href: getPermalink('/privacy') },
  // ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/zainulhassan815' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/zain-ul-hassan-1986321a0' },
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@DreamersLab' },
    { ariaLabel: 'UpWork', icon: 'tabler:brand-upwork', href: 'https://www.upwork.com/freelancers/~0141070652aeb1f2af' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/zainulhassan815' },
  ],
  footNote: `
    All rights reserved.
  `,
};
