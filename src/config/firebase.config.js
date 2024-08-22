// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC4Rl4ux9WVXXCmcHRj5Cu67Xfc9j3bFbA",
    authDomain: "my-portfolio-51712.firebaseapp.com",
    projectId: "my-portfolio-51712",
    storageBucket: "my-portfolio-51712.appspot.com",
    messagingSenderId: "866461008846",
    appId: "1:866461008846:web:d4d9cc1d9469682c1e619f",
    measurementId: "G-JTRP67KCRK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

const analytics = getAnalytics(app);