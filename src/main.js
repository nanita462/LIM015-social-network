// import {
//     changeMenu
// } from './router.js';


// const init = () => {
//     if (window.location.hash === '') {
//         window.location.hash = '#/';

//     }
//     changeMenu(window.location.hash);
//     window.addEventListener('hashchange', () => changeMenu(window.location.hash));

// };

// window.addEventListener('load', init);


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



// window.addEventListener('load', init);
//registerView()
//const singForm= document.querySelector('#idRegister');
//singForm.addEventListener('submit', ()=>{
  //console.log ("submit")
//})

//singForm()

// import {
//     myFunction
// } from './lib/index.js';

// myFunction();

// import {
//     //prueba
//     login
// } from './components/login.js';

// const mainLogin = document.getElementById('mainContainer');
// mainLogin.innerHTML = '';
// mainLogin.innerHTML = login;




//myFunction2()
//document.querySelector("#mainContainer").innerHTML = login;

// import {
//     abc
// } from './components/login';

// console.log("Hola2")

// document.querySelector("#mainContainer").innerHTML = abc;

// const loginContent = document.createElement('section');
//     loginContent.textContent = `${viewLogin}`;