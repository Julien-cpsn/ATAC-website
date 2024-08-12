import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {PluginOptions} from "@easyops-cn/docusaurus-search-local";
import {getFourLatestVersion, getLatestVersion} from "./version";

const config: Config = {
  title: 'ATAC',
  tagline: '{A}rguably a {T}erminal {A}PI {C}lient',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://atac.julien-cpsn.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Julien-cpsn', // Usually your GitHub org/user name.
  projectName: 'ATAC', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
      }) satisfies PluginOptions,
    ]
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/Julien-cpsn/ATAC-website/tree/main/',
          lastVersion: getLatestVersion(),
          onlyIncludeVersions: getFourLatestVersion()
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // TODO Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'ATAC',
      logo: {
        alt: 'ATAC logo',
        src: 'img/crossed_swords.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: 'download',
          label: 'Download',
          position: 'left'
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
          dropdownActiveClassDisabled: true,
        },
        {
          href: 'https://github.com/Julien-cpsn/ATAC',
          position: 'right',
          className: 'github-link',
          'aria-label': 'GitHub repository',
        },
        {
          href: 'https://discord.gg/WpTGyvFWFa',
          position: 'right',
          className: 'discord-link',
          'aria-label': 'Discord server',
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
              label: 'Getting started',
              to: '/docs/getting-started/installation',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/WpTGyvFWFa',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Julien-cpsn/ATAC',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Julien Caposiena. Built with Docusaurus.`,
    },
    tableOfContents: {
      maxHeadingLevel: 4,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['toml'],
    },
  } satisfies Preset.ThemeConfig,

  plugins: ['docusaurus-node-polyfills']
};

export default config;
