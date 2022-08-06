import {initializeApp} from 'firebase/app'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD6k5oG5M0jZUVmAoj2fS7ydTPZFcH7Brk",
  authDomain: "auth-redux-c6919.firebaseapp.com",
  projectId: "auth-redux-c6919",
  storageBucket: "auth-redux-c6919.appspot.com",
  messagingSenderId: "164423025478",
  appId: "1:164423025478:web:ad00ff7b44df4d33d51b47"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {auth, provider}