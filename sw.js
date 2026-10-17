self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // This satisfies the PWA install requirement without aggressive caching that might break updates
  event.respondWith(fetch(event.request));
});
