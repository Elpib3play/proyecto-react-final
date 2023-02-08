import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDN7HUU0M22yj_N3JufuQIo8ZdVA_mPQv0",
  authDomain: "tecno-pcs.firebaseapp.com",
  projectId: "tecno-pcs",
  storageBucket: "tecno-pcs.appspot.com",
  messagingSenderId: "251048156809",
  appId: "1:251048156809:web:5ed138b11ff01065b83058"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
