module.exports = {
  name: 'qunit',
  hooks: [
    'hooks.before',
    'hooks.beforeEach',
    'hooks.after',
    'hooks.afterEach',
  ],
  suite: `QUnit.module('{name}', function (hooks) { {content} });`,
  test: `QUnit.test('{name}', {fn})`,
  syncFn: `function (assert) { assert.expect(0); }`,
  asyncFn: `function (assert) {
    assert.expect(0);
    return new Promise(resolve => setTimeout(resolve, {delay}));
  }`,
};
