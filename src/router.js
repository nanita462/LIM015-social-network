import components from './views/components.js';

const changeMenu = (rute) => {

  const root = document.querySelector('#root');

  switch (rute) {
    case '':
    case '#':
    case '#/':
      return root.appendChild(components.login());
    case '#/register':
      return root.appendChild(components.register());
    case '#/home':
      return root.appendChild(components.home());
    default:
      return components.error404();
  }
};

export {
  changeMenu
};
