
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "",
    authDomain: "ares-88109.firebaseapp.com",
    projectId: "ares-88109",
    storageBucket: "ares-88109.appspot.com",
    messagingSenderId: "971453265540",
    appId: "1:971453265540:web:d008598f81ac8069cff4d1",
    measurementId: "G-3KP2EB0NFB"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const storage = firebase.storage();

  export { storage, db, fire as default }
