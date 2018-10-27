console.log("thanks bud");

this.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('restaurant-reviews').then(function (cache) {
            return cache.addAll([
                '/',
                // '//normalize-css.googlecode.com/svn/trunk/normalize.css',
                "css/styles.css",
                "https://unpkg.com/leaflet@1.3.1/dist/leaflet.css",
                "https://unpkg.com/leaflet@1.3.1/dist/leaflet.js",
                "js/dbhelper.js",
                "js/register.js",
                "js/main.js"
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) return response;
            return fetch(event.request);
        })
    )
});