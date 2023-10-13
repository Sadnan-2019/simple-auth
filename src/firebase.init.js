// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMNm61cVLsKazODo7VLn5NK97fnfD6wpQ",
  authDomain: "newsimplefirebaseauth.firebaseapp.com",
  projectId: "newsimplefirebaseauth",
  storageBucket: "newsimplefirebaseauth.appspot.com",
  messagingSenderId: "96829731839",
  appId: "1:96829731839:web:7d90247e79043d5efeedca",
  measurementId: "G-MFJ5BVGZQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;