// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require("prism-react-renderer").themes.github;
// const darkCodeTheme = require("prism-react-renderer").themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Xtim's Blog",
  tagline: "Dinosaurs are cool",
  favicon: "img/ghost.png",

  // Set the production url of your site here
  url: "https://xxxxtim-github-io.vercel.app/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "xxxxtim", // Usually your GitHub org/user name.
  projectName: "xxxxtim.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "jp"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // declare meta tag and add google console search
      metadata: [
        {
          name: "google-site-verification",
          content: "w5D743PiP-nV9ZnG0E5Toy5BvqICaFPVfmEpVf3gRDU",
        },
      ],
      // algolia
      algolia: {
        apiKey: "6b0350e5ee04f55607d446e9e24d3264",
        indexName: "Docusaurus-Algolia",
        appId: "ZQMOYX9HDW",
      },
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Yenting Wang",
        logo: {
          alt: "My Site Logo",
          //src: "img/logo.svg", //nav 頭貼
          src: "img/ghost.png",
        },
        items: [
          {
            to: "/profile",
            label: " 👤 Profile",
            position: "left",
          },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: " </> Blog",
          },

          {
            to: "/blog",
            label: "Notes",
            position: "left",
          },

          {
            type: "localeDropdown",
            position: "right",
          },

          {
            href: "https://github.com/xxxxtim",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
      footer: {
        // style: "dark",
        // links: [
        //   {
        //     title: "Docs",
        //     items: [
        //       {
        //         label: "Tutorial",
        //         to: "/docs/intro",
        //       },
        //     ],
        //   },
        //   {
        //     title: "Community",
        //     items: [
        //       {
        //         label: "Discord",
        //         href: "https://discordapp.com/invite/docusaurus",
        //       },
        //     ],
        //   },
        //   {
        //     title: "More",
        //     items: [
        //       {
        //         label: "Tourism",
        //         to: "/blog",
        //       },
        //       {
        //         label: "GitHub",
        //         href: "https://github.com/xxxxtim",
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        // darkTheme: darkCodeTheme,
        // theme: lightCodeTheme,
      },
    }),
};

module.exports = config;
