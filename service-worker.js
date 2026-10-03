/* ============================================================
   POOKIE PERSONAL TRACKER
   Service Worker
   Cache version 2
   ============================================================ */

const CACHE_NAME =
  "pookie-personal-tracker-v2";

const ASSETS = [

  "./",

  "./index.html",

  "./styles.css",

  "./app.js",

  "./manifest.json",

  "./icon.svg"

];


/* ============================================================
   INSTALL
   ============================================================ */

self.addEventListener(
  "install",
  event => {

    event.waitUntil(

      caches
        .open(
          CACHE_NAME
        )
        .then(
          cache =>
            cache.addAll(
              ASSETS
            )
        )

    );

    self.skipWaiting();

  }
);


/* ============================================================
   ACTIVATE
   ============================================================ */

self.addEventListener(
  "activate",
  event => {

    event.waitUntil(

      caches
        .keys()
        .then(
          cacheNames =>

            Promise.all(

              cacheNames
                .filter(
                  cacheName =>
                    cacheName !==
                    CACHE_NAME
                )

                .map(
                  cacheName =>
                    caches.delete(
                      cacheName
                    )
                )

            )

        )

    );

    self.clients.claim();

  }
);


/* ============================================================
   FETCH
   ============================================================ */

self.addEventListener(
  "fetch",
  event => {

    const request =
      event.request;


    /*
      For JavaScript files, try the
      network first so updated code
      appears quickly.
    */

    if (
      request.destination ===
      "script"
    ) {

      event.respondWith(

        fetch(
          request
        )

          .then(
            response => {

              const copy =
                response.clone();


              caches
                .open(
                  CACHE_NAME
                )
                .then(
                  cache => {

                    cache.put(
                      request,
                      copy
                    );

                  }
                );


              return response;

            }
          )

          .catch(
            () =>
              caches.match(
                request
              )
          )

      );

      return;

    }


    /*
      For other files:
      cache first, then network.
    */

    event.respondWith(

      caches
        .match(
          request
        )

        .then(
          cachedResponse => {

            if (
              cachedResponse
            ) {

              return cachedResponse;

            }


            return fetch(
              request
            )

              .then(
                response => {

                  const copy =
                    response.clone();


                  caches
                    .open(
                      CACHE_NAME
                    )
                    .then(
                      cache => {

                        cache.put(
                          request,
                          copy
                        );

                      }
                    );


                  return response;

                }
              );

          }
        )

    );

  }
);
