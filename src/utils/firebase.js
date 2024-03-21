import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDMAeEXgXDKUstgkh2LQxAOLSRZRjyyYUY",
    authDomain: "bh-challenge.firebaseapp.com",
    projectId: "bh-challenge",
    storageBucket: "bh-challenge.appspot.com",
    messagingSenderId: "314185924126",
    appId: "1:314185924126:web:c19c469972bfecda54f80f",
    measurementId: "G-PG780SL8FX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;