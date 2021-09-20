export const homeView = () => {
  const view = `
  <header class="secHeader" id="idHeader">
  <!--<h1 class="logoText">EcoPunto</h1>-->
  <a class="logoText" href='#/home'>EcoPunto</a>
  
  
  <nav>
    <section class="secNavList" id="idNavList">

      <section class="secNavListItem">
        <a href='#/Home'><i class="fas fa-home"></i>Inicio</a>
      </section>

      <section class="secNavListItem">
        <a href='#/profile'>Mi perfil</a>
      </section>

      <section class="secNavListItem">
        <a href='#/logOut'>Salir</a>
      </section>

    </section>
  </nav>

</header>


<section class="secHome">

  <section class="secUserInfo">

    <section class="secImgProfile">
      <img class="imgProfile" src="./img/mundoverde.png" alt="ImgProfile"
        style="height: 200px; width: 200px; border-radius: 90px;">
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
        <input id="inputUploadImg" type="file" accept="image/png, image/jpeg, image/jpg">
        <!--<button class="buttonDelete" id="idButtonDelete" type="button">Borrar</button>-->
        <button class="buttonPublish" id="idButtonPublish" type="button">Publicar</button>
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
}
