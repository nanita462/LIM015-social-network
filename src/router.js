/* eslint-disable eol-last */
/* eslint-disable indent */
import components from './views/components.js';

const changeMenu = (rute) => {
    const root = document.querySelector('#root');

    switch (rute) {
        case '':
        case '#':
        case '#/':
            root.appendChild(components.login());
            break;
        case '#/register':
            root.appendChild(components.register());
            break;
        case '#/home':
            root.appendChild(components.home());
            break;
        default:
            return components.error404();
    }
};

export {
    changeMenu,
};