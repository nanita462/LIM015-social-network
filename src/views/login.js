// import {
//   singInWEP,
//   signInWithGoogle,
//   signInWithFb,
// } from "firebase/auth.js";



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
        <input class="inputEmail" type="email" id="idEmail" placeholder="Ingresa tu Email" required>
      </section>

      <section class="secPassword">
        <input class="inputPassword" type="password" id="idPassword" placeholder="Ingresa tu contraseña" required>
      </section>

      <!-- Mensaje de error -->
      <section class="msgErrorLogin"></section>

      <!-- Botón submit - enviar -->
      <input class="inputSubmit" type="submit" id="idSubmit" value="Ingresar">

    </form>

      <h2 class="textOne">O bien ingresa con...</h2>

      <section class="secIcons">
      <section class="secIconGoogle">
        <a class="iconGoogle" href="" alt="Google">
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
  return mainLogin;

  // const root = document.getElementById('root');
  // root.innerHTML = '';
  // root.innerHTML = view;
  // return root;
};



// export const eventLogin = () => {
//   // const goLogIn = element.querySelector('form');
//   // goLogIn.addEventListener('submit', (e) => {
//   const btnLogin = document.querySelector('#idSubmit');
//   btnLogin.addEventListener('submit', (e) => {

//     const logInEmail = element.querySelector('#idEmail').value;
//     const logInPassword = element.querySelector('#idPassword').value;
//     const elemDiv = element.querySelector('.msgErrorLogin');

//     singInWEP(logInEmail, logInPassword).catch(error => console.log(error.message));
//   })
// }


// export const eventLogin = (element) => {
//   // const goLogIn = element.querySelector('form');
//   // goLogIn.addEventListener('submit', (e) => {
//   const btnLogin = element.querySelector('#idSubmit');
//   btnLogin.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const logInPassword = element.querySelector('#idPassword').value;
//     const logInEmail = element.querySelector('#idEmail').value;
//     const elemDiv = element.querySelector('.msgErrorLogin');

//     logInAuth(logInEmail, logInPassword)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         if (user.emailVerified) {
//           window.location.hash = '#/register';
//         } else {
//           elemDiv.textContent = '⚠️ Please verify your email and try again.';
//         }
//       })
//       .catch((error) => {
//         if (error.code === 'auth/wrong-password') {
//           elemDiv.textContent = '⚠️ Your password is wrong. Try again.';
//         } else if (error.code === 'auth/user-not-found') {
//           elemDiv.textContent = '⚠️ The email you entered does not match to any account. Try again.';
//         } else {
//           elemDiv.textContent = '⚠️ An error occurred. Please try again.';
//         }
//       });
//   });
// };