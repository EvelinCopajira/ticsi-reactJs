// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKF7f3eNU1PDuJQj1hQUH1RtjDpdXmceU",
  authDomain: "ticsi-56382.firebaseapp.com",
  projectId: "ticsi-56382",
  storageBucket: "ticsi-56382.appspot.com",
  messagingSenderId: "140014717730",
  appId: "1:140014717730:web:2cb17b205846aceedcb37b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Firestore initialize 
const dataBase = getFirestore(app);

export default dataBase;