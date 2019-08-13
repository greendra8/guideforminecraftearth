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
    "revision": "f4b8428c991cca2d8dec4d0a86895d7f"
  },
  {
    "url": "10-adventures.php",
    "revision": "53f3cf4b029e5c39e065bdb736f21cfa"
  },
  {
    "url": "2-getting-started.php",
    "revision": "ec9ec4aa519669437031556b30515c4f"
  },
  {
    "url": "3-welcome-to-minecraft-earth.php",
    "revision": "c8be54107d7c520a918167132f02043d"
  },
  {
    "url": "4-inventory.php",
    "revision": "79e881db2d8bd56e934892cd5ccce90a"
  },
  {
    "url": "5-tappables.php",
    "revision": "5860edaa699da4bb8cffb3798c3a9a6b"
  },
  {
    "url": "5.1-tappable-types.php",
    "revision": "16491c27ad502413285e85a14599e7bf"
  },
  {
    "url": "6-item-types.php",
    "revision": "e4fc432f4734f00a48e6adc2cb03dd56"
  },
  {
    "url": "7-introduction-to-build-plates.php",
    "revision": "6c222b6b4ab7a3733bf72d208111431d"
  },
  {
    "url": "8-building-with-friends.php",
    "revision": "3be088be3f471ac0b2d088400e5d8eb9"
  },
  {
    "url": "9-place-your-build.php",
    "revision": "4e6aebaf747aacb1b533f7a91d4300cb"
  },
  {
    "url": "about.php",
    "revision": "65dcea6ef43fb73e16056c8da67bc049"
  },
  {
    "url": "cache-pollyfill.js",
    "revision": "5a2415672e22d366bda5aa34666acfdb"
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
    "revision": "46beb1f2b21b4869fb0006707f990df9"
  },
  {
    "url": "css/style.css",
    "revision": "3be9f56f735ad2a660c3cceefa148bdc"
  },
  {
    "url": "error.html",
    "revision": "046413c835e47a147eadb95fb99994d7"
  },
  {
    "url": "favicon.ico",
    "revision": "8f90178ad7f95fa9d7f6abb9ffef2898"
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
    "revision": "31b6770a1d969ac85f5ac52c86fad090"
  },
  {
    "url": "php/head.php",
    "revision": "30fe803f11302589a46bd5a8e3ef0cde"
  },
  {
    "url": "php/header.php",
    "revision": "5e4aab922379a1ffd6a73ba84bb09e26"
  },
  {
    "url": "sw_old.js",
    "revision": "92a0b1448357090e397458577d56924c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
