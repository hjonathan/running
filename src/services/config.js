// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyC4F-s6Rq5Hmtt5hga18uKBMrCEWTg-DO0",
  authDomain: "hosanna-926ec.firebaseapp.com",
  databaseURL: "https://hosanna-926ec.firebaseio.com",
  projectId: "hosanna-926ec",
  storageBucket: "hosanna-926ec.appspot.com",
  messagingSenderId: "302024785420",
  appId: "1:302024785420:web:467c7f2e8173a6d5567829"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);