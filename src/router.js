import components from './views/components.js';

const changeMenu = (rute) => {

    const root = document.querySelector('#root');
    

    switch (rute) {
        
        case '':
        case '#':
        case '#/':
            
            return root.appendChild(components.login());
            break;

        case '#/register':
            
            return root.appendChild(components.register());
            break;

        case '#/home':
           
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