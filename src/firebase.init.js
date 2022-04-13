// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaMg9buGTrY5U5fyGY1ttjuyAABaPL1ME",
  authDomain: "genius-car-services-66b18.firebaseapp.com",
  projectId: "genius-car-services-66b18",
  storageBucket: "genius-car-services-66b18.appspot.com",
  messagingSenderId: "176592820840",
  appId: "1:176592820840:web:a65d70d0e3f6b36d8d79dd",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
