/* eslint-disable eol-last */
/* eslint-disable no-undef */
import {
  singInWEP,
  signInWithGoogle,
  // signInWithFb,
} from '../firebase/auth.js';

// const verifyPassLogin = ((pass) => {
//   return pass.search(/(?=.*[a-z])(?=.*[0-9])(?=.*[@$#!?])[a-zA-Z0-9@$#!?]{8,32}/g) !== -1;
// });
// import { auth } from "../firebase/config.js";
export const loginWEP = (document) => {
  const goLogin = mainContainer.querySelector('form');
  goLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const idEmailLogin = document.querySelector('#idEmailLogin').value;
    const idPasswordLogin = document.querySelector('#idPasswordLogin').value;
    const msgErrorLogin = document.querySelector('.msgErrorLogin');

    singInWEP(idEmailLogin, idPasswordLogin)
      .then((credentials) => {
        // console.log(credentials)
        const user = credentials.user;
        if (user.emailVerified === true) {
          window.location.hash = '#/home';
        } else {
          msgErrorLogin.textContent = 'Por favor verifique su correo e intente de nuevo';
        }
      }).catch((err) => {
        // console.log(err)
        if (err.code === 'auth/wrong-password') {
          msgErrorLogin.textContent = 'La contraseña es incorrecta, intenta nuevamente.';
        } else if (err.code === 'auth/user-not-found') {
          msgErrorLogin.textContent = 'El correo no corresponde a una cuenta registrada, intenta nuevamente.';
        } else {
          msgErrorLogin.textContent = 'Ha ocurrido un error. Intenta otra vez.';
        }
      });
  });
};

export const loginWithGoogle = (document) => {
  const idGoogleLogin = document.querySelector('#idGoogleLogin');
  idGoogleLogin.addEventListener('click', (e) => {
    e.preventDefault();

    signInWithGoogle()
      .then(() => {
        console.log('usuario listo');
        window.location.hash = '#/home';
      }).catch((error) => {
        console.error(error);
      });
  });
};

export const loginView = () => {
  const view = `
  <section class= "secViewDesktop">
  <section class= "secCover">
  <img class="imgCover" src="img/mundoverde4.png" alt="MundoVerde">

  </section>

  <section class= "secLogin">
      <section class= "secImgLogin">
      <img class="imgLogin" src="img/arbol_ecologico.png" alt="EcoPunto">
      </section>

      <h1 class="tittle">EcoPunto</h1>
      <h2 class="text">¡Bienvenid@ al mundo green!</h2>

    <form class="formLogin" id="idLogin">

      <section class="secEmail">
        <input class="inputEmail" type="email" id="idEmailLogin" placeholder="Ingresa tu Email" required>
      </section>

      <section class="secPassword">
        <input class="inputPassword" type="password" id="idPasswordLogin" placeholder="Ingresa tu contraseña" required>
      </section>

      <!-- Mensaje de error -->
      <section class="msgErrorLogin"></section>

      <!-- Botón submit - enviar -->
      <input class="inputSubmit" type="submit" id="idSubmit" value="Ingresar">

    </form>

      <h2 class="textOne">O bien ingresa con...</h2>

      <section class="secIcons">
      <section class="secIconGoogle" id= "idGoogleLogin">
        <a class="iconGoogle"  alt="Google">
        <img class= "icon" src="./img/google.png" alt="Google">
        </a>
      </section>

      <section class="secIconFb">
        <a class="iconFb" href="#" alt="Facebook">
        <img class= "icon" src="./img/facebook.png" alt="facebook">
        </a>
      </section>
      </section>

      <section class="secLinkRegister">
        <h2 class="textOne">¿No tienes una cuenta?</h2>
        <h2 class="textTwo" id="textRegisterHere"><a href='#/register'>Registrate aqui</a></h2>
      </section>

  </section>
  </section>
  `;
  const mainLogin = document.getElementById('mainContainer');
  mainLogin.innerHTML = '';
  mainLogin.innerHTML = view;

  loginWEP(mainLogin);
  loginWithGoogle(mainLogin);

  return mainLogin;
};
