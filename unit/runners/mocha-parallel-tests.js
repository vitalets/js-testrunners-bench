module.exports = {
  name: 'mocha-parallel-tests',
  file: '',
  suite: `describe('{name}', function () { {content} });`,
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
