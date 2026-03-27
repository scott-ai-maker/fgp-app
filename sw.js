<<<<<<< HEAD
const CACHE = 'fgp-v1';

self.addEventListener('install', e => {
=======
const CACHE = 'fgp-v3';
const ASSETS = ['/fgp-app/', '/fgp-app/index.html', '/fgp-app/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS).catch(()=>{})));
>>>>>>> 86af152a04cfaf5d422f6ce6e786a91b46fbde4b
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
<<<<<<< HEAD
      Promise.all(keys.map(k => caches.delete(k)))
=======
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
>>>>>>> 86af152a04cfaf5d422f6ce6e786a91b46fbde4b
    )
  );
  self.clients.claim();
});

// Network first, cache fallback
self.addEventListener('fetch', e => {
<<<<<<< HEAD
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
=======
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
>>>>>>> 86af152a04cfaf5d422f6ce6e786a91b46fbde4b
});
