// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  OAuthProvider,
} from "firebase/auth";
import { getMessaging, getToken } from 'firebase/messaging';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCudv4bg1XgN9W6Yszjb2FNXc7L46W786k",
  authDomain: "onecommunn-63bb9.firebaseapp.com",
  projectId: "onecommunn-63bb9",
  storageBucket: "onecommunn-63bb9.appspot.com",
  messagingSenderId: "953091073665",
  appId: "1:953091073665:web:dfef6cab5eae6bb0cc0f80",
  measurementId: "G-700ZE8XRFW",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
export const apple = new OAuthProvider("apple.com");
export const messaging = getMessaging(firebaseApp);
