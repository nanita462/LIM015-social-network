/* eslint-disable eol-last */
/* eslint-disable indent */
import {
  loginView,
} from './login.js';

import {
  registerView,
} from './register.js';

import {
  homeView,
} from './home.js';

import errorView from './error404.js';

// Colocando vistas en objeto
export default {
  login: loginView,
  register: registerView,
  home: homeView,
  error404: errorView,
};