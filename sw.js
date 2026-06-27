/* Made in Xiaolin — service worker.
 * Required for the app to be installable (Add to Home Screen) and to launch
 * fullscreen/standalone. Caches the shell so it opens offline too.
 *
 * IMPORTANT: app code/content (app.js, data.js, styles.css, gates.js) is served
 * NETWORK-FIRST so content updates always reach users immediately. The cache is
 * only an offline fallback. (A previous cache-first version pinned stale files in
 * users' browsers, so deploys appeared not to "carry over".) Bump CACHE to purge
 * old caches on activate. */
var CACHE = "xiaolin-v3";
var CORE = [
  "./", "index.html", "app.js", "data.js", "styles.css",
  "gates.css", "gates.js", "a2hs.js", "manifest.json",
  "img/xiaolin-logo.png", "img/icon-192.png", "img/icon-512.png",
  "img/gate-doors.jpg"
];

self.addEventListener("install", function(e){
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function(c){
    // Cache best-effort — one missing asset must not abort install.
    return Promise.all(CORE.map(function(u){ return c.add(u).catch(function(){}); }));
  }));
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){ return k === CACHE ? null : caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

// Network-first for navigations AND same-origin app files (always latest when
// online; fall back to cache offline). Cache-first only for cross-origin assets
// (fonts, CDN images) which don't change.
self.addEventListener("fetch", function(e){
  var req = e.request;
  if (req.method !== "GET") return;
  var sameOrigin = new URL(req.url).origin === self.location.origin;

  if (req.mode === "navigate" || sameOrigin){
    e.respondWith(
      fetch(req).then(function(res){
        if (res && res.status === 200 && res.type === "basic"){
          var copy = res.clone(); caches.open(CACHE).then(function(c){ c.put(req, copy); });
        }
        return res;
      }).catch(function(){
        return caches.match(req).then(function(m){ return m || caches.match("index.html"); });
      })
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(function(m){
      return m || fetch(req).then(function(res){
        if (res && res.status === 200){
          var copy = res.clone(); caches.open(CACHE).then(function(c){ c.put(req, copy); });
        }
        return res;
      }).catch(function(){ return m; });
    })
  );
});
