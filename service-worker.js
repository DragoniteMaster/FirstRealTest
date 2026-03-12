self.addEventListener('install', function(event){
event.waitUntil(
caches.open('catalogo-cache').then(function(cache){
return cache.addAll([
'/catalogo.html',
'/manifest.json',
'/gengar.png'
]);
})
);
});

self.addEventListener('fetch', function(event){
event.respondWith(
caches.match(event.request).then(function(response){
return response || fetch(event.request);
})
);
});