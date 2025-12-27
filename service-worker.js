const CACHE_NAME = "reporte-afac-v1";

const ARCHIVOS = [
    "./",
    "./index.html",
    "./manifest.json",
    "./AFAC.jpeg",
    "./SCIT.jpeg",
    "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js"
];

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ARCHIVOS))
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(resp => resp || fetch(e.request))
    );
});
