import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUb3xlWf0Acpj6Wvs12eTfpZ1TSwrsmTw",
  authDomain: "expo-project-727f1.firebaseapp.com",
  projectId: "expo-project-727f1",
  storageBucket: "expo-project-727f1.appspot.com",
  messagingSenderId: "455427492250",
  appId: "1:455427492250:web:e6532133bccd238cc7d223"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
