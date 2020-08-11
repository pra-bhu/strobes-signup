import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA5SMtqorTLZsSsf3em5X7mmjhEM3n3iow",
    authDomain: "strobes-signup.firebaseapp.com",
    databaseURL: "https://strobes-signup.firebaseio.com",
    projectId: "strobes-signup",
    storageBucket: "strobes-signup.appspot.com",
    messagingSenderId: "335996692046",
    appId: "1:335996692046:web:61890dd754062ccfabc51f",
    measurementId: "G-JY934D0L8K"
};

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth()
export const firestore = myFirebase.firestore();

//Creating user document in Firestore if not available else return the user doc
export const createUser = async(user, additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const { email, displayName } = user;
        try {
            await userRef.set({
                displayName,
                email,
                ...additionalData
            });
        } catch (error) {
            console.error("Error creating user", error);
        }
    }
    return getUser(user.uid);
};

const getUser = async uid => {
    if (!uid) return null;
    try {
        const userDocument = await firestore.doc(`users/${uid}`).get();
        return {
            uid,
            ...userDocument.data()
        };
    } catch (error) {
        console.error("Error fetching user", error);
    }
};

export default firebase;