
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_0a7RFA48ILdUdJRGQMY4Km4ovPPHCgc",
  authDomain: "appointment-app-af05f.firebaseapp.com",
  projectId: "appointment-app-af05f",
  storageBucket: "appointment-app-af05f.appspot.com",
  messagingSenderId: "490184772499",
  appId: "1:490184772499:web:c54684bc8681da4ed37666"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore()
export default app