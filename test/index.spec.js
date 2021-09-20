
import {
  createUserWEP,
  //signOut,
  //getUsersignInWithGoogle,
  //signInWithFb,
  singInWEP,
} from "../src/";

//Configurando firebase mock
const firebaseMock = require('firebase-mock');
const mockAuth = new firebaseMock.MockAuthentication();
mockAuth.autoFlush();

global.firebase = firebaseMock.MockFirebaseSdk(
  () => null,
  () => mockAuth,
);

describe('Function singInWEP', () => {
  it('User should log in with e-mail and password', () => createUserWEP('nanita462@gmail.com', '12345678a#')
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