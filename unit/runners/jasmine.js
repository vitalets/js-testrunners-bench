module.exports = {
  name: 'jasmine',
  hooks: [
    'beforeAll',
    'beforeEach',
    'afterAll',
    'afterEach',
  ],
  suite: `describe('{name}', function () { {content} });`,
  test: `it('{name}', {fn})`,
  syncFn: `function () {}`,
  asyncFn: `function (done) {
    return new Promise(resolve => setTimeout(resolve, {delay})).then(done);
  }`,
};
