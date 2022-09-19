'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c11fd6396ed16617c89d0f49b9a14cdd",
".git/config": "a9206f8c5770dab44cba16a1fee9e9b1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "996c478439febf16a96f9fd14bb86070",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "971b66915a37356e4bcffad5a4311c93",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ca077be6794f7edf5ba37b9140ab9873",
".git/logs/refs/heads/main": "984819cbdaebb167261c336372043315",
".git/logs/refs/heads/master": "910b4bbd5677953c5af37c2ee8622b24",
".git/logs/refs/remotes/origin/main": "0dfa7d2ff6db848c8eed2e116862c952",
".git/logs/refs/remotes/origin/master": "c4b54139a38da964420a4071682b11d8",
".git/objects/00/573d96558a8823291e6906edaf9e34c8703f5f": "0ac2cb35e43d8b562acd33c89768179f",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/11/0d6fe513e7b89a72329eea915deec0a84eda2e": "5450395b8ca8b19ad03a902f91e4f399",
".git/objects/11/fe2c342b94365ae742f8c614857441706fb529": "b6cd7f93bef2a2d35db34fb500f158f0",
".git/objects/13/f3b466fdcabcda2d8822720a732efc2211ce36": "7c9782198f25a7f742b630187553e40f",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1c/93e9eef52696f3b1fd0edc0d1ec653ee8c0e0b": "df4f57b6dc507f81cb4a2eb04d1955c4",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2d/3d913c9ea3aa9484b0a8916d65672f81d778fc": "2fca020111c73de33e2b32df5a571494",
".git/objects/35/1d3eb58f628518052375225f8f9fb04e047a7f": "f1e2ef7d827c4d8edfe609bdf8523c26",
".git/objects/3b/d9c116b1bfc7aa0a773ce394f82e433ff8a1e5": "60845e7686dccc647c6d39fd56add48b",
".git/objects/3c/3687e9d39f7dea6a3d2166f42c22115de7afb9": "da2980dd55f8cd557df47778b1c988ea",
".git/objects/3e/d18b53c1a4e3a2393c44d675732ef9c8d98398": "89dda1010c180c62c9411cdfa2a62112",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/4b/544a87be419049d3ab95ed2f060cf02e8f4a24": "5c81c59737dfd65decf4334513be3e3e",
".git/objects/53/29144e52385e5945e61fdbd6cab4ee761436dd": "1bc1fc3752b44de0ffe8e4b7679a3a80",
".git/objects/53/2c9197c63d07b230569a5e36ac55d3ea9e2ae1": "354ca97ab04471bdcfa787de2328f89c",
".git/objects/5a/f065994f0d7d66251a57f7ff7e0d31a0889f17": "ae24177ffde5ee222274f99292d86812",
".git/objects/5c/2d32d0b89534a9d0bd1fea4024240fe440a58c": "6038d2c66b7d38fd54b93ad8072f5943",
".git/objects/63/62441ca5f6573e6d24118a2e1b0d28d50c7c87": "cecaa4bec96a1edee179929848e25bd8",
".git/objects/65/bf7ec3546ccc3b290e6301a13479fb233a6006": "fec5757397685d74fae03b89b214d81f",
".git/objects/66/2518bf3860939d0de22517bf9bb3ef484ad223": "69ee8c4b23f155f289ef2251018d2aa5",
".git/objects/6b/b6be40996294ef7fbec411875656ed0f52aeed": "aa57c26c8f8a8e92ae79600f747e56ef",
".git/objects/6d/5a2beb93b8812d50a8adcc9b990a8d217cc017": "039779529b13f942da505d9ba146cb8a",
".git/objects/71/aba1c1995b86c9b34d2061ec6ffb100e0f4196": "ff7cdc1cce75d9afbfd1f6e47c3bf8b7",
".git/objects/72/5011adf0ac2d6675187f6608e71315476d371b": "640e249b075079175b5f3897035de441",
".git/objects/72/d81ab3b8b11e9f8baf863aa16a52bdf241d470": "ba700fef58b2baa5977ed9223d36dcaf",
".git/objects/75/4bdf4f13708e2bae99cd1a7c97727ccfe63a79": "c8e7a977d39ce3ffeb9240b0dbfb04e8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/279ab13cf7e30504508c597ae18dbdd1f35d96": "0badcf3d52854ccaccb0312a0d767b05",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/0e2a468c0d6920e32d3cd88ebc366315a78727": "2be4de074aff15c320dd87923476dae6",
".git/objects/7d/bece78c52c5df9bff391f2db6f08391bb09b04": "bb591aaef6935316b10a70188d1163a7",
".git/objects/7f/fa558c6ce85d2cde483425c7a4e0799c13c235": "55e97a883db7d893ce182f42d7030f2f",
".git/objects/80/74e3acb8a40dcb3e1aa35ae67be4a4fcaffa99": "593ac7aefb8ab1fede555f4106baa8b2",
".git/objects/80/fe1afc766657c58b791c1478d89b159ca0cd59": "093c79a9377d93c1e6d838c8aef67aa9",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/92/8aa3705e6b9c8a67fbb360e8efbd3dc2516791": "ab54a31109d847bc5e94fd2386966d31",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/98/e8579745c9afe420cb50d573ff4e93c93929a6": "3cf726d554936e50e416bccf583caa70",
".git/objects/99/dcc81f91a87e587736fc8c01f3429cb2871bff": "3b434ff27622b7a97ff61383bdbe3deb",
".git/objects/9b/0e83d314e11336c86807165d10c0365eeac1f6": "91eaaf8c7ec56e3d38bc531869a36610",
".git/objects/9c/3891b75910dff7c0093a24da82290e65f25c05": "a1dd8430d32800ca42fa6dfd307d522d",
".git/objects/9e/2d113f1ee31b34bca14c37493a36a17f1a2116": "8160145c73fcebf5e8a512176201228f",
".git/objects/a0/f1560604978fc30ab27387eb80883c08cf7657": "a54084ebe0a6f88958e3be1895849262",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/0ba4d3353ae6e593580e99429dde2b24ef0ab2": "2b559c103660d62235b3f0950954632d",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/b2/f0fd86913175854077e84dbec2f32e8d5a7d23": "3a15165cc6511f98882f64c1e500383c",
".git/objects/b3/8bae9472ef2901311f3c88f9b41cbf49004a0b": "6548bd0589e4519f3457256436de9eb6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/879af096f11b3404378e1ae9217f517c840747": "883f677a9763b41f4d7b088611e2e814",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/1b078b76619045c9096692d43c8c9231cea44c": "7e3cdd7cf5a2489750e60f36b082b046",
".git/objects/bc/e8032814227ed5865b38a7c719b77630052e3a": "dfbf003840a6ea16501993f595ba5571",
".git/objects/bf/cf460892db51eae85a01c1f7a9bacd1a5cfef7": "a8b3eb117dbb61ddcdd6d6ef26282839",
".git/objects/c6/30fb88477f018f416b7e96c05e79af8b773c9a": "c492c652c0d373745fc578ccc7e5828d",
".git/objects/c7/c89332d5f134fca0b8e7ea91e52b66c78121f1": "9b2254f3633eec4e812815be63250aba",
".git/objects/c8/3bf39bc6c4ac2306acc1e6491766f1cc2d6cf9": "8afa21e98551f61bae579b3743fe0f88",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/ce1f2339881323f3f14ded0111cd16f37be651": "2f604b0f71045090204edfe9a7e7a658",
".git/objects/db/759e0bc1d237465ddfdded0caecde910aeba8b": "691dc73b8b1f61af2e176d3a1b6b563b",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e3/f8c44f12b8c476426c231d9e54e335792ba563": "d49174e3164b89cb1581ca647aa00d43",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/a2efd2e35b4f1e7ac61d9011e6e93035cf2feb": "9934e87124802ab3482c7838fb9facf2",
".git/objects/f6/adb6989b302001a4112ec19dafa5fdd6adb62a": "db8f787c8e7be65042f2f7eca5c11bdd",
".git/ORIG_HEAD": "5ffb9b82447655c3b1ac18b448dca44e",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "a3a5ce64bdd087e0c405da2c644d9de0",
".git/refs/heads/master": "5ffb9b82447655c3b1ac18b448dca44e",
".git/refs/remotes/origin/main": "a3a5ce64bdd087e0c405da2c644d9de0",
".git/refs/remotes/origin/master": "5ffb9b82447655c3b1ac18b448dca44e",
"assets/AssetManifest.json": "6383fbb929bc0afc91e96219283b1c88",
"assets/assets/icons/switches_icon.svg": "67c4385a55ee310e7d9e8485e7d14f67",
"assets/assets/images/image0.jpg": "e1a46e722fcd3486bc9f1836de482313",
"assets/assets/images/image1.jpg": "7d1ff4365897f0e3a7c46316d17b99e4",
"assets/assets/images/image2.jpg": "7171269f71e1c39ec7e0ebe2b41016a6",
"assets/assets/images/image3.jpg": "e418f24387b8fe7efab82631ef013b3e",
"assets/assets/images/image4.jpg": "f2028db529fdf90b6ba1e26556280fce",
"assets/assets/images/image5.jpg": "cbb189f063b1490a13ebcd2bf70b942a",
"assets/assets/images/image6.jpg": "4bc47df2829bc5239859d372c9a24353",
"assets/assets/images/image7.jpg": "e2ac67e07d7b84468a7a0975bb405938",
"assets/assets/images/image8.jpg": "cbabfb69f8b0b16b039b869cb184531a",
"assets/assets/images/image9.jpg": "a9b3d6bf37e8fa653f6e7af836e75fd2",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/google_fonts/OFL.txt": "f20c9954e7a1c7c2c3d0fa94b7f5bed6",
"assets/google_fonts/SourceSansPro-Black.ttf": "6aac2bc43f7aa04f6b6fcb218b51bd6b",
"assets/google_fonts/SourceSansPro-BlackItalic.ttf": "119307649b6b56cff60007bc0427f682",
"assets/google_fonts/SourceSansPro-Bold.ttf": "09ad953751e1109778ece9318df70540",
"assets/google_fonts/SourceSansPro-BoldItalic.ttf": "6319587c04e562f16b4d37f7152ba02e",
"assets/google_fonts/SourceSansPro-ExtraLight.ttf": "9abcaabad7edf02f2033933f0a96221d",
"assets/google_fonts/SourceSansPro-ExtraLightItalic.ttf": "71bc3fb711b39e83bd24ad7f7775369e",
"assets/google_fonts/SourceSansPro-Italic.ttf": "b556f79ff1e9821d6e27ba9b4a985842",
"assets/google_fonts/SourceSansPro-Light.ttf": "e7208e0bdca1887f658b9ac66c988a95",
"assets/google_fonts/SourceSansPro-LightItalic.ttf": "9e85b157c839285dbef77b21566eced0",
"assets/google_fonts/SourceSansPro-Regular.ttf": "47dbe5824a2d82b794ef1f52809699a5",
"assets/google_fonts/SourceSansPro-SemiBold.ttf": "c1b4f417cf21451e85a0baccbfd8edc8",
"assets/google_fonts/SourceSansPro-SemiBoldItalic.ttf": "9128546958b012c8991fc25bf89b1962",
"assets/NOTICES": "06c61d0705188ad0eed36c4fbc342071",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "38effed6e0e7ba84ea436232b9748996",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "50b3d7c8262f1324fe4c8451da06aa5f",
"/": "50b3d7c8262f1324fe4c8451da06aa5f",
"main.dart.js": "f52374e3832fd7e714a3a8bfc0833f1d",
"manifest.json": "215c1cfdd49a1415a8d2e3bfadab2360",
"version.json": "01729ccaba3d88ef792cbc0fa11625ea"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
