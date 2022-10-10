// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFireStore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSnfRUjp3q8ZAfDNQe725DTU96thrXzyw",
  authDomain: "calendartest-6bce9.firebaseapp.com",
  projectId: "calendartest-6bce9",
  storageBucket: "calendartest-6bce9.appspot.com",
  messagingSenderId: "620659760158",
  appId: "1:620659760158:web:8e7384c8b0cb850a08a20f",
  measurementId: "G-01R13V01MG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFireStore(app);