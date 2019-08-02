/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7a29d44d292d4fd6bc4afafc27059762"
  },
  {
    "url": "assets/css/0.styles.15d1835d.css",
    "revision": "c8db107dd9c29db3d5a0912ad645fd13"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.f2abfd75.js",
    "revision": "18fe14dcc7ec6996a79fe3c7016f53f6"
  },
  {
    "url": "assets/js/3.4bb5a7d7.js",
    "revision": "d8abb97f7bfb1e102f82aa66d12b813d"
  },
  {
    "url": "assets/js/4.1de0d601.js",
    "revision": "3af6e9d3f772a3577564693d46c81be2"
  },
  {
    "url": "assets/js/5.1f844ed6.js",
    "revision": "00c9d10a6a1a93f9923f95a7122e1d06"
  },
  {
    "url": "assets/js/6.06d325f2.js",
    "revision": "1a4ca16acead95bcbc164f32e419b054"
  },
  {
    "url": "assets/js/7.1a66c5c4.js",
    "revision": "13029ca5fb8cc9e5aa12c140ae8cdd6a"
  },
  {
    "url": "assets/js/8.aac5efdd.js",
    "revision": "813f392e58c0a0e2e09db0918a84ff49"
  },
  {
    "url": "assets/js/app.64491b83.js",
    "revision": "c46269883375fcad44be1a2a90ff9785"
  },
  {
    "url": "favicon.png",
    "revision": "a2bd8783a265dbccb51f663b11af75c7"
  },
  {
    "url": "index.html",
    "revision": "606340c6bd8963c49d0d3a30cd45cf5f"
  },
  {
    "url": "udacity-logo.svg",
    "revision": "cb49864c4fb916af7152fae3534ce641"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
