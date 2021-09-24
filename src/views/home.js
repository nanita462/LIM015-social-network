/* eslint-disable eol-last */
export const homeView = () => {
  // eslint-disable-next-line spaced-comment
  const view =/*html*/ `
  <header class="secHeader" id="idHeader">
  <section class="secLogoText" id="idNavList">
  <!--<h1 class="logoText">EcoPunto</h1>-->
  <a class="logoText" href='#/home'>EcoPunto</a>
  </section>

  <section class="navbar" id="idNavList">

  <a href="#/home"><span data-width="25"class="iconify" data-icon="bx:bxs-home-heart"></span>Inicio</a>
  <a href="#/profile"><span data-width="25" class="iconify" data-icon="mdi:account-circle"></span>Mi perfil</a>
  <a href="#/"><span data-width="25" class="iconify" data-icon="ic:outline-log-in"></span>Cerrar sesión</a>

  </section>
</header>


<section class="secHome">

  <section class="secUserInfo">

    <section class="secImgProfile">
      <img class="imgProfile" src="./img/avatar.png" alt="ImgProfile"
        style= border-radius: 90px;">
    </section>

    <section class="secTextInfo">
      <h2 class="nameUser">Nombre usuario</h2>
      <p class="nameUser1">Cel</p>
      <p class="nameUser1">Productos</p>
      <p class="nameUser1">Ubicación</p>
    </section>
  </section>

  <section class="secHomePublish">

    <section class="secPublishBox">
      <textarea class="boxText" name="" id="idPublishBoxText" cols="30" rows="10"
        placeholder="¿Qué quieres compartir?"></textarea>

      <section class="errorPublish"></section>
      <section class="secBtnBoxText">
      <figure class="imgFile">
      <span id= "iconFile" class="iconify" data-icon="noto-v1:framed-picture" data-width="40" data-height="40"></span>
      <input type="file" id="file_input" />
      <div class="hoverPhoto"></div>
      </figure>
       <!--<button class="inputShare"  id="idButtonDelete" type="button">Borrar</button>-->
        <button class="inputShare"  id="idButtonPublish" type="button">Publicar</button>
      </section>

    </section>

    <section class="timelinePosts"></section>

  </section>

</section>

<!--<footer class="secFooter" id="idSecFooter">
  ©2021 Developed by <a href="https://github.com/nanita462" target="_blank">Ana Aguilera </a>
  and<a href="https://github.com/Mariperu" target="_blank"> Maritza Rodriguez</a>
</footer>-->
    `;

  const mainHome = document.getElementById('mainContainer');
  mainHome.innerHTML = '';
  mainHome.innerHTML = view;
  return mainHome;
};

// POST
/* <section class="secPost">
      <section class="secPostName">
        Aqui va nombre de quien publica
      </section>
      <section class="secPostDate">
        Aqui va fecha de publicación
      </section>

      <section class="secPostImg">
        Aqui va imagen posteada
      </section>

      <section class="secPostText">
        Aqui va el texto de post
      </section>

      <section class="secBtnPost">
        <button class="buttonShare" id="idButtonShare" type="button">Compartir</button>
        <button class="buttonLike" id="idButtonImg" type="button">Me gusta</button>
        <button class="buttonDelete" id="idButtonShare" type="button">Eliminar</button>
        <!--<button class="buttonEdit" id="idButtonEdit" type="button">Editar</button>-->

      </section>
    </section> */
