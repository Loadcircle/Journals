import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCqYcQtroAl0n-Abd2gVxFkTbyv_j8ta7U",
    authDomain: "journal-app-1d1cf.firebaseapp.com",
    projectId: "journal-app-1d1cf",
    storageBucket: "journal-app-1d1cf.appspot.com",
    messagingSenderId: "45924804284",
    appId: "1:45924804284:web:78e0ce0f58ca6d30ac52b9"
};
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db, 
    googleAuthProvider,
    firebase,
}