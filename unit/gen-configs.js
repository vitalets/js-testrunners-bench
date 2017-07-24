/**
 * Config for generating test-files
 */

const expandConfig = require('../helpers/expand-config');

module.exports = expandConfig({
  basePath: 'tests/unit',
  files: 50,
  nestedSuites: [false, true],
  hooks: [false, true],
  suitesInSuite: 2,
  testsInSuite: 5,
  test: [
    {name: 'syncEmptyFn', value: ``},
    {name: 'syncHeavyFn', value: `
      eval(''); // disable V8 optimizations
      for (let i = 0; i < 10000; i++) {
        new Date();
      }
    `},
    {name: 'asyncEmptyFnZeroDelay', value: `setTimeout(done, 0)`},
    {name: 'asyncEmptyFnRandomDelay', value: `setTimeout(done, Math.round({random} * 10))`},
  ]
});
