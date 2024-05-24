// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJIH6aWDn1iibBI8HWM5RGDoHISV0j0Gk",
  authDomain: "multi-sum-insight-generation.firebaseapp.com",
  projectId: "multi-sum-insight-generation",
  storageBucket: "multi-sum-insight-generation.appspot.com",
  messagingSenderId: "791976084596",
  appId: "1:791976084596:web:99e1843dadd8763d777d21",
  measurementId: "G-NQ9W74W9ER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };