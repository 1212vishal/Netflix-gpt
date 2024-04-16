// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmx9PNSixU8Il7ZmOe7AwcK0osTOMbPJ4",
  authDomain: "netflixgpt-afc52.firebaseapp.com",
  projectId: "netflixgpt-afc52",
  storageBucket: "netflixgpt-afc52.appspot.com",
  messagingSenderId: "846997121984",
  appId: "1:846997121984:web:e8188ebdbc783a4e6af625",
  measurementId: "G-PCDD151ZT8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);