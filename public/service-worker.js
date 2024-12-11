self.addEventListener("fetch", (event) => {
  if (event.request.url.match(/\.wasm$/i)) {
    event.respondWith(
      fetch("https://compsys-pep.com/" + event.request.url.split("/").pop())
        .then((response) => {
          if (response.ok) {
            return response;
          }
          return caches.match(event.request);
        })
        .catch((err) => {
          console.error("Failed to fetch WASM file:", err);
          return caches.match(event.request);
        })
    );
  } else {
    event.respondWith(fetch(event.request));
  }
});
