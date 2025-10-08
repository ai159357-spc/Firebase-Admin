import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfElJyKhPlkjF4IQDThbMAJ08tii3jhEs",
  authDomain: "fir-admin-96c8f.firebaseapp.com",
  projectId: "fir-admin-96c8f",
  storageBucket: "fir-admin-96c8f.firebasestorage.app",
  messagingSenderId: "375100438209",
  appId: "1:375100438209:web:66dea68fa2a93f5da1c640"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
