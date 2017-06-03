module.exports = {
  name: 'sheeva',
  hooks: [
    'before',
    'beforeEach',
    'after',
    'afterEach',
  ],
  suite: `describe('{name}', () => { {content} });`,
  test: `it('{name}', {fn});`,
  syncFn: `() => {}`,
  asyncFn: `() => new Promise(resolve => setTimeout(resolve, {delay}))`,
};
