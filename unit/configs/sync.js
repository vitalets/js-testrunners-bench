/**
 * Sync tests
 */

module.exports = {
  name: 'sync',

  generate: {
    filesCount: 50,
    nestedSuites: [0, 1],
    suitesInSuite: 2,
    testsInSuite: 5,
    hooks: [0, 0.5, 1],
    testFn: 'syncFn',
  },

  run: [
    {runner: 'mocha', cmd: 'mocha {path}'},
    {runner: 'jasmine', cmd: 'jasmine JASMINE_CONFIG_PATH=temp/jasmine.json'},
    {runner: 'tape', cmd: 'tape {path}/*.js'},
    {runner: 'qunit', cmd: 'qunit {path}'},
    {runner: 'lab', cmd: 'lab {path}'},
    //{runner: 'ava', cmd: 'ava {path}'},
    //{runner: 'jest', cmd: 'jest {path}'},
  ]
};

