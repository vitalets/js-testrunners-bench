/**
 * Qunit does not support parallel execution:
 * https://github.com/qunitjs/qunit/issues/947
 */

module.exports = {
  name: 'qunit',
  suite: `QUnit.module('{name}', function (hooks) { {content} });`,
  hooks: [
    'hooks.before',
    'hooks.beforeEach',
    'hooks.after',
    'hooks.afterEach',
  ],
  test: `QUnit.test('{name}', {fn})`,
  syncFn: `function (assert) { 
    assert.expect(0);
    {content} 
  }`,
  asyncFn: `function (assert) {
    var done = assert.async();
    assert.expect(0);
    {content}
  }`,
};
