module.exports = {
  title: 'Flutter World',
  head: [
    ['meta', { rel: 'keywords', content: 'flutter, resources' }],
    ['meta', { rel: 'robots', content: 'index,follow' }],
    ['link', { rel: 'icon', href: '/favicon.png' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.3/gh-fork-ribbon.min.css'
      }
    ]
  ],
  locales: {},
  themeConfig: {
    search: false,
    sidebar: 'auto',
    lastUpdated: '最后更新'
  },
  plugins: [
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
