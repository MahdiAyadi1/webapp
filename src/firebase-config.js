
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDahcsk43A6YCOd3k00oGtjY92uDr9ClLw",
  authDomain: "metroapp-957a0.firebaseapp.com",
  projectId: "metroapp-957a0",
  storageBucket: "metroapp-957a0.appspot.com",
  messagingSenderId: "642364952017",
  appId: "1:642364952017:web:2734ea6ba195bcd83fe4f0",
  measurementId: "G-FXTGM5MHNM"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);