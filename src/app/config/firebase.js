import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC4SRCZ4JqGVnB1tGJwDwbTisIROjONnn0",
  authDomain: "phone-book-c1c20.firebaseapp.com",
  databaseURL: "https://phone-book-c1c20.firebaseio.com",
  projectId: "phone-book-c1c20",
  storageBucket: "phone-book-c1c20.appspot.com",
  messagingSenderId: "492677619835"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;