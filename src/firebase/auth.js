/* eslint-disable eol-last */
/* eslint-disable indent */

// Registrar usuarios nuevos con correo y contraseña
export const createUserWEP = (email, password) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  firebase.auth().createUserWithEmailAndPassword(email, password);

// Registrar cuenta con Google
export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider(); // Proveedor de google
  return firebase.auth().signInWithPopup(provider); // Popup abre modal para selec cuenta gmail
};

// Cerrar sesión
export const signOut = () => firebase.auth().signOut();

// Logueo con Email y password
// Acceso de usuarios existentes
export const singInWEP = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

// Obtener data del usuario que ingresa a la red social
export const userInfo = () => {
  const user = firebase.auth().currentUser;
  let data = '';
  if (user !== null) {
    data = {
      name: user.displayName,
      id: user.uid,
      photo: user.photoURL !== null ? user.photoURL : './img/avatar.png',
    };
   }
   return data;
   };

// Se llama cuando un usuario se loguea o desloguea
// Extrae información de usuario luego de ingresar a home
export const authStateChanged = (cb) => firebase.auth().onAuthStateChanged(cb);