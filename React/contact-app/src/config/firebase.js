// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7zVWCdzvAFNCek_6roTvFdXRhQuRrITI",
  authDomain: "vite-contact-apk.firebaseapp.com",
  projectId: "vite-contact-apk",
  storageBucket: "vite-contact-apk.appspot.com",
  messagingSenderId: "679769905508",
  appId: "1:679769905508:web:03bc92a65e3a06129ec271"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);