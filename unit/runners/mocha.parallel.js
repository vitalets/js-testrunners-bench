module.exports = {
  name: 'mocha.parallel',
  file: `const parallel = require('mocha.parallel'); \nparallel('{name}', function () { {content} });`,
  suite: null,
  hooks: [
    'before',
    'beforeEach',
    'after',
    'afterEach',
  ],
  test: `it('{name}', {fn})`,
  syncFn: `function () { {content} }`,
  asyncFn: `function (done) { {content} }`,
};
