/* eslint-disable eol-last */
import MockFirebase from 'mock-cloud-firestore';
import {
  createNewPost,
  readAllPosts,
  updateLike,
  updatePost,
  deletePost,
  createComments,
  readAllComments,
  deleteComments,
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
    comments: {
      __doc__: {
        comment001: {
          idpost: 'post002',
          photoComment: '../src/img/avatar.png',
          nameComment: 'Fulanita2',
          idCommentUser: '002',
          comment: 'Yo estoy interesada, info por favor',
          date: '30 sept 2021 5:21 p. m',
          orderDate: '20210830172150',
        },
      },
    },
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
        const result = data.find((post) => post.counterLikes === 1);
        expect(result.counterLikes).toBe(1);
        // done();
      },
    )));
});
describe('Function updatePost', () => {
  // eslint-disable-next-line max-len
  test('It should edit a post', () => updatePost('post001', 'tengo botellas para reciclar Editado')
    .then(() => readAllPosts(
      (data) => {
        const result = data.find((post) => post.content === 'tengo botellas para reciclar Editado');
        expect(result.content).toBe('tengo botellas para reciclar Editado');
        // done();
      },
    )));
});

describe('Function deletePost', () => {
  // eslint-disable-next-line max-len
  test('It should delete a post', () => deletePost('001')
    .then(() => readAllPosts(
      (data) => {
        const result = data.find((post) => post === '001');
        expect(result).toBe(undefined);
      },
    )));
});

describe('Function createComments', () => {
  // eslint-disable-next-line max-len
  test('It should created a comment in a post', () => createComments('post002', '../src/img/avatar.png', 'Fulanita2', '002', 'Yo estoy interesada, info por favor')
    .then(() => readAllComments(
      (data) => {
        const result = data.find((com) => com.comment === 'Yo estoy interesada, info por favor');
        expect(result.comment).toBe('Yo estoy interesada, info por favor');
      },
    )));
});

describe('Function deleteComments', () => {
  // eslint-disable-next-line max-len
  test('It should delete a comment ', () => deleteComments('comment001')
    .then(() => readAllComments(
      (data) => {
        const result = data.find((comment) => comment === 'comment001');
        expect(result).toBe(undefined);
      },
    )));
});