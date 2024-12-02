// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx0dEHuvxHjKq33P7z9knDXM0p3My7f2o",
  authDomain: "otp-login-f2b7b.firebaseapp.com",
  projectId: "otp-login-f2b7b",
  storageBucket: "otp-login-f2b7b.firebasestorage.app",
  messagingSenderId: "237042459338",
  appId: "1:237042459338:web:7742cac5fa97cc82210a33",
  measurementId: "G-QVPG4HXYSD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
