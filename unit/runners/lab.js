/**
 * Lab.
 *
 * Supports concurrency:
 * https://github.com/hapijs/lab/issues/68
 */

module.exports = {
  name: 'lab',
  hooks: [
    'lab.before',
    'lab.beforeEach',
    'lab.after',
    'lab.afterEach',
  ],
  file: `const Lab = require('lab'); const lab = exports.lab = Lab.script(); \n {content}`,
  test: `lab.test('{name}', {fn})`,
  syncFn: `done => { done(); }`,
  asyncFn: `done => setTimeout(() => { done(); }, {delay})`
};
