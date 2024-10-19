'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
  const object1 = { name: 'Edsger' };
  let object2 = { name: 'Yevhen' };

  object1.name = 'Dijkstra';
  object2.name = 'Paton';

  //object1 = { name: 'Yevhen Paton' }; - const cannot be changed directly;
  object2 = { name: 'Edsger Dijkstra' };
};

module.exports = { fn };
