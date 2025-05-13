// service-worker.js

const CACHE_NAME = 'bookheaven-v1'; const FILES_TO_CACHE = [ '/', '/index.html', '/style.css', '/script.js', '/manifest.json', '/icon-192.png', '/icon-512.png' ];

self.addEventListener('install', (event) => { console.log('[ServiceWorker] Install'); event.waitUntil( caches.open(CACHE_NAME).then((cache) => { console.log('[ServiceWorker] Caching app shell'); return cache.addAll(FILES_TO_CACHE); }) ); self.skipWaiting(); });

self.addEventListener('activate', (event) => { console.log('[ServiceWorker] Activate'); event.waitUntil( caches.keys().then((keyList) => { return Promise.all( keyList.map((key) => { if (key !== CACHE_NAME) { console.log('[ServiceWorker] Removing old cache', key); return caches.delete(key); } }) ); }) ); self.clients.claim(); });

self.addEventListener('fetch', (event) => { console.log('[ServiceWorker] Fetch', event.request.url); event.respondWith( caches.match(event.request).then((response) => { return response || fetch(event.request); }) ); });

