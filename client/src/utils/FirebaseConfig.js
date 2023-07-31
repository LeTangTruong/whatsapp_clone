import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDHOclRxLj_lUZaukhB0N4pXLNLXMpBNE4",
    authDomain: "whatsapp-clone-4fc84.firebaseapp.com",
    projectId: "whatsapp-clone-4fc84",
    storageBucket: "whatsapp-clone-4fc84.appspot.com",
    messagingSenderId: "326161940746",
    appId: "1:326161940746:web:0d92b00a0e8ec8b8dbbaf3",
    measurementId: "G-XPBE4PX17Z"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);