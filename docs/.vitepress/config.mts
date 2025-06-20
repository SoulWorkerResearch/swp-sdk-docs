import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SoulWorker plugin docs",
  description: "A SDK for SoulWorker plugin development",
  base: "/swp-sdk-docs/",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: '/favicon-32x32.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Quickstart', link: '/quickstart' }
    ],

    sidebar: [
      {
        text: 'Easy way',
        items: [
          { text: 'Template', link: '/quickstart/easy/template' },
        ]
      },
      {
        text: 'Manual installation',
        items: [
          { text: 'Create project', link: '/quickstart/manual/create-project' },
          { text: 'Dependencies', link: '/quickstart/manual/dependencies' },
          { text: 'Get SDK', link: '/quickstart/manual/get-sdk' },
          { text: 'Setup SDK', link: '/quickstart/manual/setup-sdk' },
          { text: 'Code', link: '/quickstart/manual/code' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
