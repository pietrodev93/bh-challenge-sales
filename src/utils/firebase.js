import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDMAeEXgXDKUstgkh2LQxAOLSRZRjyyYUY",
    authDomain: "bh-challenge.firebaseapp.com",
    projectId: "bh-challenge",
    storageBucket: "bh-challenge.appspot.com",
    messagingSenderId: "314185924126",
    appId: "1:314185924126:web:c19c469972bfecda54f80f",
    measurementId: "G-PG780SL8FX"
};

let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;