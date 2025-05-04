import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMWHLoPVh2jiIxJjKY1HIWKRfRlcdyqgc",
  authDomain: "barber-e9bd3.firebaseapp.com",
  projectId: "barber-e9bd3",
  storageBucket: "barber-e9bd3.firebasestorage.app",
  messagingSenderId: "190018650885",
  appId: "1:190018650885:web:55b61efe2214e34d3f6d6c"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)
export {db,auth}




