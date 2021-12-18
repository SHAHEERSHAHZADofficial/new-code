import { initializeApp } from 'firebase/app';
// import * as firebase from "firebase";

import {getAuth,sendEmailVerification ,createUserWithEmailAndPassword ,signInWithEmailAndPassword,onAuthStateChanged,FacebookAuthProvider,signInWithCredential } from "firebase/auth";
import { setDoc, doc,collection,getDoc,addDoc} from "firebase/firestore";
import {getStorage, ref,getDownloadURL,uploadBytes} from "firebase/storage";
import { getFirestore } from 'firebase/firestore'

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyARiFpio-8DHtNkO8HdBW8oAsp3TSkDpEU",
    authDomain: "final-hackathon2021.firebaseapp.com",
    projectId: "final-hackathon2021",
    storageBucket: "final-hackathon2021.appspot.com",
    messagingSenderId: "78124524809",
    appId: "1:78124524809:web:65d0bc4d4fdd695cd09fd8",
    measurementId: "G-PLCL4ZG593"
};

initializeApp(firebaseConfig);
const auth = getAuth()
const db =getFirestore()
const storage=getStorage()

export {
    auth,
    addDoc,
    sendEmailVerification,
    FacebookAuthProvider,
    signInWithCredential,
    createUserWithEmailAndPassword ,
    signInWithEmailAndPassword,
    onAuthStateChanged ,
    db,
     setDoc,
      doc,
     collection,
     getDoc,
     storage,
      ref,
      getDownloadURL,
      uploadBytes,
      firebaseConfig
}
