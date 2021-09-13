/* eslint-disable */

export const register = () => {
    const viewRegister = `
    <section>
    <form class="formRegister" id="idRegister">
      <img src="img/arbol_ecologico.png" alt="EcoPunto">
      <h1 class="tittle">EcoPunto</h1>
      <h2 class="text">¡Vamos, crea tu cuenta green!</h2>

      <section class="secEmail">
        <input class="inputEmail" type="email" id="idEmailRegister" placeholder="Ingresa tu Email" required>
      </section>

      <section class="secPassword">
        <input class="inputPassword" type="password" id="idPasswordRegister" placeholder="Ingresa tu contraseña"
          required>
      </section>

      <!-- Botón submit - Registrar -->
      <input class="inputSubmit" type="submit" id="idSubmitRegister" value="Registrar">
      <!-- Mensaje de error -->
      <section class="msgErrorRegister"></section>

      <h2 class="text">O bien registra con...</h2>

      <section class="secIconGoogle">
        <a class="iconGoogle" href="#" alt="Google">
          <i class="iconify" data-icon="flat-color-icons:google" id="buttonGoogleRegister"></i>
        </a>
      </section>

      <section class="secIconFb">
        <a class="iconFb" href="#" alt="Facebook">
          <i class="iconify" data-icon="logos:facebook" id="buttonFbRegister"></i>
        </a>
      </section>

      <section class="secLinkRegister">
        <h2 class="text">¿Ya tienes una cuenta?</h2>
        <h2 class="text"><a href='#'>Inicia sesión aquí</a></h2>
      </section>

    </form>
  </section>`
};