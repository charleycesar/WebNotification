importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-messaging.js');

firebase.initializeApp({
  appId: '1:1036684750344:web:6866e724ad01ad22e6abbd',
  apiKey: 'AIzaSyAFZU0_Fda-ksTu_S_bCY15EltzDy3HsRk',
  projectId: 'webnotification-27548',
  messagingSenderId: '1036684750344',
});

const initMessaging = firebase.messaging();
