/* eslint-disable */
import components from './views/components.js';

const changeMenu = (rute) => {

    const container = document.querySelector('#mainContainer');
    container.innerHTML = '';
    //container.appendChild(components.login());

    switch (rute) {

        case '#/':
            //components.login.loginView();
            container.appendChild(components.login());
            break;

        case '#/register':
            //components.register.registerView();
            container.appendChild(components.register());
            break;

        default:
            return components.error404();
    }
};


export {
    changeMenu
};