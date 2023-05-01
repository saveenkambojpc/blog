// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh52yKgiLCvQeqcI5AaS-Lhdus6efwxOM",
  authDomain: "blog-saveen.firebaseapp.com",
  projectId: "blog-saveen",
  storageBucket: "blog-saveen.appspot.com",
  messagingSenderId: "878703823417",
  appId: "1:878703823417:web:4cb6171ce925ae226e5be8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app)
export const storage = getStorage(app)