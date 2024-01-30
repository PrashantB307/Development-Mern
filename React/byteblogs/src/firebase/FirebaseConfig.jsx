// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "Enter your Firebase API_KEY",
  authDomain: "myblog-e8ea8.firebaseapp.com",
  projectId: "myblog-e8ea8",
  storageBucket: "myblog-e8ea8.appspot.com",
  messagingSenderId: "318710522209",
  appId: "1:318710522209:web:c5b87003c3d3ce1236a520"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {fireDb, auth, storage};