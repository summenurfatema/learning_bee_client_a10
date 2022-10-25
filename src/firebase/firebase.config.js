// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsXMcy3U8JEU6mu9eyRDff1OLPUb-rl-c",
    authDomain: "learning-bee-client-side.firebaseapp.com",
    projectId: "learning-bee-client-side",
    storageBucket: "learning-bee-client-side.appspot.com",
    messagingSenderId: "213508213192",
    appId: "1:213508213192:web:7f3b4732e4d6ced25618fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;