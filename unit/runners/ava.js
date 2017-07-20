module.exports = {
  name: 'ava',
  file: `import test from 'ava'; \n {content}`,
  suite: null,
  hooks: [
    'test.before',
    'test.beforeEach',
    'test.after',
    'test.afterEach',
  ],
  test: `test('{name}', {fn})`,
  syncFn: `() => { {content} }`,
  asyncFn: `() => new Promise(done => { {content} })`,
};
