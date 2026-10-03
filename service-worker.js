const CACHE = 'pookie-tracker-v2'
const SHELL = ['/', '/index.html', '/app.js', '/styles.css', '/manifest.webmanifest']

self.addEventListener('install', (event) => {
  self.skipWaiting()

  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(SHELL))
      .catch(() => {})
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return

  const url = new URL(event.request.url)

  const isImportantScript =
    url.pathname.endsWith('/app.js') ||
    url.pathname.endsWith('/sw.js')

  if (isImportantScript) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone()

          caches.open(CACHE)
            .then((cache) => cache.put(event.request, copy))

          return response
        })
        .catch(() => caches.match(event.request))
    )

    return
  }

  event.respondWith(
    caches.match(event.request)
      .then((cached) => cached || fetch(event.request))
  )
})
