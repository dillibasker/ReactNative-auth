// Import only the necessary functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0_mc4JgglcSZf5izalay2KOwVbQisIdA",
  authDomain: "reactnative-1-8bc50.firebaseapp.com",
  projectId: "reactnative-1-8bc50",
  storageBucket: "reactnative-1-8bc50.appspot.com", // Fixed storageBucket URL
  messagingSenderId: "799300433466",
  appId: "1:799300433466:web:4e4b60ec5a40be45da6703",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
const auth = getAuth(app);

export default auth;
