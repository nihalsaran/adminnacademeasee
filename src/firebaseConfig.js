// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCpKeTpCBYMhY6K7XMIl6_wxhn-6ysM_ag",
  authDomain: "academease-7b917.firebaseapp.com",
  projectId: "academease-7b917",
  storageBucket: "academease-7b917.appspot.com",
  messagingSenderId: "290180663931",
  appId: "1:290180663931:web:494acbcae02100ed4b30de",
  measurementId: "G-21147L8M0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };


