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
  <section class= "secViewDesktop">
  <section class= "secCover">
  <img class="imgCover" src="img/mundoverde4.png" alt="MundoVerde">

  </section>
  <section class= "secLogin">
  
      <form class="formLogin" id="idLogin">
      <img class="imgLogin" src="img/arbol_ecologico.png" alt="EcoPunto">
      <h1 class="tittle">EcoPunto</h1>
      <h2 class="text">¡Bienvenid@ al mundo green!</h2>

      <section class="secEmail">
        <input class="inputEmail" type="email" id="idEmail" placeholder="Ingresa tu Email" required>
      </section>

      <section class="secPassword">
        <input class="inputPassword" type="password" id="idPassword" placeholder="Ingresa tu contraseña" required>
      </section>

      <!-- Botón submit - enviar -->
      <input class="inputSubmit" type="submit" id="idSubmit" value="Ingresar">
      <!-- Mensaje de error -->
      <section class="msgErrorLogin"></section>

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
        <h2 class="textTwo" id= "textLoginHere"><a href='#'>Registrate aqui</a></h2>
      </section>

    </form>
  </section>
  </section>
  `;


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