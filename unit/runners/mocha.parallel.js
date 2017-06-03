module.exports = {
  name: 'mocha.parallel',
  hooks: [
    'before',
    'beforeEach',
    'after',
    'afterEach',
  ],
  file: `const parallel = require('mocha.parallel'); \nparallel('{name}', function () { {content} });`,
  test: `it('{name}', {fn})`,
  syncFn: `function () {}`,
  asyncFn: `function () {
    return new Promise(resolve => setTimeout(resolve, {delay}));
  }`,
};
