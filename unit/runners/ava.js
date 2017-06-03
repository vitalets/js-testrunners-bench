module.exports = {
  name: 'ava',
  hooks: [
    'test.before',
    'test.beforeEach',
    'test.after',
    'test.afterEach',
  ],
  file: `import test from 'ava'; \n {content}`,
  test: `test('{name}', {fn})`,
  syncFn: `() => {}`,
  asyncFn: `() => new Promise(resolve => setTimeout(resolve, {delay}))`
};
