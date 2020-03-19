import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDXHMVdyUXyDgKQQK3JybaScCDm1Fi6EjI",
    authDomain: "cake-pwa.firebaseapp.com",
    databaseURL: "https://cake-pwa.firebaseio.com",
    projectId: "cake-pwa",
    storageBucket: "cake-pwa.appspot.com",
    messagingSenderId: "920874690256",
    appId: "1:920874690256:web:b7b7e34e5af5b6203ea0d5",
    measurementId: "G-0VZR38GJH5"
  };

  firebase.initializeApp(firebaseConfig);

export default firebase;