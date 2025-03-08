// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDE5MCU-hSGahWk7K-aGFa6VhUMoFxl0Y",
  authDomain: "todo-1-a43f4.firebaseapp.com",
  projectId: "todo-1-a43f4",
  storageBucket: "todo-1-a43f4.firebasestorage.app",
  messagingSenderId: "768152416806",
  appId: "1:768152416806:web:7d12a947e3b2c9c5b5ece7",
  measurementId: "G-SFZQV9JX3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export {auth , provider};