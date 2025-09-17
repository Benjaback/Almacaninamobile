import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBJd-yBuK63YGrS71tJj4T65lzixf2RU88",
  authDomain: "mobilestart-4ff19.firebaseapp.com",
  projectId: "mobilestart-4ff19",
  storageBucket: "mobilestart-4ff19.firebasestorage.app",
  messagingSenderId: "1074984393845",
  appId: "1:1074984393845:web:77f5e84943e6c2b0f2ac3c",
  measurementId: "G-ELJ54BB6X2"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };

