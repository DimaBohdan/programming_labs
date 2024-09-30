'use strict'
const hash = {};
const CountTypes = (array) => {
  for (const element of array){
    const type = typeof element;
    const count = hash[type] || 0;
      hash[type] = count + 1;
  }
    return hash;
};
console.log(CountTypes([3, 6, 'ddd', true, false]));
