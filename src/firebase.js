import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBp0LN1thhBZPFE_bECFaw1qvyCS4Fvwjg",
  authDomain: "holy-fellowship.firebaseapp.com",
  projectId: "holy-fellowship",
  storageBucket: "holy-fellowship.appspot.com",
  messagingSenderId: "1029598236001",
  appId: "1:1029598236001:web:a8373ea7e9ca918a13c920",
  measurementId: "G-HYT0TBMEZ8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider }; 