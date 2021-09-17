import components from './views/components.js';

const changeMenu = (rute) => {

    // const mainContainer = document.querySelector('#mainContainer');
    // mainContainer.innerHTML = '';
    //const root = document.querySelector('#root');
    const root = document.querySelector('#root');
    //root.innerHTML = '';

    switch (rute) {
        //case '':
        // //mainContainer.appendChild(components.login());
        //root.appendChild(components.login());
        // break;
        case '':
        case '#':
        case '#/':
            //components.login.loginView();
            //mainContainer.appendChild(components.login());
            return root.appendChild(components.login());
            break;

        case '#/register':
            //components.register.registerView();
            // mainContainer.appendChild(components.register());
            return root.appendChild(components.register());
            break;

        case '#/home':
            //components.register.homeView();
            // mainContainer.appendChild(components.home());
            return root.appendChild(components.home());
            break;

        default:
            return components.error404();
    }
};


export {
    changeMenu
};

//export const changeView = (rute) => changeMenu(rute);