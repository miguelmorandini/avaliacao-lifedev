import { initializeApp } from "firebase/app";
import { getAuth, } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBUUucz21hBzOn_O2UNTgbbFUNbNsKJCh4",
    authDomain: "avaliacaodw3-2d34e.firebaseapp.com",
    projectId: "avaliacaodw3-2d34e",
    storageBucket: "avaliacaodw3-2d34e.firebasestorage.app",
    messagingSenderId: "390603576931",
    appId: "1:390603576931:web:ff6b8c020ce8663114ca56"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app)

export { db, auth }