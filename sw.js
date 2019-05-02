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
workbox.precaching.precacheAndRoute([]);

// use `Stale-while-revalidate` strategy for images and fonts.
workbox.routing.registerRoute(
  '/lightpinkblog/assets/',
  workbox.strategies.staleWhileRevalidate()
);
workbox.routing.registerRoute(
  'https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700',
  workbox.strategies.staleWhileRevalidate()
);
