import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9eJfk2WLYX2D1jkZXdoknXvNS0UAQZlM",
    authDomain: "foxbel-music-905ce.firebaseapp.com",
    projectId: "foxbel-music-905ce",
    storageBucket: "foxbel-music-905ce.appspot.com",
    messagingSenderId: "332615357080",
    appId: "1:332615357080:web:2a1924b3efabef743cf6ed",
    measurementId: "G-DVZNRSWS41"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;