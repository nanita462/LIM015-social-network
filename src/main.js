import {
  changeMenu,
} from './router.js';

const initRouter = () => {
  window.addEventListener('hashchange', () => {
    changeMenu(window.location.hash); //devuelve ruta
  });
};
//window.addEventListener('load', initRouter);
window.addEventListener('load', () => {
  changeMenu(window.location.hash);
  initRouter();
});
