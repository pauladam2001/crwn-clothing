import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDq2XH535ZYa2TmMzZronyB49SSOv9qRjc",
    authDomain: "crwn-db-c89ab.firebaseapp.com",
    projectId: "crwn-db-c89ab",
    storageBucket: "crwn-db-c89ab.appspot.com",
    messagingSenderId: "619047758",
    appId: "1:619047758:web:14ce74ed02822c6aeb0c1f",
    measurementId: "G-4WCRP2FH4V"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();  // setting up Google authentication
provider.setCustomParameters({ prompt: 'select_account' });   // we want to always trigger the Google pop up 
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;