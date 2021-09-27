/* eslint-disable eol-last */
/* eslint-disable indent */
// https://github.com/soumak77/firebase-mock/blob/master/tutorials/integration/setup.md
import {
  createUserWEP,
  signInWithGoogle,
  signOut,
  singInWEP,
  userInfo,
  authStateChanged,
} from '../src/firebase/auth.js';

// Configurando firebase mock
const firebaseMock = require('firebase-mock');

const mockauth = new firebaseMock.MockAuthentication();
mockauth.autoFlush();

global.firebase = firebaseMock.MockFirebaseSdk(
  () => null, // usar null si cód. no es Autenticación, firestore, storage o messaging
  () => mockauth,
);

describe('Function createUserWEP', () => {
  it('User should create an account with e-mail and password', () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    createUserWEP('abc@gmail.com', '12345678a#')
    .then((user) => {
      expect(user.email).toBe('abc@gmail.com');
    }));
});

describe('Function signInWithGoogle', () => {
  it('User should log in with Google', () => {
    signInWithGoogle().then((user) => {
      expect(user.isAnonymus).toBe(false);
    });
  });
});

// describe('Function signInWithGoogle', () => {
//   it('User should log in with Google', () => signInWithGoogle()
//     .then((user) => {
//       const providerGoogle = user.providerData[0].providerId;
//       expect(providerGoogle).toBe('google.com');
//     }));
// });

describe('Function signOut', () => {
  it('User should log out session', () => {
    signOut().then((user) => {
      expect(user.i).toBe(null);
    });
  });
});

describe('Function singInWEP', () => {
  it('User should log in with e-mail and password', () => singInWEP('nanita462@gmail.com', '12345678a#')
    .then((user) => {
      expect(user.email).toBe('nanita462@gmail.com');
    }));
});

describe('Function userInfo', () => {
  it('Should give user data if user logs in', () => {
    const userMock = {
      userInfo: {
        id: '001',
        displayName: 'fulanita',
        photo: '../src/img/avatar.png',
      },
    };
    userMock.currentUser = authStateChanged();
    const isId = () => {
      expect(userInfo.id).toEqual('001');
    };
    userInfo(isId);
  });

  it('Should not give user data if user logs out', () => {
    expect(userInfo.id).toBe(undefined);
  });
});