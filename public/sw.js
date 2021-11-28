let CACHE_NAME = "codePwa";

// caching for offline experience. Important network call can be added here to not affect experience
var urlCache = [
  "/static/js/bundle.js",
  "/static/js/vendors~main.chunk.js",
  "/static/js/main.chunk.js",
  "/manifest.json",
  "/favicons/apple-touch-icon.png",
  "/favicons/android-chrome-192x192.png",
  "favicons/android-chrome-512x512.png",
  "/PWA.jpg",
  "/PWA.png",
  "/static/media/logo.6ce24c58.svg",
  "/home",
  "article",
  "https://jsonplaceholder.typicode.com/comments",
  "https://mocki.io/v1/ffbdd52e-e44f-4bbd-950c-12cab418b363",
  "https://orangevalleycaa.org/api/videos",
];

/// install service worker
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlCache);
    })
  );
});

// fetch cache data

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    console.log("offline");
    if (event.request.url === "http://localhost:3000/static/js/main.chunk.js") {
      event.waitUntil(
        this.registration.showNotification("modeNet", {
          body: "Offline",
          icon: "http://localhost:3000/logo192.png",
        })
      );
    }
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          return response;
        }
        let fUrl = event.request.clone();
        fetch(fUrl);
      })
    );
  }
});

this.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function (cacheNames) {})
          .map(function (cacheNames) {
            return caches.delete(cacheNames);
          })
      );
    })
  );
});
