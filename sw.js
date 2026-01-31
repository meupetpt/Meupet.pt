self.addEventListener('install', (event) => {
  console.log('Service Worker instalado.');
});

self.addEventListener('fetch', function(event){
  event.respondWith(fetch(event.request));
});
