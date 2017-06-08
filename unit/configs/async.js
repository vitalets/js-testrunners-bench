/**
 * Async tests
 */

module.exports = {
  name: 'async',

  generate: {
    filesCount: 50,
    nestedSuites: [0, 1],
    suitesInSuite: 2,
    testsInSuite: 5,
    hooks: [0, 0.5, 1],
    delay: [0, '0-10'],
    testFn: 'asyncFn',
  },

  bench: {
    default: [
      {runner: 'mocha', cmd: 'mocha {path}'},
      {runner: 'jasmine', cmd: 'jasmine JASMINE_CONFIG_PATH=temp/jasmine.json'},
      {runner: 'mocha.parallel', cmd: 'mocha {path}'},
      {runner: 'mocha-parallel-tests', cmd: 'mocha-parallel-tests {path}'},
      //{runner: 'qunit', cmd: 'qunit {path}'},
      {runner: 'tape', cmd: 'tape {path}/*.js'},
      {label: 'tap (parallel)', runner: 'tap', cmd: 'tap {path} --jobs-auto'},
      //{label: 'lab (parallel)', runner: 'lab', cmd: 'lab --parallel {path}'},
      //{label: 'ava', runner: 'ava', cmd: 'ava {path}'},
      //{label: 'ava (concurrency=4)', runner: 'ava', cmd: 'ava {path} --concurrency=4'},
      // {runner: 'jest', cmd: 'jest {path}'},
    ]
  },
};
