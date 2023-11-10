import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2elrbqz0IkE6LeFObkKqHS_E-PGLQI0E",
  authDomain: "create-test-firebase.firebaseapp.com",
  projectId: "create-test-firebase",
  storageBucket: "create-test-firebase.appspot.com",
  messagingSenderId: "184942993904",
  appId: "1:184942993904:web:d4dbd018c5d3bc0f7c7d35",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleAuthProvider };
