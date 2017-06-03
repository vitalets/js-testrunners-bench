/**
 * Sync tests
 */

module.exports = {
  name: 'sync',

  generate: {
    filesCount: 50,
    nestedSuites: [0, 1],
    hooks: [0, 0.5, 1],
    testsInSuite: 5,
    suitesInSuite: 2,
    fn: 'syncFn',
  },

  run: [
    {runner: 'mocha', cmd: 'mocha {path}'},
    {runner: 'jasmine', cmd: 'jasmine JASMINE_CONFIG_PATH=temp/jasmine.json'},
    {runner: 'tape', cmd: 'tape {path}/*.js'},
    {runner: 'ava', cmd: 'ava {path}'},
    {runner: 'jest', cmd: 'jest {path}'},
  ]
};

