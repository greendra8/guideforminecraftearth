importScripts('/cache-pollyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('mceguide-offline').then(function(cache) {
     return cache.addAll([
         '/',
         '/index.html',
         '/css/style.css',
         '/1-start-here.html',
         '/2-getting-started.html',
         '/3-welcome-to-minecraft-earth.html',
         '/4-inventory',
         '/5-tappables.html',
         '/5.1-tappable-types.html',
         '/6-item-types.html',
         '/7-introduction-to-build-plates.html',
         '/8-building-with-friends.html',
         '/9-place-your-build.html',
         '/10-adventures.html',
         '/about.html',
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
         '/css/img/bg_bedrock.png'
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
