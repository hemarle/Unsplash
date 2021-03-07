import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCaHWNGrY_Gebw4mjeYlKB-yN7n-xQuLZE",
  authDomain: "unsplash-159af.firebaseapp.com",
  projectId: "unsplash-159af",
  storageBucket: "unsplash-159af.appspot.com",
  messagingSenderId: "789003634943",
  appId: "1:789003634943:web:b0e382058781e0b4bea4ca",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
