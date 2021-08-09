const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Hokusai API refrence',
  tagline: 'The world’s most powerful and easy-to-use NFT APIs',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'JapanMonobundle Inc.', // Usually your GitHub org/user name.
  projectName: 'Hokusai API Documents', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Hokusai API refrence',
      logo: {
        alt: 'Hokusai Logo',
        src: 'img/hokusai.png',
      },
      items: [
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Hokusai Logo',
        src: 'img/hokusai.png',
      },
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
          editUrl:
            'https://github.com/0xhokusai/hokusai-api-docs/edit/main/website/',
          routeBasePath: '/',
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
      },
    ],
    [
      'redocusaurus',
      {
        debug: Boolean(process.env.DEBUG || process.env.CI),
        specs: [
          {
            specUrl: 'https://0xhokusai.github.io/swagger-github-pages/swagger.yaml',
            routePath: '/',
          },
        ],
        theme: {
          primaryColor: '#1890ff',
          redocOptions: { hideDownloadButton: false },
        },
      },
    ],
  ],
};
