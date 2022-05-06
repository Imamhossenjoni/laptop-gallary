// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuRGUjUJENOKXQE--JMdAVg0OQ_eZQgd8",
  authDomain: "laptop-gallary-2c921.firebaseapp.com",
  projectId: "laptop-gallary-2c921",
  storageBucket: "laptop-gallary-2c921.appspot.com",
  messagingSenderId: "408561229206",
  appId: "1:408561229206:web:f4f60bbbfd60f9464fd1b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;