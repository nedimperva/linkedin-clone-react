import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBsHs4_l7qda2T4vyqOaP9McFCW954HMGE",
    authDomain: "linkedin-clone-np.firebaseapp.com",
    projectId: "linkedin-clone-np",
    storageBucket: "linkedin-clone-np.appspot.com",
    messagingSenderId: "702588348523",
    appId: "1:702588348523:web:bbe9c1139b327d15fd292e",
    measurementId: "G-PWEVLV0T6T"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };