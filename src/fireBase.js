// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZqbU_WHUi6IhQJjYcWF1NcLP4v0N-gX8",
  authDomain: "scuffcompetitionv2.firebaseapp.com",
  projectId: "scuffcompetitionv2",
  storageBucket: "scuffcompetitionv2.appspot.com",
  messagingSenderId: "253391049764",
  appId: "1:253391049764:web:90e81b0520cce4b8de74b1",
  measurementId: "G-YNLPT359NZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);