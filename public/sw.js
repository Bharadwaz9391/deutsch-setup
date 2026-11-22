// Deutsch Setu service worker.
// The app is online-only (agreed), so this worker does NOT cache pages.
// It exists so Android Chrome treats the site as an installable app.

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

// Pass every request straight to the network.
self.addEventListener("fetch", () => {});
