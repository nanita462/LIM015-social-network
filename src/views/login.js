/* eslint-disable */

//export const abc = "Hola3";

// export const myFunction2 = () => {
//     // aqui tu codigo
//     console.log('Hola mundo!');
// };


// const logIn = (elem) => {
//   const goLogIn = elem.querySelector('#idLogin');
//   goLogIn.addEventListener('submit', (e) => {
//     e.preventDefault();
//     // const logInPassword = elem.querySelector('#idPassword').value;
//     // const logInEmail = elem.querySelector('#idEmail').value;
//     // const elemDiv = elem.querySelector('.msgErrorLogin');
//   })
// };

//export default () => {
const loginView = () => {
  const view = `
    <section>
    <form class="formLogin" id="idLogin">
      <img src="img/arbol_ecologico.png" alt="EcoPunto">
      <h1 class="tittle">EcoPunto</h1>
      <h2 class="text">¡Bienvenid@ al mundo green!</h2>

      <section class="secEmail">
        <input class="inputEmail" type="email" id="idEmail" placeholder="Ingresa tu Email" required>
      </section>

      <section class="secPassword">
        <input class="inputPassword" type="password" id="idPassword" placeholder="Ingresa tu contraseña" required>
      </section>

      <!-- Botón submit - enviar -->
      <input class="inputSubmit" type="submit" id="idSubmit" value="Login">
      <!-- Mensaje de error -->
      <section class="msgErrorLogin"></section>

      <h2 class="text">O bien ingresa con...</h2>

      <section class="secIconGoogle">
        <a class="iconGoogle" href="#" alt="Google">
          <i class="iconify" data-icon="flat-color-icons:google" id="buttonGoogle"></i>
        </a>
      </section>

      <section class="secIconFb">
        <a class="iconFb" href="#" alt="Facebook">
          <i class="iconify" data-icon="logos:facebook" id="buttonFb"></i>
        </a>
      </section>

      <section class="secLinkRegister">
        <h2 class="text">¿No tienes una cuenta?</h2>
        <h2 class="text"><a href='#'>Registrate aqui</a></h2>
      </section>

    </form>
  </section>`;


  const mainLogin = document.getElementById('mainContainer');
  mainLogin.innerHTML = '';
  mainLogin.innerHTML = view;

  //logIn(mainLogin);
  //signInWithGoogle(articleElem);

  return mainLogin;
};

export {
  loginView
};