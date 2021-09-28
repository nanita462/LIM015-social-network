/* eslint-disable eol-last */

const storage = () => ({
  ref: (location) => ({
    put: (file) => new Promise((resolve) => {
      resolve(`The file ${file} was add to ${location}`);
    }),
  }),
});

const firebase = {
  storage,
};

export default jest.fn(() => firebase);