
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD5ZmpkZkrq_Nw70DuXZzEFwaIf3i48DKY",
  authDomain: "backendlasgonzaleztienda.firebaseapp.com",
  projectId: "backendlasgonzaleztienda",
  storageBucket: "backendlasgonzaleztienda.appspot.com",
  messagingSenderId: "28231693890",
  appId: "1:28231693890:web:04eab96bbe097958fbdfdb"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)