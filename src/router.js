/* eslint-disable */
import components from './views/components.js';

const changeMenu = (rute) => {

    const container = document.querySelector('#mainContainer');
    container.innerHTML = '';
    container.appendChild(components.login());


    // switch (rute) {

    //     case '#/login':
    //         container.appendChild(components.login());
    //         break;

    //     default:
    //         console.log("No tengo nada");
    //         break;
    // }
};


export {
    changeMenu
};