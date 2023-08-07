declare const self: ServiceWorkerGlobalScope;
import { ExpirationPlugin } from 'workbox-expiration';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';
import { clientsClaim } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';

clientsClaim();
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: skipWaiting don't wait for the tab to be closed to activate service worker
self.skipWaiting();
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: __WB_MANIFEST is a placeholder filled by workbox-webpack-plugin with the list of dependecies to be cached
precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  (req) => {
    return req.url.pathname.endsWith('.ico');
  },
  new NetworkFirst({
    cacheName: 'assets',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 5,
        maxAgeSeconds: 3600,
      }),
    ],
  })
  // new CacheFirst({
  //   cacheName: 'assets',
  //   plugins: [
  //     new ExpirationPlugin({
  //       maxEntries: 5,
  //       maxAgeSeconds: 3600,
  //     }),
  //   ],
  // })
);

function getEndpoint() {
  return self.registration.pushManager.getSubscription().then(function (subscription) {
    if (subscription) {
      return subscription;
    }

    throw new Error('User not subscribed');
  });
}

self.addEventListener('push', (event) => {
  event.waitUntil(
    getEndpoint().then(() => {
      self.registration.showNotification('Notification Title', {
        data: event.data?.text(),
        body: event.data?.text(),
        requireInteraction: true,
      });
    })
  );
});
