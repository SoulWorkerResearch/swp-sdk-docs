import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  // site config
  lang: "en-US",
  title: "SoulWorker plugin SDK",
  description: "Just playing around",
  base: "/swp-sdk-docs/",

  // theme and its config
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
    sidebar: [
      {
        text: "Guide",
        children: [
          "/guide/",
          "/guide/install-deps",
          "/guide/install-sdk",
          "/guide/create",
          "/guide/run",
        ],
      },
    ],
  },
});
