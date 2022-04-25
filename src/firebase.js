// import firebase from "firebase/compat/app";
// import "firebase/compat/auth"
// import "firebase/compat/firestore"

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
// import { getAuth } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';
// import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js"



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZ7_3lLa4f4hbdBee0VAk8GW_ESAwEGbM",
    authDomain: "e-commerce-94feb.firebaseapp.com",
    projectId: "e-commerce-94feb",
    storageBucket: "e-commerce-94feb.appspot.com",
    messagingSenderId: "567421571579",
    appId: "1:567421571579:web:1b67aae1329c4a9e05fb5e",
    measurementId: "G-C1PDECD7MT"
  };

  // const app = initializeApp(firebaseConfig);

  // const auth=app.getAuth();
  // const db=app.getFirestore();
  



  const app = initializeApp(firebaseConfig);

  const auth = getAuth();
  const db = getFirestore();

  export{db,auth};

