import { initializeApp } from 'firebase/app';
import { getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

import { 
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBun81_iLbv3jJVEwoPqhO8HH6Rlpin7hU",
  authDomain: "gc-clothing-db.firebaseapp.com",
  projectId: "gc-clothing-db",
  storageBucket: "gc-clothing-db.appspot.com",
  messagingSenderId: "693124405563",
  appId: "1:693124405563:web:71c0d401524344d3047f1e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Pointing directly to our database;
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef); //Data
    console.log(userSnapshot);
    console.log(userSnapshot.exists()); // using .exists() method to check if object already exists.
}