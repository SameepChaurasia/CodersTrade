// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "thecoderstrade-29cf5.firebaseapp.com",
  projectId: "thecoderstrade-29cf5",
  storageBucket: "thecoderstrade-29cf5.appspot.com",
  messagingSenderId: "857816573121",
  appId: "1:857816573121:web:013e9cde640492f77b2040"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);