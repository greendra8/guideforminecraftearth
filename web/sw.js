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

workbox.core.skipWaiting();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "about.php",
    "revision": "83165769275103c2857a72cdf577ab15"
  },
  {
    "url": "css/font/Minecraft.ttf",
    "revision": "ba1c2708d8c4295804f8015026e8d7ea"
  },
  {
    "url": "css/font/MinecraftBIG.ttf",
    "revision": "9a402d6a80ceda873798bf79af582916"
  },
  {
    "url": "css/font/OpenSans.ttf",
    "revision": "3ed9575dcc488c3e3a5bd66620bdf5a4"
  },
  {
    "url": "css/font/OpenSansBold.ttf",
    "revision": "1025a6e0fb0fa86f17f57cc82a6b9756"
  },
  {
    "url": "css/font/OpenSansItalic.ttf",
    "revision": "f6238deb7f40a7a03134c11fb63ad387"
  },
  {
    "url": "css/images/background_blurred.png",
    "revision": "39a7764a76c045a4ecabd7bbe7a09d74"
  },
  {
    "url": "css/style.css",
    "revision": "3978eb7e213e64c7fc14ed97ffe71fed"
  },
  {
    "url": "favicon.ico",
    "revision": "09b2579732651b5d75dacce5ed243f83"
  },
  {
    "url": "img/adventure_chest_common.png",
    "revision": "8735544ced67831825e39935e2c079e9"
  },
  {
    "url": "img/adventure_chest_legendary.png",
    "revision": "e17e4085e23aede0c3a5cc78f5d85c6f"
  },
  {
    "url": "img/adventure_common.png",
    "revision": "77a82e53d065d7abddb5d3318b5ef413"
  },
  {
    "url": "img/adventure_crystal_common.png",
    "revision": "9ca3e6f64fc8a7498e9580ad9fd00daf"
  },
  {
    "url": "img/adventure_crystal_epic_0.png",
    "revision": "23c16d0f2699c22ab6b72d767a940f3a"
  },
  {
    "url": "img/adventure_crystal_legendary_0.png",
    "revision": "1e57276be95980823b7da8d6cdc1a88b"
  },
  {
    "url": "img/adventure_crystal_rare_0.png",
    "revision": "5f6c52a95c8e78ffd1c0afa9cda20a52"
  },
  {
    "url": "img/adventure_crystal_uncommon.png",
    "revision": "a7255e63e3fb7c0aada2a540c4cbbc86"
  },
  {
    "url": "img/adventure_crystals.png",
    "revision": "6914819162f4e40b0e1df4fe0ddcb5fa"
  },
  {
    "url": "img/adventure_epic.png",
    "revision": "8a03d54300672b8a53192d68c53cb502"
  },
  {
    "url": "img/adventure_legendary.png",
    "revision": "35514844c8c8602444408bd71dd96723"
  },
  {
    "url": "img/adventure_rare.png",
    "revision": "d6d866dcc4066c646f035ddd278aa5f3"
  },
  {
    "url": "img/adventure_uncommon.png",
    "revision": "a03b4ef76666a33a2a6e7f04492434a2"
  },
  {
    "url": "img/backpack.png",
    "revision": "fde7a8eba6a2a40ab8ba584aaaa044f4"
  },
  {
    "url": "img/boosts.png",
    "revision": "eb4b5439d148a414cc017e41bc563591"
  },
  {
    "url": "img/buildplate.png",
    "revision": "d5b58ba0b0d2d4fcd2625373f578fc30"
  },
  {
    "url": "img/challenges_completed.png",
    "revision": "8bf282f210fee10b7eede93f5c2ac084"
  },
  {
    "url": "img/challenges.png",
    "revision": "eed4daa6772e5f2d08a188c208e009eb"
  },
  {
    "url": "img/chest_open.png",
    "revision": "c866cbcf59cbb51ecaf1f0c2e4d0803d"
  },
  {
    "url": "img/chicken.png",
    "revision": "6ff25868dbcadfc81e982239c01365cd"
  },
  {
    "url": "img/cluckshroom.png",
    "revision": "9bc6a9ae1e6dedf1a0b39ed181f03cff"
  },
  {
    "url": "img/cow.png",
    "revision": "214814001fad99de5057ba540f6f6698"
  },
  {
    "url": "img/crafting.png",
    "revision": "3eb1f7b89ca567b6fda9fd83dfb4c477"
  },
  {
    "url": "img/creeper.png",
    "revision": "48837b5b877c2abc6c0b5e9abfb356d9"
  },
  {
    "url": "img/diamond_ore.png",
    "revision": "95f96dea8a0034507b8c662fce50759d"
  },
  {
    "url": "img/diamond_sword.png",
    "revision": "264e4c76caa003fca52619093395c5cb"
  },
  {
    "url": "img/diamond.png",
    "revision": "5b77536171d0e20e63274f7fc35bba16"
  },
  {
    "url": "img/earth.png",
    "revision": "8924d49b3827c72029e190deb5f69df2"
  },
  {
    "url": "img/fish.png",
    "revision": "00ef56bc903ffbd54ecc6c163d563f09"
  },
  {
    "url": "img/food.png",
    "revision": "a565ecd2b9665dd03a05fb942ffcd7f4"
  },
  {
    "url": "img/friends.png",
    "revision": "84dec741d4ca64afc74b768df07c7bc3"
  },
  {
    "url": "img/grass-tappable.png",
    "revision": "0908ed6e12fdf1dbaa3280d1898a0cf1"
  },
  {
    "url": "img/grass-water-tappable.png",
    "revision": "c0d424e276893a5446d0902527b9a55e"
  },
  {
    "url": "img/grass.png",
    "revision": "89621babe1f76788b6fbd258c7e3cf5c"
  },
  {
    "url": "img/horned_sheep.png",
    "revision": "ac49398fec915c6f5dad08e0aa3d7414"
  },
  {
    "url": "img/inventory.png",
    "revision": "59535cbb7f45f73a7c01a0c9774646c7"
  },
  {
    "url": "img/jolly_lama.png",
    "revision": "fe143f67bb3ff01f63af31b9fed55196"
  },
  {
    "url": "img/journal.png",
    "revision": "b4d7578fd26fcfa8c5c0e9c83f41b6db"
  },
  {
    "url": "img/jumbo_rabbit.png",
    "revision": "cbb458f73563db03ad41e047a5181a65"
  },
  {
    "url": "img/log.png",
    "revision": "044d2b4326a20989e079892d0aa232d3"
  },
  {
    "url": "img/logo_t.png",
    "revision": "b82f11facc625ea3ccffda5c47c19d98"
  },
  {
    "url": "img/logo.png",
    "revision": "3f0862cd2f75aa8028194443485f4034"
  },
  {
    "url": "img/makinghub.png",
    "revision": "f0648673f82725a8df2141a8dae79066"
  },
  {
    "url": "img/mining.png",
    "revision": "616b0dc6c0a921e6d1147438b445eb1d"
  },
  {
    "url": "img/moobloom.png",
    "revision": "8eccb2c419f6cef8b5535c8af9ff889b"
  },
  {
    "url": "img/muddy_pig.png",
    "revision": "fdff016cb9a509e0dc7f2012fd4872a6"
  },
  {
    "url": "img/obsidian.png",
    "revision": "4262ab6d87abb791fde15d108d764fe9"
  },
  {
    "url": "img/ocelot.png",
    "revision": "f3dd6d2496dff222c893d27b3653d3e4"
  },
  {
    "url": "img/parrot.png",
    "revision": "6323232dba8fa4fafc7823ab056199e9"
  },
  {
    "url": "img/pig_black.png",
    "revision": "affae928cafe5ca46215a7d0f3e4061b"
  },
  {
    "url": "img/pig.png",
    "revision": "87dffd64975193139cf6b1338f74094f"
  },
  {
    "url": "img/planks.png",
    "revision": "269014c45bde73d95a6106f6a046a2f7"
  },
  {
    "url": "img/polarbear.png",
    "revision": "7b2036b1ce35e7e3c3471b76cd8c14a7"
  },
  {
    "url": "img/profile.png",
    "revision": "a5e91b73ee3541d61f199268807fc3b8"
  },
  {
    "url": "img/purple_cat.png",
    "revision": "773676d97eb43899c01ae7ca5ac7f41b"
  },
  {
    "url": "img/rabbit.png",
    "revision": "4f54022d09c0556195c552121b39467c"
  },
  {
    "url": "img/ruby.png",
    "revision": "ee6e844d15b922fcb86c787ba7288546"
  },
  {
    "url": "img/scan_code.png",
    "revision": "61c5eaefb21a5f5e92334353e13fce00"
  },
  {
    "url": "img/seasons.png",
    "revision": "9cd75af2f0d9bc286352d2e1dafd32bd"
  },
  {
    "url": "img/settings.png",
    "revision": "cf7f6001a673f8e1dc8888be911c5267"
  },
  {
    "url": "img/sheep.png",
    "revision": "ddde27fe28868c78bcfdf3ce2cb58e66"
  },
  {
    "url": "img/sign.png",
    "revision": "41cf704a839a23b2bb5bfafdfb15bdb7"
  },
  {
    "url": "img/skeleton.png",
    "revision": "6e3421220888a172c4bef72ff71b6092"
  },
  {
    "url": "img/skins.png",
    "revision": "12ef77937502900afdf07d5fbb593192"
  },
  {
    "url": "img/smelting.png",
    "revision": "2af0c95c64515c807649c64ce85b0d76"
  },
  {
    "url": "img/spawn_egg_111.png",
    "revision": "0bee6fe56850ca311b3218b7134c7856"
  },
  {
    "url": "img/spawn_egg_112.png",
    "revision": "92a820fb7932cbd1a62bbacc08af29c2"
  },
  {
    "url": "img/spawn_egg_5006.png",
    "revision": "034763a96dab3136acc2ed98a7025311"
  },
  {
    "url": "img/spawn_egg_5007.png",
    "revision": "dfc78e8a5131bf9a84d1c226c77b472f"
  },
  {
    "url": "img/spawn_egg_5008.png",
    "revision": "26f43d1075a01a430d0c0f5a0af67535"
  },
  {
    "url": "img/spawn_egg_5009.png",
    "revision": "ef58cb714f05a4e276c42cd5ce00d6bd"
  },
  {
    "url": "img/spawn_egg_5011.png",
    "revision": "e64e55eb19f7bda0d06faaf0ef803862"
  },
  {
    "url": "img/spawn_egg_5012.png",
    "revision": "545613887cd87223df2b8954979959b7"
  },
  {
    "url": "img/spawn_egg_5013.png",
    "revision": "29a5a9cc3c9511a24d705d0929b4dd9d"
  },
  {
    "url": "img/spawn_egg_5014.png",
    "revision": "621c5b33fe7c646dfe343b52b41094c1"
  },
  {
    "url": "img/spawn_egg_5015.png",
    "revision": "7993c5925580ab9a679643e5c7b8368b"
  },
  {
    "url": "img/spawn_egg_5020.png",
    "revision": "5f9bb11f5cef1b93d20437f8d6185ff5"
  },
  {
    "url": "img/spawn_egg_5022.png",
    "revision": "8bf95bbb14a2663c58c77730602740ff"
  },
  {
    "url": "img/spawn_egg_5023.png",
    "revision": "a11a7b3d441ef7899c115138179215e7"
  },
  {
    "url": "img/spawn_egg_5026.png",
    "revision": "95e8faea55c1bfd98fa5139f88c77608"
  },
  {
    "url": "img/spawn_egg_5028.png",
    "revision": "57335d5ce9f55ed8afd34241a921e4d9"
  },
  {
    "url": "img/spawn_egg_5031.png",
    "revision": "f82a29115e8fa4ef8830c9a6992b8710"
  },
  {
    "url": "img/spawn_egg_5033.png",
    "revision": "3a93ec335c80e75588a0db101232a4b7"
  },
  {
    "url": "img/spawn_egg_5040.png",
    "revision": "0a3f2a8d927de1bdc15a1513778d1ec4"
  },
  {
    "url": "img/spawn_egg_5041.png",
    "revision": "c9d7af046489d9722bea06a435cbe37c"
  },
  {
    "url": "img/spawn_egg_5047.png",
    "revision": "070fe4f1606ae53c35309ce4502c52ae"
  },
  {
    "url": "img/spawn_egg_5049.png",
    "revision": "2e70dcd1f728fe3f5aa4318284236932"
  },
  {
    "url": "img/spawn_egg_9.png",
    "revision": "9df7d302140f3c9cd173f6a8ab5f0574"
  },
  {
    "url": "img/spider.png",
    "revision": "5f0897721539c02e543a46935cb45539"
  },
  {
    "url": "img/spruce-tappable.png",
    "revision": "2118f1dcf6d1562d0943fb2346d1eb78"
  },
  {
    "url": "img/stone-tappable.png",
    "revision": "aec29f9a4c67134182db3565b370176e"
  },
  {
    "url": "img/store.png",
    "revision": "95dfe6042b18d99238c58bd537f2b811"
  },
  {
    "url": "img/tappable_challenge_legendary.png",
    "revision": "3407db56797093d413c17924de53b7a5"
  },
  {
    "url": "img/wooden_sword.png",
    "revision": "df0ba1a0d1996570a11e779c18610aa5"
  },
  {
    "url": "img/wooly_cow.png",
    "revision": "e68649ef202c1831dd111fa8242ca1df"
  },
  {
    "url": "img/xp.png",
    "revision": "8cff11e92653792cdac968d3f31443ca"
  },
  {
    "url": "img/zombie.png",
    "revision": "1766e1f26d7ab90b9c61fb9e6af3a6db"
  },
  {
    "url": "includes/head.php",
    "revision": "9004fac0327e4925a982fa4a78fdb3e6"
  },
  {
    "url": "includes/nav.php",
    "revision": "5029611de3ff5612c95113b7fc255a7a"
  },
  {
    "url": "index.php",
    "revision": "f6bd24814b0a0affb32beaa4fb827d0d"
  },
  {
    "url": "items.php",
    "revision": "3560a761ef85424917b41ae136b68e14"
  },
  {
    "url": "pages/adventures/index.php",
    "revision": "0e31636b76e78a5d34d330b6d394e32c"
  },
  {
    "url": "pages/adventures/squid_tank.php",
    "revision": "d0378c5beb3f4b25126a2c7294a4651f"
  },
  {
    "url": "pages/adventures/yin_yang.php",
    "revision": "6eb96aa30835fcdc485b0ed15b787716"
  },
  {
    "url": "pages/general/adventures.php",
    "revision": "ef3adca261c5793f5db31fb08bbb20c8"
  },
  {
    "url": "pages/general/challenges.php",
    "revision": "04809e93de43804412e874c2d529d226"
  },
  {
    "url": "pages/general/introduction.php",
    "revision": "83a1d857c7416e47e4f8da23419e55ab"
  },
  {
    "url": "pages/general/inventory.php",
    "revision": "d1ac80ded767f9398e01f11a10919efc"
  },
  {
    "url": "pages/general/journal.php",
    "revision": "0a5299c39f9e8161a2396d17225ef7d3"
  },
  {
    "url": "pages/general/profile.php",
    "revision": "e2edfbfab0c8cb19697cb6fa5a737441"
  },
  {
    "url": "pages/general/seasons.php",
    "revision": "3f74810617a0b677645e758a6f18be9b"
  },
  {
    "url": "pages/general/tappables.php",
    "revision": "4651aa79948ddd341c6b9849b512f748"
  },
  {
    "url": "pwa/app.js",
    "revision": "97fd1dd77a37c16a30751aa9add0968e"
  },
  {
    "url": "/",
    "revision": "199f1cf797b229db6eb96183d7f19307"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
