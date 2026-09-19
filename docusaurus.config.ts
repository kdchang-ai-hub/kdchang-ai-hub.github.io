import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// Docusaurus runs this config once per locale, so site-level metadata that
// cannot go through the i18n JSON files (title / tagline / keywords) is
// switched here instead.
const currentLocale = process.env.DOCUSAURUS_CURRENT_LOCALE ?? "zh-Hant";
const isEn = currentLocale === "en";

const config: Config = {
  title: isEn
    ? "KD AI Hub - The friendliest AI self-learning platform for everyone"
    : "KD AI Hub 自學 AI 補給站",
  tagline: isEn
    ? "You don't need to code to get really good at AI. A learning roadmap of AI tools, prompts and workflows, starting from zero."
    : "你不用會寫程式，也能把 AI 用得很好。從零開始的 AI 工具、提示詞、Vibe Coding 與工作流學習地圖和學習資源整理。",
  favicon: "/img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://ai.kdchang.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: "/",
  trailingSlash: false,
  deploymentBranch: "gh-pages",
  // GitHub pages deployment config.
  organizationName: "kdchang-ai-hub", // Usually your GitHub org/user name.
  projectName: "kdchang-ai-hub.github.io", // repo

  onBrokenLinks: "throw",

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang.
  i18n: {
    defaultLocale: "zh-Hant",
    locales: ["zh-Hant", "en"],
    localeConfigs: {
      "zh-Hant": {
        label: "繁體中文",
        htmlLang: "zh-Hant-TW",
        direction: "ltr",
      },
      en: {
        label: "English",
        htmlLang: "en-US",
        direction: "ltr",
      },
    },
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        googleTagManager: {
          containerId: "GTM-WNNDRKJZ",
        },
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/resources",
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: "ALL",
          blogSidebarTitle: "所有文章",
          postsPerPage: 12,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: undefined,
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        // index hash
        hashed: true,
        // language
        language: ["en", "zh"],
        // highlight term
        highlightSearchTermsOnTargetPage: true,
        // docs route base path
        docsRouteBasePath: "/resources",
        blogRouteBasePath: "/blog",
        // The search bar is wrapped in a dialog by src/theme/SearchBar, which
        // owns the Cmd/Ctrl+K shortcut and its hint.
        searchBarShortcut: false,
        searchBarShortcutHint: false,
      },
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: "https://ai.kdchang.com/img/icon-512.png",
    metadata: [
      {
        name: "keywords",
        content: isEn
          ? "learn AI, AI tools, prompts, prompt engineering, ChatGPT, Claude, Gemini, AI tutorial, generative AI, AI workflow, AI at work"
          : "AI 自學, AI 工具, 提示詞, Prompt, ChatGPT, Claude, Gemini, AI 教學, 生成式 AI, AI 工作流, 職場 AI",
      },
    ],
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "KD AI Hub 自學 AI 補給站",
      logo: {
        alt: "KD AI Hub 自學 AI 補給站 - 最新手友善的 AI 自學平台 Logo",
        src: "img/icon-512.png",
      },
      items: [
        { to: "/start", label: "新手起步", position: "left" },
        { to: "/roadmap", label: "學習地圖", position: "left" },
        {
          type: "docSidebar",
          sidebarId: "resourceSidebar",
          position: "left",
          label: "學習資源",
        },
        { to: "/blog", label: "最新文章", position: "left" },
        { to: "/about", label: "關於本站", position: "left" },
        {
          href: "https://www.happyprompt.net",
          label: "HappyPrompt",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "開始學習",
          items: [
            { label: "新手起步", to: "/start" },
            { label: "學習地圖", to: "/roadmap" },
            { label: "學習資源", to: "/resources" },
            { label: "名詞速查", to: "/resources/glossary" },
          ],
        },
        {
          title: "熱門主題",
          items: [
            { label: "AI 工具圖鑑", to: "/resources/ai-tools" },
            { label: "提示詞庫", to: "/resources/prompts" },
            { label: "職場應用", to: "/resources/use-cases" },
            { label: "最新文章", to: "/blog" },
          ],
        },
        {
          title: "關於",
          items: [
            { label: "關於本站", to: "/about" },
            { label: "隱私權政策", to: "/privacy" },
            { label: "Contact Us", to: "mailto:kdchang.labs@gmail.com" },
            { label: "KD LABs", href: "https://labs.kdchang.com" },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} KD AI Hub｜AI 自學補給站. Built with ❤️ by <a target="_blank" href="https://www.kdchang.com">KD Chang</a> in Taiwan.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
