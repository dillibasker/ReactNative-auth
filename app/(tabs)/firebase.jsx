// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0_mc4JgglcSZf5izalay2KOwVbQisIdA",
  authDomain: "reactnative-1-8bc50.firebaseapp.com",
  projectId: "reactnative-1-8bc50",
  storageBucket: "reactnative-1-8bc50.firebasestorage.app",
  messagingSenderId: "799300433466",
  appId: "1:799300433466:web:4e4b60ec5a40be45da6703",
  measurementId: "G-H9N0RS06SR"
};

// Initialize Firebase
let auth
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
auth =initializeAuth(app)

export default auth