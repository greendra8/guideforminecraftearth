importScripts('/cache-pollyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('mceguide-offline').then(function(cache) {
     return cache.addAll([
         '/',
         '/index.html',
         '/css/style.css',
         '/index.html',
         '/img/crafting-table.png',
         '/img/door.png',
         '/img/muddy-pig.png',
         '/img/backpack.png',
         '/img/chest.png',
         '/img/item-types.png',
         '/img/build-plate.png',
         '/img/friends.png',
         '/img/beacon.png',
         '/img/diamond_pickaxe.png',
         '/img/clock.png',
         '/css/img/bg_main2.png',
         '/css/img/bg_bedrock.png',
         'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap'
     ]);
   })
 );
});
self.addEventListener('fetch', function(event) {
 console.log(event.request.url);

 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});