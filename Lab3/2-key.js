'use strict';

const generateKey = (length, possible) => {
  const LEN = possible.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * LEN);
    key += possible[index];
  }
  return key;
};

module.exports = { generateKey };
