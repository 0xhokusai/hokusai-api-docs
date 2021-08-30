const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Hokusai API Documents',
  tagline: 'The world’s most powerful and easy-to-use NFT APIs',
  url: 'https://docs.hokusai.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'JapanMonobundle Inc.', // Usually your GitHub org/user name.
  projectName: 'Hokusai API Documents', // Usually your repo name.
  themeConfig: {
    metadatas: [
      { name: 'og:url', content: 'https://docs.hokusai.app' },
      { name: 'og:title', content: 'Hokusai API Documents' },
      { name: 'og:description', content: 'The world’s most powerful and easy-to-use NFT APIs' },
      { name: 'og:image', content: 'https://docs.hokusai.app/img/ogp.png' },
      { name: 'og:image:alt', content: 'Hokusai Logo' },
      { name: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@0xHokusai' },
      { name: 'twitter:title', content: 'Hokusai API Documents' },
      { name: 'twitter:description', content: 'The world’s most powerful and easy-to-use NFT APIs' },
      { name: 'twitter:image', content: 'https://docs.hokusai.app/img/ogp.png' },
      { name: 'twitter:image:alt', content: 'Hokusai Logo' },
    ],
    navbar: {
      title: 'Hokusai API Documents',
      logo: {
        alt: 'Hokusai Logo',
        src: 'img/hokusai.png',
      },
      items: [
        {
          to: '/api',
          position: 'left',
          label: 'API Document',
        },
        {
          to: '/get-started',
          position: 'left',
          label: 'Get Started',
        },
        {
          to: '/usecase',
          position: 'left',
          label: 'Usecase',
        },
        {
          href: 'https://github.com/0xhokusai/hokusai-api-docs',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Medium',
              href: 'https://0xhokusai.medium.com/',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/34fmuE25G2',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/0xHokusai',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'LP',
              href: 'https://hokusai.app/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/0xhokusai',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} JapanMonobundle Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/0xhokusai/hokusai-api-docs/edit/main/website/',
          routeBasePath: '/api',
          sidebarCollapsed: false,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/0xhokusai',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        pages: {
          path: 'src/pages',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
          exclude: ['**/_*.{js,jsx,ts,tsx,md,mdx}', '**/_*/**', '**/*.test.{js,jsx,ts,tsx}', '**/__tests__/**',],
          mdxPageComponent: '@theme/MDXPage',
          remarkPlugins: [],
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['ja', 'en'],
    localeConfigs: {
      ja: {
        label: '日本語',
        direction: 'ltr',
      },
      en: {
        label: 'English',
        direction: 'ltr',
      },
    }
  },
  plugins: [
    ['@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 640, // max resized image's size.
        min: 300, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
      }
    ]
  ]
};
