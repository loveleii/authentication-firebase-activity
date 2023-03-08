// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXpYdGu8B8RV86Yykb2bqsWodVhk0ppXc",
  authDomain: "todo-c5368.firebaseapp.com",
  projectId: "todo-c5368",
  storageBucket: "todo-c5368.appspot.com",
  messagingSenderId: "900632267962",
  appId: "1:900632267962:web:1412b8082308eae9ed4683",
  measurementId: "G-P2FKJFEHJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export { auth }