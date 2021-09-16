/* eslint-disable */

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

  //logIn(mainLogin);
  //signInWithGoogle(articleElem);

  return mainContainer;
  };


 