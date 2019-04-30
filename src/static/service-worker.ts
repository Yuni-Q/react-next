    
//This is the "Offline page" service worker

//Install stage sets up the offline page in the cache and opens a new cache
self.addEventListener("install", function(event: any) {
  var offlinePage = new Request("/");
  event.waitUntil(
    fetch(offlinePage).then(function(response) {
      return caches.open("pwabuilder-offline").then(function(cache) {
        console.log("Page cached " + response.url);
        return cache.put(offlinePage, response);
      });
    })
  );
});

self.addEventListener("fetch", function(event: any) {
  event.respondWith(
    fetch(event.request).catch(function(error) {
      console.error("Serving Offline " + error);
      return caches.open("pwabuilder-offline").then(function(cache) {
        return cache.match("/");
      });
    })
  );
});