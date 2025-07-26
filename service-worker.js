self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('welltegra-cache-v1').then(cache => {
      return cache.addAll([
        '/index.html',
        '/logo-192x192.png',
        '/logo-512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});