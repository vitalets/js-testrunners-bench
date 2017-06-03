module.exports = {
  name: 'mocha',
  hooks: [
    'before',
    'beforeEach',
    'after',
    'afterEach',
  ],
  suite: `describe('{name}', function () { {content} });`,
  test: `it('{name}', {fn})`,
  syncFn: `function () {}`,
  asyncFn: `function () {
    return new Promise(resolve => setTimeout(resolve, {delay}));
  }`,
};
