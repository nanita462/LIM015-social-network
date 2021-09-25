/* eslint-disable eol-last */
/* eslint-disable indent */
import {
  createUserWEP,
  singInWEP,
  signInWithGoogle,
} from '../src/firebase/auth.js';

// Configurando firebase mock
const firebaseMock = require('firebase-mock');

const mockAuth = new firebaseMock.MockAuthentication();
mockAuth.autoFlush();

global.firebase = firebaseMock.MockFirebaseSdk(
  () => null,
  () => mockAuth,
);

describe('Function createUserWEP', () => {
  it('User should create an account with e-mail and password', () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    createUserWEP('nanita462@gmail.com', '12345678a#')
    .then((user) => {
      expect(user.email).toBe('nanita462@gmail.com');
    }));
});

describe('Function singInWEP', () => {
  it('User should log in with e-mail and password', () => singInWEP('nanita462@gmail.com', '12345678a#')
    .then((user) => {
      expect(user.email).toBe('nanita462@gmail.com');
    }));
});

// describe('Function signInWithGoogle', () => {
//     it('User should log in with Google', () => {
//         signInWithGoogle().then((user) => {
//             expect(user.isAnonymus).toBe(false);
//         });
//     });
// });

describe('Function signInWithGoogle', () => {
  it('User should log in with Google', () => signInWithGoogle()
    .then((user) => {
      const providerGoogle = user.providerData[0].providerId;
      expect(providerGoogle).toBe('google.com');
    }));
});