/**
 * Tape runner.
 *
 * Tape does not support hooks:
 * https://github.com/substack/tape/issues/59
 */

module.exports = {
  name: 'tape',
  file: `var test = require('tape'); \n {content}`,
  test: `test('{name}', {fn})`,
  syncFn: `t => { t.end(); }`,
  asyncFn: `t => setTimeout(() => { t.end(); }, {delay})`
};
