import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from '@firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyChFsUNN4CTjGBAP-kEov6TpOpIjpvPTvY",
    authDomain: "modul-10-e2a32.firebaseapp.com",
    projectId: "modul-10-e2a32",
    storageBucket: "modul-10-e2a32.appspot.com",
    messagingSenderId: "740725160014",
    appId: "1:740725160014:web:5103e5c91a5487b9f86b1f"
  };

  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const authentication = getAuth();

export { auth, authentication }