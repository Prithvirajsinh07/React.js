// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7HEY4QUBsPUWIUitT2NCTox97YzR0Zuw",
  authDomain: "id-login-fc262.firebaseapp.com",
  projectId: "id-login-fc262",
  storageBucket: "id-login-fc262.firebasestorage.app",
  messagingSenderId: "328897355894",
  appId: "1:328897355894:web:2ae6ef6fd62cbef9577f57",
  measurementId: "G-BQC86FDVZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export {auth , provider};