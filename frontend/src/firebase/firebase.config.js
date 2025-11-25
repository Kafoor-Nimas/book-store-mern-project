// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANt-xfFmjTEgmundtEse0UE3lOEAdJfUU",
  authDomain: "book-store-mern-app-b8a4a.firebaseapp.com",
  projectId: "book-store-mern-app-b8a4a",
  storageBucket: "book-store-mern-app-b8a4a.firebasestorage.app",
  messagingSenderId: "733990775662",
  appId: "1:733990775662:web:aeee6eb2169b9402416f7f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
