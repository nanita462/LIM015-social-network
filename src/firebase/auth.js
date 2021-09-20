// Crear usuario /Registra usuarios nuevos
export const createUserWEP = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

// Cerrar sesión
export const signOut = () => firebase.auth().signOut();

// Autentica mediante el Acceso con Google
export const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
};

// Autentica mediante el Acceso con Facebook
// export const signInWithFb = () => {
//     const provider = new firebase.auth.FacebookAuthProvider();
//     return firebase.auth().signInWithPopup(provider);
// };


// Logueo con Email y password
// Acceso de usuarios existentes
export const singInWEP = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
};


// ****Do new user, receives id and info
// export const createUser = (id, info) => {
//     return firebase.firestore()
//         .collection('users').doc(id).set({
//             id,
//             info,
//         });
// };


// Obtener el usuario que accedió
// export const getUser = () => firebase.auth().currentUser;



// Configuracion de un observador de estado de autenticación y obtención de  datos del usuario
// Estado de autenticación cambiado
// Se llama cuando un usuario se loguea o desloguea
// export const authStateChanged = (cb) => firebase.auth().onAuthStateChanged(cb);