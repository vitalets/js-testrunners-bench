/**
 * Lab.
 *
 * Supports concurrency:
 * https://github.com/hapijs/lab/issues/68
 */

module.exports = {
  name: 'lab',
  file: `const Lab = require('lab'); const lab = exports.lab = Lab.script(); \n {content}`,
  suite: null,
  hooks: [
    'lab.before',
    'lab.beforeEach',
    'lab.after',
    'lab.afterEach',
  ],
  test: `lab.test('{name}', {fn})`,
  syncFn: `function (done) { {content} \n done(); }`,
  asyncFn: `function (done) { {content} }`
};
