/* eslint-disable */

export default () => {
    const view = `
  <section class="errorContainer">
    <img src="./img/error404.png" alt="error404">
    <p>ERROR</p>
</section>`;

    const mainError404 = document.getElementById('mainContainer');
    mainError404.innerHTML = '';
    mainError404.innerHTML = view;

    return mainError404;
};