// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNHUEkgChhkuZnApcwrHqma9uL5JeZVi4",
  authDomain: "aniket-s-portfolio-409ab.firebaseapp.com",
  projectId: "aniket-s-portfolio-409ab",
  storageBucket: "aniket-s-portfolio-409ab.appspot.com",
  messagingSenderId: "142077995759",
  appId: "1:142077995759:web:35338e9f49ba5f24c3c91a",
  measurementId: "G-DBDYVKF333",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
