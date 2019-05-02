importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
// sw.js
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox) {
  console.log(`Yay! The Service Worker is warming up 🎉`);
} else {
  console.log(`But it got a cold 😬`);
}
workbox.setConfig({debug: false})
// set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
  prefix: "light-pink",
  suffix: "v1",
  precache: "precache",
  runtime: "runtime-cache"
});

// default to `networkFirst` strategy
workbox.routing.setDefaultHandler(workbox.strategies.networkFirst());

// let Workbox handle our precache list
// NOTE: This will be populated by jekyll-workbox-plugin.
workbox.precaching.precacheAndRoute([{"url":"/index.html","revision":"50fe35de9eac205e3a6ebdac6c1273f6"},{"url":"/2019-05-01/first-artwork","revision":"21c13ec710ece2bcc16889952e31b3c5"},{"url":"/2019-04-30/hello-world","revision":"70908fcdd427a9f5b65d25612c916283"},{"url":"/2019-04-30/hello-world-italian","revision":"93983fdda4ece167fda0650f0ee4efcc"}]);

// use `Stale-while-revalidate` strategy for images and fonts.
workbox.routing.registerRoute(
  '/lightpinkblog/assets/',
  workbox.strategies.staleWhileRevalidate()
);
workbox.routing.registerRoute(
  'https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700',
  workbox.strategies.staleWhileRevalidate()
);
