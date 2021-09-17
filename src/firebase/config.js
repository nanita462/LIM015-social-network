// Import the functions you need from the SDKs you need
import {
initializeApp
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import {
//   auth,
// } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";


// Your web app's Firebase configuration
 export const firebaseConfig = {
  apiKey: "AIzaSyB-MxAo-1YURsZ2z4AfEe-NB51Y_4gnKcM",
  authDomain: "red-social-ecopunto.firebaseapp.com",
  projectId: "red-social-ecopunto",
  storageBucket: "red-social-ecopunto.appspot.com",
  messagingSenderId: "462188771189",
  appId: "1:462188771189:web:96d506830c4bae22bec53c"
};
// Initialize Firebase
initializeApp(firebaseConfig);

//initialize();
//export const auth = firebase.auth();
//export const db = firebase.firestore()

//console.log(initializeApp(firebaseConfig));