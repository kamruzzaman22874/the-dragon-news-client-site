// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6G1tmO2I6vCbUuTTdqcIwk9sxeGY7d_E",
  authDomain: "the-dragon-news-client-944d6.firebaseapp.com",
  projectId: "the-dragon-news-client-944d6",
  storageBucket: "the-dragon-news-client-944d6.appspot.com",
  messagingSenderId: "566139098367",
  appId: "1:566139098367:web:aa46d3e87a78e22a82e8ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;