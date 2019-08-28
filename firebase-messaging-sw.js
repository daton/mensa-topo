importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-auth.js');
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js');

var firebaseConfig = {
  apiKey: "AIzaSyBzTK4rDf3XT-r_waqm46gfYsJdRR813dU",
  authDomain: "salud-unitec.firebaseapp.com",
  databaseURL: "https://salud-unitec.firebaseio.com",
  projectId: "salud-unitec",
  storageBucket: "salud-unitec.appspot.com",
  messagingSenderId: "181953839266",
  appId: "1:181953839266:web:9cfb0b9141887ef9"
};
firebase.initializeApp(firebaseConfig );


///
const messaging = firebase.messaging();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('firebaseto-messaging-sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
messaging.setBackgroundMessageHandler(function(payload) {
    const title = 'Hello World from SW!';
    const options = {
        body: payload.data.status
    };
    return self.registration.showNotification(title, options);
});

