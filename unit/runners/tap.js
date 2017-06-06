/**
 * Tap.
 */

module.exports = {
  name: 'tap',
  file: `var tap = require('tap'); \n {content}`,
  hooks: [
    'tap.before',
    'tap.beforeEach',
    'tap.after',
    'tap.afterEach',
  ],
  suite: `tap.test('{name}', function (tap) { {content}; tap.end(); });`,
  test: `tap.test('{name}', {fn})`,
  syncFn: `function (tap) { tap.end(); }`,
  asyncFn: `function (tap) { setTimeout(() => { tap.end(); }, {delay})}`
};
