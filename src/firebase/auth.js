// import {
//     firebaseConfig
// } from "./firebase/config.js"

// import {
//     getAuth,
//     createUserWithEmailAndPassword
// } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";

//import { auth } from "./config.js";

//Crear usuario /Registra usuarios nuevos
export const createUserWEP = (email, password) => {
return firebase.auth.createUserWithEmailAndPassword(email, password);
};


// // ****Do new user, receives id and info
// export const createUser = (id, info) => {
//     return firebase.firestore()
//         .collection('users').doc(id).set({
//             id,
//             info,
//         });
// };

// //Logueo con Email y password
// //Acceso de usuarios existentes
// export const singInWEP = (email, password) => {
//     return firebase.auth().signInWithEmailAndPassword(email, password);
// };

// //Configuracion de un observador de estado de autenticación y obtención de  datos del usuario
// //Estado de autenticación cambiado
// //Se llama cuando un usuario de loguea o desloguea
// export const authStateChanged = (cb) => firebase.auth().onAuthStateChanged(cb);

// //Autentica mediante el Acceso con Google
// export const signInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     return firebase.auth().signInWithPopup(provider);
// };

// //Autentica mediante el Acceso con Facebook
// export const signInWithFb = () => {
//     const provider = new firebase.auth.FacebookAuthProvider();
//     return firebase.auth().signInWithPopup(provider);
// };


// //Obtener el usuario que accedió
// export const getUser = () => firebase.auth().currentUser;

// //Cerrar sesión
// export const signOut = () => firebase.auth().signOut();