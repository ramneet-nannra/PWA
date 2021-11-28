let CACHE_NAME = "codePwa";

// caching for offline experience. Important network call can be added here to not affect experience
var urlCache = [
  "./",
  "./index.html",
  "/static/js/bundle.js",
  "/static/js/vendors~main.chunk.js",
  "/static/js/main.chunk.js",
  "/manifest.json",
  "/PWA.png",
  "https://jsonplaceholder.typicode.com/comments",
  "https://mocki.io/v1/ffbdd52e-e44f-4bbd-950c-12cab418b363",
  "https://orangevalleycaa.org/api/videos",
];

/// install service worker
this.addEventListener("install", (event) => {
  //perform install steps
  console.log("[Servicework] Install");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[ServiceWorker] Caching app shell");
      return cache.addAll(urlCache);
    })
  );
});

// fetch cache data

this.addEventListener("fetch", (event) => {
  
  console.log("[ServiceWorker] Fetch");
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

this.addEventListener("activate", function (event) {
  console.log("[Servicework] Activate");
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames
          .map(function (key) {
            if (key !== CACHE_NAME) {
              console.log("[ServiceWorker] Removing old cache shell", key);
            return caches.delete(key);
          }
      
    })
  );
})
  );
});