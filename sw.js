var cacheName = "lista-tarefa";
var fileTocache = [
    '/',
    '/index.html',
    '/css/style.css',
    '/scripts/app.js',
    '/scripts/appDB.js',
    '/scripts/tableController.js',
    '/scripts/tableModels.js',
    '/scripts/tableView.js',
    '/scripts/taskDAO.js',
    '/scripts/taskModel.js'
];

self.addEventListener('install', function(e){
    e.waitUntil(
        caches.open(cacheName).then(function(cache){
            return cache.addAll(fileTocache);
        })
    );
});

self.addEventListener('fetch', function(e){
    e.respondWith(
        caches.match(e.request).then(function(response){
            return response || fetch(e.request);
        })
    );
});