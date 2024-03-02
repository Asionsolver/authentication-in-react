// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4bTaikTf4NVLAaZ7-07Oy_IlSe5P7r9Q",
  authDomain: "guestbook-eae0d.firebaseapp.com",
  projectId: "guestbook-eae0d",
  storageBucket: "guestbook-eae0d.appspot.com",
  messagingSenderId: "739944445270",
  appId: "1:739944445270:web:2ce33e5ce9ae08d4bc12f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerWithEmailAndPassword = async (email, password) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user;
        return user;
    } catch (error) {
        throw(error);
    }
}

const loginWithEmailAndPassword = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        const user = response.user;
        return user;
    } catch (error) {
        throw(error);
    }
}

export { loginWithEmailAndPassword, registerWithEmailAndPassword, auth };

