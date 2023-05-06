// import { initializeApp } from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyD0K8T3Y8e1zIfqDfau-iZdKK1SPn4DgLo",
  authDomain: "sponsors-form.firebaseapp.com",
  databaseURL: "https://sponsors-form-default-rtdb.firebaseio.com",
  projectId: "sponsors-form",
  storageBucket: "sponsors-form.appspot.com",
  messagingSenderId: "707717252866",
  appId: "1:707717252866:web:11283a696d67524c09241b"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// firebase.initializeApp(firebaseConfig);
// const database = firebase.database();

// export {app, firebase};

firebase.initializeApp(firebaseConfig);
// const database = firebase.database();
const db = firebase.database();
 
export default db;
