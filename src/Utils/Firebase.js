// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWXzE1xdVa7XQruWlQHLK9JtgW-uqkv_4",
  authDomain: "list-iphone-store.firebaseapp.com",
  projectId: "list-iphone-store",
  storageBucket: "list-iphone-store.appspot.com",
  messagingSenderId: "98895176605",
  appId: "1:98895176605:web:dda51bbe9524d406d00574",
  measurementId: "G-314BSY59BL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase(app);
