// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASlBho0mMFyuUqdjJbURs2YUZ8A3FkcDE",
  authDomain: "plant-shop-43915.firebaseapp.com",
  projectId: "plant-shop-43915",
  storageBucket: "plant-shop-43915.appspot.com",
  messagingSenderId: "2897233706",
  appId: "1:2897233706:web:994fac1443eea4153f4053"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;