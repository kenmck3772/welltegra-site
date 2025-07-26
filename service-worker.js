self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('welltegra-cache-v1').then(cache => {
      return cache.addAll([
        '/index_final.html',
        '/logo.png'
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