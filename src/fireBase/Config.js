import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA6Ofxq8lxPAS6JNNp0uQaLr3Gn-w-m-1U",
    authDomain: "clone-instagram-67735.firebaseapp.com",
    projectId: "clone-instagram-67735",
    storageBucket: "clone-instagram-67735.appspot.com",
    messagingSenderId: "1080411426565",
    appId: "1:1080411426565:web:4c2ad5999fb1de2d4b316c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

