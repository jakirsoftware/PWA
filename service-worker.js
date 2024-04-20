self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('your-app-cache')
            .then(cache => {
                return cache.addAll([
                    '/',
                    '/index.html',
                    '/styles.css', // Add your CSS files
                    '/script.js', // Add your JavaScript files
                    '/icon.png', // Add your icons and images
                ]);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
