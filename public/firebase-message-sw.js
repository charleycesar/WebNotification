importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: 'AIzaSyAFZU0_Fda-ksTu_S_bCY15EltzDy3HsRk',
  authDomain: 'webnotification-27548.firebaseapp.com',
  projectId: 'webnotification-27548',
  storageBucket: 'webnotification-27548.appspot.com',
  messagingSenderId: '1036684750344',
  appId: '1:1036684750344:web:6866e724ad01ad22e6abbd',
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
