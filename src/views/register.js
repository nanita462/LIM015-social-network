// import {
//   createUserWEP,
//   signOut,
//   //getUser,
// } from "./firebase/auth.js";



// export const abc = () => {
//   const idNameRegister = element.querySelector('#idNameRegister').value;
//   const idEmailRegister = element.querySelector('#idEmailRegister').value;
//   alert("email:" + idNameRegister + "pass: " + idEmailRegister)
// }




export const registerView = () => {
  const view =`
  <section class= "secViewDesktop">
  <section class= "secCover">
  <img class="imgCoverRegister" src="img/mundoverde.png" alt="MundoVerde">
  </section>
    <section class= "secLogin">
    <!--<form class="formLogin" id="idRegister">-->

    <section class= "secImgLogin">
      <img class="imgLogin" src="img/arbol_ecologico.png" alt="EcoPunto">
    </section>
      <h1 class="tittle">EcoPunto</h1>
      <h2 class="text">¡Vamos, crea tu cuenta green!</h2>

      <form class="formLogin" id="idRegister">

      <section class="secName">
        <input class="inputName" type="text" id="idNameRegister" placeholder="Ingresa tu nombre de usuario" required>
      </section>

      <section class="secEmail">
        <input class="inputEmail" type="email" id="idEmailRegister" placeholder="Ingresa tu Email" required>
      </section>

      <section class="secPassword">
        <input class="inputPassword" type="password" id="idPasswordRegister" placeholder="Ingresa tu contraseña"
          required>
      </section>

      <!-- Mensaje de error -->
      <section class="msgErrorRegister"></section>

      <!-- Botón submit - Registrar -->
      <input class="inputSubmit" type="submit" id="idSubmitRegister" value="Registrar">
      
      </form>

      <h2 class="textOne">O bien registra con...</h2>

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
        <h2 class="textOne">¿Ya tienes una cuenta?</h2>
        <h2 class="textTwo" id= "textLogInHere"><a href='#/'>Inicia sesión aquí</a></h2>
      </section>

      <!--</form>-->
  </section>
  
  
  </section>
  `

  const mainContainer = document.getElementById('mainContainer');
  mainContainer.innerHTML = '';
  mainContainer.innerHTML = view;

  //eventRegister(mainRegister)
  return mainRegister;

  // const root = document.getElementById('root');
  // root.innerHTML = '';
  // root.innerHTML = view;
  // return root;

};

// //Verificando password
// const verifyPass = ((pass) => {
//   return pass.search(/(?=.*[a-z])(?=.*[0-9])(?=.*[@$#!?])[a-zA-Z0-9@$#!?]{8,32}/g) !== -1;
// });


// export const eventRegister = () => {
//   const idRegister = document.querySelector('#idRegister');
//   idRegister.addEventListener('submit', (e) => {

//     const idNameRegister = document.querySelector('#idNameRegister').value;
//     const idEmailRegister = document.querySelector('#idEmailRegister').value;
//     const idPasswordRegister = document.querySelector('#idPasswordRegister').value;
//     const msgErrorRegister = document.querySelector('.msgErrorRegister');
//     e.preventDefault();

//     if (idNameRegister === '') {
//       msgErrorRegister.innerHTML = `<p>Se requiere usuario</p>`;
//     } else if (idEmailRegister === '') {
//       msgErrorRegister.innerHTML = `<p>Se requiere correo</p>`;

//     } else if (idPasswordRegister === '') {
//       msgErrorRegister.innerHTML = `<p>Se requiere password</p>`;
//     } else if (verifyPass(idPasswordRegister) === false) {
//       msgWarning.innerHTML = `<p>mínimo 8 dígitos, 1 número y 1 carácter especial $#@!?</p>`;
//     } else {
//       createUserWEP(idEmailRegister, idPasswordRegister)
//         .then((result) => {
//           getUser().updateProfile({
//             displayName: idNameRegister
//           }).then(() => {}).catch((error) => {
//             console.log(error);
//           });
//           createUser(result.user.uid);
//         })
//         .then(() => {
//           window.location.hash = '#/register';
//           alert('Enviando mensaje de validación a tu correo.');
//           const configuration = {
//             url: 'http://localhost:5000/#/register',
//           };
//           getUser().sendEmailVerification(configuration);
//         })
//         .catch((err) => console.error(err));
//     }
//   })
// }


// export const eventRegister = () => {
//   const idRegister = document.querySelector('#idRegister');
//   idRegister.addEventListener('submit', (e) => {

//     const idNameRegister = document.querySelector('#idNameRegister').value;
//     const idEmailRegister = document.querySelector('#idEmailRegister').value;
//     const idPasswordRegister = document.querySelector('#idPasswordRegister').value;
//     const msgErrorRegister = document.querySelector('.msgErrorRegister');
//     e.preventDefault();

//     createUserWEP(idEmailRegister, idPasswordRegister)
//       .then((resp) => {
//         const user = resp.user;
//         user.updateProfile({
//           displayName: idNameRegister,
//         });
//         const config = {
//           url: 'http://localhost:5000/#/',
//         };
//         user.sendEmailVerification(config).then(() => {
//             alert('Enviamos un correo de verificación. Por favor verificar y confirma que eres tú.');
//           })
//           .catch((error) => {
//             console.log(error);
//           })

//         signOut()
//         window.location.hash = '#/';

//       })
//       .catch((err) => (err.code === 'auth/email-already-in-use' ?
//         msgErrorRegister.textContent = 'El correo registrado ya existe. Por favor intenta con otro.' :
//         msgErrorRegister.textContent = 'Ocurrió un error. Por favor intenta otra vez.'));
//   })
// }
