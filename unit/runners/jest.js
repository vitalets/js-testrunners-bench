module.exports = {
  name: 'jest',
  hooks: [
    'beforeAll',
    'beforeEach',
    'afterAll',
    'afterEach',
  ],
  suite: `describe('{name}', () => { {content} });`,
  test: `test('{name}', {fn})`,
  syncFn: `() => {}`,
  asyncFn: `() => new Promise(resolve => setTimeout(resolve, {delay}))`
};
