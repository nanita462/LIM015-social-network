
import components from './views/components.js';

const changeMenu = (rute) => {

    const root = document.querySelector('#root');
    //mainContainer.innerHTML = '';
    //container.appendChild(components.login());

    switch (rute) {
        case '':
        case '#':
        case '#/':
            //components.login.loginView();
            return root.appendChild(components.login());
            break;

        case '#/register':
            //components.register.registerView();
            return root.appendChild(components.register());
            break;

        default:
            return components.error404();
    }
};


export {
    changeMenu
};