/* eslint-disable eol-last */
/* eslint-disable max-len */
export const profileView = (user) => {
  // eslint-disable-next-line spaced-comment
  const view = /*html*/`
  <header class="secHeader" id="idHeader">

<section class="secLogoText" id="idNavList">
  <a class="logoText" href='#/home'>EcoPunto</a>
</section>

<section class="navbar" id="idNavList">
  <a href="#/home">
    <span data-width="25"class="iconify" data-icon="bx:bxs-home-heart"></span>Inicio</a>
  <a href="#/profile">
    <span data-width="25" class="iconify" data-icon="mdi:account-circle"></span>Mi perfil</a>
  <a id="idOut" href="#/">
    <span data-width="25" class="iconify" data-icon="ic:outline-log-in"></span>Cerrar sesión</a>
</section>
</header>



      <section class="secProfileImg">
      <section class="secUserProfile">
        <img class="profileImg" src="${user.photo}" alt="ImgProfile";>
      </section>

      <section class="secTextProfile">
        <h2 class="nameUser">${user.name}</h2>
        <p class="nameUser2">999 876 543</p>
        <p class="nameUser2">Botellas de plástico, papel reciclado.</p>
        <p class="nameUser2">Lima</p>
      </section>
      </section>
      <section class="secProfile">
  
      <section class="formProfile">

        <section class="secName">
          <input class="inputName" type="text"  placeholder="Ingresa tu nombre de usuario" required>
        </section>

        <section class="secName">
          <input class="inputName" type="number"  placeholder="Ingresa tu Celular" required>
        </section>

        <section class="secName">
          <input class="inputName" type="text"  placeholder="Ingresa tus Productos"
          required>
        </section>
        <section class="secName">
          <input class="inputName" type="text"  placeholder="Ingresa tu Dirección" required>
        </section>

        </section>
        <section class="buttonSave">
        <!-- Botón - guardar -->
        <a href= "#/home"><input class="inputSubmit" id="inputSave" type="button" value="Guardar"></a>
        </section>
      </section>`;
  const mainProfile = document.getElementById('mainContainer');
  mainProfile.innerHTML = '';
  mainProfile.innerHTML = view;
  return mainProfile;
};