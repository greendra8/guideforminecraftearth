/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1-start-here.php",
    "revision": "4553d4274045d038bf340ebda723a306"
  },
  {
    "url": "10-rubies.php",
    "revision": "269c0daabcd8248f6d8635b2be260010"
  },
  {
    "url": "11-adventures.php",
    "revision": "ad1466ce2eba6bce4e195e0d0d182711"
  },
  {
    "url": "2-getting-started.php",
    "revision": "bf13cbdd95ba209aa6b16e593d482cbb"
  },
  {
    "url": "3-welcome-to-minecraft-earth.php",
    "revision": "88424cca6cc9dfc03ecd7e2a9f93f80f"
  },
  {
    "url": "3.1-profile.php",
    "revision": "e042a0f7ce61ece6d2c58c10a51648fe"
  },
  {
    "url": "4-inventory.php",
    "revision": "720c2230c7d483efbe94cdf6f6c96878"
  },
  {
    "url": "5-tappables.php",
    "revision": "a41ac944589fff218ab5fb8e6d5840b9"
  },
  {
    "url": "5.1-tappable-types.php",
    "revision": "a241336110e39f3a7347d3d40df7508a"
  },
  {
    "url": "6-item-types.php",
    "revision": "152785c799f04c45fce901aa44032457"
  },
  {
    "url": "7-introduction-to-build-plates.php",
    "revision": "ae8f9458d59af36f37dcf666d77471b2"
  },
  {
    "url": "8-build-modes.php",
    "revision": "93550e9a33e6d27ac7519f0ca7e16023"
  },
  {
    "url": "9-multiplayer.php",
    "revision": "fa52bc4062e345d21bfbe8aa1b1fb63a"
  },
  {
    "url": "about.php",
    "revision": "a838e38eab1b1489c4a5f2f8056f887e"
  },
  {
    "url": "css/img/bg_bedrock.png",
    "revision": "11724ddb1762dab4b44f3b69babe20a4"
  },
  {
    "url": "css/img/bg_main.png",
    "revision": "0b8147dc876a0857fde9cea978602fca"
  },
  {
    "url": "css/img/bg.png",
    "revision": "694905666e633ac6cf2647c407bdf303"
  },
  {
    "url": "css/img/logo.png",
    "revision": "3f0862cd2f75aa8028194443485f4034"
  },
  {
    "url": "css/style.css",
    "revision": "6e61dfb3ca451904e7d051247fe025b0"
  },
  {
    "url": "css/style1.css",
    "revision": "6fd01edbf0fc0c83daa80732ef2dfb2e"
  },
  {
    "url": "error.html",
    "revision": "3d944b80765b030e722f2d8dd62f0029"
  },
  {
    "url": "favicon.ico",
    "revision": "09b2579732651b5d75dacce5ed243f83"
  },
  {
    "url": "img/backpack.png",
    "revision": "e9bcc37d63f73dcbdd8e8bf3b1615589"
  },
  {
    "url": "img/beacon.png",
    "revision": "cfe9a08966e6b28fafeed178b290f7f5"
  },
  {
    "url": "img/build-button.png",
    "revision": "ed718921e33d601435396ae9cebab365"
  },
  {
    "url": "img/build-plate.png",
    "revision": "9412e3345641bb6c09163a0676c2f3e2"
  },
  {
    "url": "img/challenges.png",
    "revision": "8a5ad5b70c5fc2468e7e1b358e4accc2"
  },
  {
    "url": "img/chest.png",
    "revision": "5caf96d053964b5d9b180486e14c48c7"
  },
  {
    "url": "img/clock.png",
    "revision": "3f42c8eaaa307f2a603b5ac4003d292a"
  },
  {
    "url": "img/crafting-smelting.png",
    "revision": "63dbef09927673eafacf41b59aec04ab"
  },
  {
    "url": "img/crafting-table.png",
    "revision": "f4a3252a449cc6a95f6f74ff58fdaee0"
  },
  {
    "url": "img/diamond_pickaxe.png",
    "revision": "ecb55a3dfe5385e352c84b4bef4643dc"
  },
  {
    "url": "img/door_old.png",
    "revision": "cece1d73c1b26bea6940dfa4ca1bfc50"
  },
  {
    "url": "img/door.png",
    "revision": "cd0b98184ed54b4dec8f071ff5f6832b"
  },
  {
    "url": "img/friends.png",
    "revision": "c87debb44116552f87203358bd6c87e4"
  },
  {
    "url": "img/grass-tappable.png",
    "revision": "02bee737cd8345e59c42edfc7c45d801"
  },
  {
    "url": "img/inventory.png",
    "revision": "4f239a75dc1ae8fef646f1d1fe4f7b41"
  },
  {
    "url": "img/item-types.png",
    "revision": "79bd493e3f76e9dfbc51bdf3aaa600aa"
  },
  {
    "url": "img/mcearth.png",
    "revision": "e2d593f578d0e4b60da459bdb4c16062"
  },
  {
    "url": "img/minecon.png",
    "revision": "d7d10178bfd81cc55b8c7b94cad60ad3"
  },
  {
    "url": "img/muddy-pig.png",
    "revision": "8092b5a6fa614a0fe58b13b41789147c"
  },
  {
    "url": "img/play-mode-button.png",
    "revision": "b3ec32b62813d8f374633545777298bc"
  },
  {
    "url": "img/profile-icon.png",
    "revision": "5b23efe395068e0b26623e824f37fe98"
  },
  {
    "url": "img/ruby.png",
    "revision": "01adc859a21f9c7a0410681870b25cf4"
  },
  {
    "url": "img/sign.png",
    "revision": "6cc7fee029c05eaf269c1f47b10bb65c"
  },
  {
    "url": "img/skins.png",
    "revision": "e8b5aed3933d67208f628273f01b647f"
  },
  {
    "url": "img/stone-tappable.png",
    "revision": "4f1ceb05dec581e5709fd5974671c83e"
  },
  {
    "url": "img/store.png",
    "revision": "780007fad700730038722369eb0a448b"
  },
  {
    "url": "img/switches.png",
    "revision": "1dab7535e2d3c9df3a891dc748cc457a"
  },
  {
    "url": "img/test.png",
    "revision": "14d0494723e783f04ba0e3ae1ad5c66f"
  },
  {
    "url": "img/thumbs/build-plate.png",
    "revision": "6a1fefb32ce34d8acdeacb3d447738fb"
  },
  {
    "url": "img/thumbs/crafting-table.png",
    "revision": "c4d1edfa1dbf071c3c63358c3bf9a12e"
  },
  {
    "url": "img/thumbs/diamond-pickaxe.png",
    "revision": "cd5f97ebdb37c99035b9fb68cdae2868"
  },
  {
    "url": "img/thumbs/friends.png",
    "revision": "da3af54a77f1cc1e679385fa1d7928dc"
  },
  {
    "url": "img/thumbs/grass-tappable.png",
    "revision": "67a0e66b467bae9ae1e1756d0a9148fa"
  },
  {
    "url": "img/thumbs/inventory.png",
    "revision": "5ff6761c357de718bb6d672e0b1059db"
  },
  {
    "url": "img/thumbs/item-types.png",
    "revision": "53193e95a801786e9f3ffb22c1e4b64f"
  },
  {
    "url": "img/thumbs/ruby.png",
    "revision": "08ae1e352e91bda9ce22476676a7d416"
  },
  {
    "url": "img/thumbs/skins.png",
    "revision": "60a178a8241fae5262d7b863782b9bc6"
  },
  {
    "url": "img/thumbs/stone-tappable.png",
    "revision": "542164b46f213aa9b21df0b56c3e9bd3"
  },
  {
    "url": "img/thumbs/switches.png",
    "revision": "071447988249f7c7a5c51f7545077ef9"
  },
  {
    "url": "img/tree-tappable.png",
    "revision": "67f8dd668a8cae7fa9ca453cd8e4b524"
  },
  {
    "url": "img/wood-axe.png",
    "revision": "0d9421a9f5bdb79cdfce51d04bab82a1"
  },
  {
    "url": "index_old.php",
    "revision": "095d677ac9e3ca411d8573ad268b96ee"
  },
  {
    "url": "index.php",
    "revision": "c88cb171e39a71fb702a1c06b9cf7c1f"
  },
  {
    "url": "php/head.php",
    "revision": "17d9cb33da1373a2ad899254000d4710"
  },
  {
    "url": "php/header.php",
    "revision": "8b6d7fbc08cda90b4b580ef3bd6c5175"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
