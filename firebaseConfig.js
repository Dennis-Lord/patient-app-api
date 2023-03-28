// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWnEwcPilePOEk8B9BmbBsY6ufToYzbCQ",
  authDomain: "medical-documents-c69fe.firebaseapp.com",
  projectId: "medical-documents-c69fe",
  storageBucket: "medical-documents-c69fe.appspot.com",
  messagingSenderId: "873023772194",
  appId: "1:873023772194:web:60ff16967515ac4d225c7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
