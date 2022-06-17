// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFBqaYiDV3hSmt1e9O5FPCFcPjdICyju0",
  authDomain: "duck-cinema.firebaseapp.com",
  projectId: "duck-cinema",
  storageBucket: "duck-cinema.appspot.com",
  messagingSenderId: "744924616667",
  appId: "1:744924616667:web:4356f13e039207f30439fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();