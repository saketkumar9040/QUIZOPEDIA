import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC8Uo36COAUwHEP2nDkNX-B_E0W-VO0gKY",
  authDomain: "quizopedia-4b0fa.firebaseapp.com",
  projectId: "quizopedia-4b0fa",
  storageBucket: "quizopedia-4b0fa.appspot.com",
  messagingSenderId: "891823762864",
  appId: "1:891823762864:web:d44efbd05cf1761d557a75",
  databaseURL :"https://quizopedia-4b0fa-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);