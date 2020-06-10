import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDLK7-GhlBdnRNKSUnJnWwxz0s5u8-EYWc",
    authDomain: "crwn-db-8d91c.firebaseapp.com",
    databaseURL: "https://crwn-db-8d91c.firebaseio.com",
    projectId: "crwn-db-8d91c",
    storageBucket: "crwn-db-8d91c.appspot.com",
    messagingSenderId: "633776739616",
    appId: "1:633776739616:web:8bb2a333da8e5da96df345"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;