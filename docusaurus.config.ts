import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Code in Levels",
  tagline: "Master Coding, One Level at a Time",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://www.codeinlevels.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "HasanGokce", // Usually your GitHub org/user name.
  projectName: "codeinlevels", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "nodejs",
        path: "nodejs",
        routeBasePath: "nodejs",
        sidebarPath: "./sidebars.ts",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "javascript",
        path: "javascript",
        routeBasePath: "javascript",
        sidebarPath: "./sidebars.ts",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "typescript",
        path: "typescript",
        routeBasePath: "typescript",
        sidebarPath: "./sidebars.ts",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "python",
        path: "python",
        routeBasePath: "python",
        sidebarPath: "./sidebars.ts",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "ml",
        path: "ml",
        routeBasePath: "ml",
        sidebarPath: "./sidebars.ts",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "ai",
        path: "ai",
        routeBasePath: "ai",
        sidebarPath: "./sidebars.ts",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "data-structures",
        path: "data-structures",
        routeBasePath: "data-structures",
        sidebarPath: "./sidebars.ts",
      },
    ],
  ],
  themeConfig: {
    announcementBar: {
      id: "support_us",
      content:
        'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      backgroundColor: "#fafbfc",
      textColor: "#091E42",
      isCloseable: true,
    },
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    breadcrumb: {
      show: false,
    },
    navbar: {
      title: "Code in Levels",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "right",
          label: "Docs",
        },
        { to: "/nodejs", label: "NODEJS", position: "left" },
        // { to: "/blog", label: "Blog", position: "right" },
        // { to: "/javascript", label: "JAVASCRIPT", position: "left" },
        // { to: "/typescript", label: "TYPESCRIPT", position: "left" },
        // { to: "/python", label: "PYTHON", position: "left" },
        // { to: "/ai", label: "AI", position: "left" },
        // { to: "/ml", label: "ML", position: "left" },
        // { to: "/data-structures", label: "DATA STRUCTURES", position: "left" },
        {
          href: "https://github.com/HasanGokce/codeinlevels",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Code in Levels, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
