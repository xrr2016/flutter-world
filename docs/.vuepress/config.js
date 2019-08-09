module.exports = {
  title: 'Flutter World',
  head: [
    ['meta', { rel: 'keywords', content: 'flutter, resources, learn, books' }],
    ['meta', { rel: 'description', content: 'flutter learning resources' }],
    ['meta', { rel: 'author', content: 'coldstone' }],
    ['meta', { rel: 'robots', content: 'index,follow' }],
    ['link', { rel: 'icon', href: '/favicon.png' }]
    // [
    //   'link',
    //   {
    //     rel: 'stylesheet',
    //     href:
    //       'https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.3/gh-fork-ribbon.min.css'
    //   }
    // ]
  ],
  themeConfig: {
    search: false,
    sidebar: 'auto',
    lastUpdated: '最后更新',
    repo: 'xrr2016/flutter-world',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    nav: [
      { text: 'Trending', link: '/trending/' },
      {
        text: 'Languages',
        items: [
          { text: '中文', link: '/cn/' },
          { text: 'English', link: '/en/' }
        ]
      }
    ]
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
