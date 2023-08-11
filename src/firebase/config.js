// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/getFirestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_cNWd1Fp4qTq9WJAp5nQtmtALoPLe_p4",
  authDomain: "fer-shop.firebaseapp.com",
  projectId: "fer-shop",
  storageBucket: "fer-shop.appspot.com",
  messagingSenderId: "79616116891",
  appId: "1:79616116891:web:d67c80ceda3f3b7db1de3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)