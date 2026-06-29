importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBkN6AN5yo7mzX3tnbd6uJu3A6j1yqUuYk",
  authDomain: "muse-hub-85647.firebaseapp.com",
  projectId: "muse-hub-85647",
  storageBucket: "muse-hub-85647.firebasestorage.app",
  messagingSenderId: "3393028050",
  appId: "1:3393028050:web:bf1b77484423fb03f9d20b"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const title = payload.notification?.title || 'Muse Hub';
  const body = payload.notification?.body || '';
  self.registration.showNotification(title, {
    body,
    icon: '/muse-hub/icon-192.png',
    badge: '/muse-hub/icon-192.png',
    data: payload.data
  });
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow('https://harisrizvi.github.io/muse-hub'));
});
