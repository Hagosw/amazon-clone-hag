import firebase from "firebase/compat/app"; 
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore"; 
import "firebase/compat/auth"; 

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDovTAZ4aTdm8xs0KPQnyPKD4QsLCC1MXY",
  authDomain: "Amazon-clone-Hag.firebaseapp.com",
  projectId: "Amazon-clone-Hag",
  storageBucket: "Amazon-clone-Hag.appspot.com",
  messagingSenderId: "541618558773",
  appId: "1:541618558773:web:bb870fc732ace2cc951e7c",
};

// Initialize Firebase using the compat version
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const db = firebase.firestore(); 