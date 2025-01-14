// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const path = require("path")


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Zero to Flakes',
  tagline: 'A guide to writing modular Nix flakes for developing software and systems',
  favicon: 'img/logo.svg',

  // Set the production url of your site here
  url: 'https://zero-to-flakes.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'juspay', // Usually your GitHub org/user name.
  projectName: 'zero-to-flakes', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/juspay/zero-to-flakes/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [require.resolve(path.join(__dirname, '/plugins/symlink-resolver'))],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      /*
      announcementBar: {
        id: 'wip',
        content: 'Zero to Flakes is a <a href="/about">work in progress</a>.',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      */
      navbar: {
        title: 'Zero to Flakes',
        logo: {
          alt: 'Zero to Flakes Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Content',
          },
          {
            to: 'about',
            position: 'left',
            label: 'About',
          },
          {
            href: 'https://github.com/juspay/zero-to-flakes',
            label: 'GitHub',
            position: 'right',
          },
      ],
    },
    footer: {
      style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                to: '/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/nix',
              },
              {
                label: 'Matrix',
                href: 'http://app.element.io/#/room/%23zero-to-flakes:matrix.org',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/zerotoflakes',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/juspay/zero-to-flakes',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Juspay, Inc.`,
      },
      prism: {
        defaultLanguage: 'nix',
        additionalLanguages: ['haskell', 'nix', 'rust'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
