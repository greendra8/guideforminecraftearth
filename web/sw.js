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
    "revision": "b6aa27cc24bc4ed87b2968418e0b2ab2"
  },
  {
    "url": "10-adventures.php",
    "revision": "0fd82e2f6b369d424d94fd033de42fef"
  },
  {
    "url": "2-getting-started.php",
    "revision": "2b38b6398705cc62023028e928772ad8"
  },
  {
    "url": "3-welcome-to-minecraft-earth.php",
    "revision": "4d961e06728fa2e4cf21881e31dd6a8c"
  },
  {
    "url": "4-inventory.php",
    "revision": "110869614b3374a29718ed32629a8224"
  },
  {
    "url": "5-tappables.php",
    "revision": "4adf82a8d56ef46872fa1ec7e96f46e1"
  },
  {
    "url": "5.1-tappable-types.php",
    "revision": "7183b7e44cd381760b8d1c034623ef76"
  },
  {
    "url": "6-item-types.php",
    "revision": "1b2ac3d1762ddc17877b33ac17e6f20a"
  },
  {
    "url": "7-introduction-to-build-plates.php",
    "revision": "0b351cc4d954e34981a5123958584dcf"
  },
  {
    "url": "8-building-with-friends.php",
    "revision": "44f6e7a2a77a52050ebe7b6f8a19d8ca"
  },
  {
    "url": "9-place-your-build.php",
    "revision": "33fd4fe445a1742a8c2320e95f6ded60"
  },
  {
    "url": "about.php",
    "revision": "b1aae41afef0a34b1038f8e0d3427684"
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
    "url": "css/img/logo.png",
    "revision": "3f0862cd2f75aa8028194443485f4034"
  },
  {
    "url": "css/style.css",
    "revision": "519dbfd6c88cba844b9536e66b52791e"
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
    "url": "img/build-plate.png",
    "revision": "866001d57e7476d85687f0dbaf682075"
  },
  {
    "url": "img/chest.png",
    "revision": "2e86bd05997b9dcebd6c41a175ad5ced"
  },
  {
    "url": "img/clock.png",
    "revision": "3f42c8eaaa307f2a603b5ac4003d292a"
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
    "url": "img/door.png",
    "revision": "cece1d73c1b26bea6940dfa4ca1bfc50"
  },
  {
    "url": "img/friends.png",
    "revision": "6ccd730cfe0214527d722adf8316886a"
  },
  {
    "url": "img/grass-tappable.png",
    "revision": "02bee737cd8345e59c42edfc7c45d801"
  },
  {
    "url": "img/item-types.png",
    "revision": "31453cb39e7132f27a3d6f418b54935c"
  },
  {
    "url": "img/mcearth.png",
    "revision": "e2d593f578d0e4b60da459bdb4c16062"
  },
  {
    "url": "img/muddy-pig.png",
    "revision": "a1eb60c22f631efbb8a94d796f5bf0c0"
  },
  {
    "url": "img/stone-tappable.png",
    "revision": "4f1ceb05dec581e5709fd5974671c83e"
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
    "url": "index.php",
    "revision": "152cad718c7f0f84a2bea1824a637a8c"
  },
  {
    "url": "php/head.php",
    "revision": "00c5be1ce9e83c9417d4eec92bf46640"
  },
  {
    "url": "php/header.php",
    "revision": "5e4aab922379a1ffd6a73ba84bb09e26"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
