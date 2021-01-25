import firebase from "firebase";

const API_KEY = process.env.REACT_APP_API_KEY;

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "react-todo-app-58350.firebaseapp.com",
  projectId: "react-todo-app-58350",
  storageBucket: "react-todo-app-58350.appspot.com",
  messagingSenderId: "962539806500",
  appId: "1:962539806500:web:206c46bf771f186c685db1",
};

// Initialize Firebase
const firebaseInit = firebase.initializeApp(firebaseConfig);

export default firebaseInit;
