import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDIRn7QC0VH61ksD-isjXeuejrZFvWNasw",
    authDomain: "netflexgpt-b07bb.firebaseapp.com",
    projectId: "netflexgpt-b07bb",
    storageBucket: "netflexgpt-b07bb.appspot.com",
    messagingSenderId: "660136811596",
    appId: "1:660136811596:web:7df8f5ac84113dc31aa8e9",
    measurementId: "G-GMZWE8F0N5"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export const auth = getAuth();