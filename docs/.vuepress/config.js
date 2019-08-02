module.exports = {
  title: 'Flutter World',
  head: [
    ['meta', { rel: 'keywords', content: 'flutter, resources' }],
    ['meta', { rel: 'robots', content: 'index,follow' }],
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  locales: {},
  themeConfig: {
    sidebar: 'auto',
    lastUpdated: '最后更新'
  },
  plugins: [
    '@vuepress/pwa',
    '@vuepress/active-header-links',
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-119658292-3'
      }
    ]
  ],
  evergreen: true
}
