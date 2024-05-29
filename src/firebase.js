// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgOZZ6031LmUk6zc-0iwuTIa7qCN9HtL4",
  authDomain: "react-chat-app-58824.firebaseapp.com",
  projectId: "react-chat-app-58824",
  storageBucket: "react-chat-app-58824.appspot.com",
  messagingSenderId: "856987354747",
  appId: "1:856987354747:web:11f7b9fadb42a84a5804de",
  measurementId: "G-69BXDTGEXS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
