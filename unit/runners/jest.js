module.exports = {
  name: 'jest',
  file: '',
  suite: `describe('{name}', () => { {content} });`,
  hooks: [
    'beforeAll',
    'beforeEach',
    'afterAll',
    'afterEach',
  ],
  test: `test('{name}', {fn})`,
  syncFn: `function () { {content} }`,
  asyncFn: `function (done) { {content} }`
};
