export default () => {
  const view = `
  <section class="secError">
  <h1 class="hError"> Error 404 </h1>
  <p class= "pError">Upsss...</p>
  <p class= "pError">La página</p>
  <p class= "pError">no ha sido Encontrada</p>
  <section class= "secImgError">
   <img class= "imgError"src="./img/mundoverde2.png" alt="error404">
   </section>
    <section class="secInputError">
    <input class="inputError" type="submit" id="idError404" value="Regresar">
    </section>
   </section>`;

  const mainError404 = document.getElementById('mainContainer');
  mainError404.innerHTML = '';
  mainError404.innerHTML = view;

  return mainError404;
};