importScripts('/cache-pollyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('mceguide-offline').then(function(cache) {
     return cache.addAll([
         '/',
         '/index.php',
         'php/head.php',
         'php/header.php',
         '/css/style.css',
         '/css/img/bg_main.png',
         '/css/img/bg_bedrock.png',
         '/css/img/logo.png',
         '/1-start-here.php',
         '/2-getting-started.php',
         '/3-welcome-to-minecraft-earth.php',
         '/4-inventory.php',
         '/5-tappables.php',
         '/5.1-tappable-types.php',
         '/6-item-types.php',
         '/7-introduction-to-build-plates.php',
         '/8-building-with-friends.php',
         '/9-place-your-build.php',
         '/10-adventures.php',
         '/about.php',
         '/img/backpack.png',
         '/img/beacon.png',
         '/img/build-plate.png',
         '/img/chest.png',
         '/img/clock.png',
         '/img/crafting-table.png',
         '/img/diamond_pickaxe.png',
         '/img/door.png',
         '/img/friends.png',
         '/img/grass-tappable.png',
         '/img/item-types.png',
         '/img/mcearth.png',
         '/img/muddy-pig.png',
         '/img/stone-tappable.png',
         '/img/tree-tappable.png',
         '/img/wood-axe.png'
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
