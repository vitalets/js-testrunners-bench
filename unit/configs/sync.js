/**
 * Sync tests
 */

module.exports = {
  baseName: 'sync',

  generate: {
    filesCount: 50,
    nestedSuites: [0, 1],
    suitesInSuite: 2,
    testsInSuite: 5,
    hooks: [0, 0.5, 1],
    testFn: 'syncFn',
  },

  bench: {
    default: [
      {runner: 'mocha', cmd: 'mocha {path}'},
      {runner: 'jasmine', cmd: 'jasmine JASMINE_CONFIG_PATH=temp/jasmine.json'},
      // {runner: 'tape', cmd: 'tape {path}/*.js'},
      // {runner: 'qunit', cmd: 'qunit {path}'},
      // {runner: 'lab', cmd: 'lab {path}'},
      // {runner: 'tap', cmd: 'tap {path} --jobs-auto'},
      // {runner: 'ava', cmd: 'ava {path}'},
      // {runner: 'jest', cmd: 'jest {path}'},
    ],
    withBabel: [
      {runner: 'mocha', cmd: 'mocha {path} --compilers js:babel-register'},
      {runner: 'jasmine', cmd: 'jasmine JASMINE_CONFIG_PATH=temp/jasmine.json', babel: true},
      // {runner: 'lab', cmd: 'lab {path} -T node_modules/lab-babel'},
      // {runner: 'ava', cmd: 'ava {path}'},
      // {runner: 'jest', cmd: 'jest {path}'},
    ]
  },
};

