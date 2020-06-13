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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;


    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // const userRef = firestore.doc('users/143jkljfkjs');
    const snapShot = await userRef.get();
    // console.log(snapShot);

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;