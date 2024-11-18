import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPZjSby8UyuYoY4O6eYw34Uwq7-0NuQ9M",
  authDomain: "twitter-clone-8f414.firebaseapp.com",
  projectId: "twitter-clone-8f414",
  storageBucket: "twitter-clone-8f414.firebasestorage.app",
  messagingSenderId: "776595967680",
  appId: "1:776595967680:web:fa9ae675913d8f16622725",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
