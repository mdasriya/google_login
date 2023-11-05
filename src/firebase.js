// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJTB8GCTyIZj8j-SgW2APnWucvttDWYuE",
  authDomain: "project-c83b0.firebaseapp.com",
  projectId: "project-c83b0",
  storageBucket: "project-c83b0.appspot.com",
  messagingSenderId: "509067105437",
  appId: "1:509067105437:web:317f1f53e69c0690227074"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // This is where you create the auth object.

export { auth };
