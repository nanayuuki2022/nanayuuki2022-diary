// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARKNTeFdFjbGy4v27u5OknGPpxo4ooRWU",
  authDomain: "nanayuuki2022-diary.firebaseapp.com",
  projectId: "nanayuuki2022-diary",
  storageBucket: "nanayuuki2022-diary.appspot.com",
  messagingSenderId: "410950161361",
  appId: "1:410950161361:web:06930cc5fd83edaff606f0",
  measurementId: "G-F3BK4ZXF34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
///ブラウザのみで動作させる
if(typeof window !== 'undefined'){
  const analytics = getAnalytics(app);
}