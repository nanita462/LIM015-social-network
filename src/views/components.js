import {
    loginView,
    //eventLogin,
} from "./login.js";

import {
    registerView,
    //eventRegister,
} from "./register.js";

import {
    homeView
} from "./timeline.js";

import errorView from './error404.js';

export default {
    login: loginView,
    //{loginView, eventLogin,},
    register: registerView,
    //{registerView,eventRegister,},
    home: homeView,
    error404: errorView,
};