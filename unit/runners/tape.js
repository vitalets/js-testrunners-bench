/**
 * Tape.
 *
 * Does not support hooks:
 * https://github.com/substack/tape/issues/59
 *
 * Does not support parallel execution:
 * https://github.com/substack/tape/issues/78
 */

module.exports = {
  name: 'tape',
  file: `var test = require('tape'); \n {content}`,
  test: `test('{name}', {fn})`,
  syncFn: `function (t) { 
    {content} 
    t.end(); 
  }`,
  asyncFn: `function (t) { 
    var done = t.end; 
    {content}
  }`
};
