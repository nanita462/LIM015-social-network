/* eslint-disable eol-last */
import MockFirebase from 'mock-cloud-firestore';
import {
  createNewPost,
  readAllPosts,
  updateLike,
} from '../src/firebase/firestore.js';

const testData = {
  __collection__: {
    posts: {
      __doc__: {
        post001: {
          content: 'tengo botellas para reciclar',
          id: '001',
          name: 'Fulanita1',
          photo: '../src/img/avatar.png',
          countLikes: 0,
          date: '27 sept. 2021 11:05 a. m.',
          orderDate: '20210827110540',
          postImgUrl: '../src/img/arbol_ecologico.png',
        },
        post002: {
          content: 'tengo plastico para reciclar',
          id: '002',
          name: 'Fulanita2',
          photo: '../src/img/avatar.png',
          countLikes: 1,
          date: '27 sept. 2021 11:07 a. m.',
          orderDate: '20210827110740',
          postImgUrl: '../src/img/arbol_ecologico.png',
        },
      },
    },
    // comments: {
    //   __doc__: {
    //     comment001: {
    //       comment: 'Qué bonita foto',
    //       date: '17 may 2021 9:57 a. m',
    //       idCommentUser: '002',
    //       idpost: 'post002',
    //       nameComment: 'Thais',
    //       orderDate: '20210412192948',
    //       photoComment: '../img/icon.jpg',
    //     },
    //   },
    // },
  },
};

global.firebase = new MockFirebase(testData);

describe('Function createNewPost', () => {
  // eslint-disable-next-line max-len
  test('It should create a post', () => createNewPost('../src/img/avatar.png', 'Fulanita1', '001', 'tengo botellas para reciclar', 0, '../src/img/arbol_ecologico.png')
    .then(() => readAllPosts(
      (data) => {
        const result = data.find((post) => post.content === 'tengo botellas para reciclar');
        expect(result.content).toBe('tengo botellas para reciclar');
        // done();
      },
    )));
});

describe('Function updateLike', () => {
  test('It should update likes', () => updateLike('post002', 1)
    .then(() => readAllPosts(
      (data) => {
        const result = data.find((post) => post.countLikes === 1);
        expect(result.countLikes).toBe(1);
        // done();
      },
    )));
});