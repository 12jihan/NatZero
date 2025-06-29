import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaIbhSO-9XnaZPJJuAorq6aEWYYJXNVo8",
  authDomain: "natzero-f486e.firebaseapp.com",
  projectId: "natzero-f486e",
  storageBucket: "natzero-f486e.firebasestorage.app",
  messagingSenderId: "58717807031",
  appId: "1:58717807031:web:26b17657fc01a26c74c832",
  measurementId: "G-E3Q9VCBGFK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Auth
export const auth = getAuth(app);
