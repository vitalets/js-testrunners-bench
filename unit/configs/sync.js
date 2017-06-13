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
    'no Babel': [
      {runner: 'mocha', cmd: 'mocha {path}'},
      {runner: 'mocha.parallel', cmd: 'mocha {path}'},
      {runner: 'mocha-parallel-tests', cmd: 'mocha-parallel-tests {path}'},
      {runner: 'jasmine', cmd: 'jasmine JASMINE_CONFIG_PATH=temp/jasmine.json'},
      {runner: 'tape', cmd: 'tape {path}/*.js'},
      {runner: 'qunit', cmd: 'qunit {path}'},
      {runner: 'lab', cmd: 'lab --parallel {path}'},
      {runner: 'tap', cmd: 'tap {path} --jobs-auto'},
      {runner: 'jest', cmd: 'jest {path}'},
      {runner: 'ava', cmd: 'ava {path} --concurrency=4'},
    ],
    'with Babel': [
      {runner: 'mocha', cmd: 'mocha {path} --compilers js:babel-register'},
      {runner: 'mocha-parallel-tests', cmd: 'mocha-parallel-tests {path} --compilers js:babel-register'},
      {runner: 'jasmine', cmd: 'jasmine JASMINE_CONFIG_PATH=temp/jasmine.json', babel: true},
      {runner: 'lab', cmd: 'lab {path} -T node_modules/lab-babel'},
      {runner: 'ava', cmd: 'ava {path} --concurrency=4'},
      {runner: 'jest', cmd: 'jest {path}'},
    ],
    'AVA': [
      {label: 'serial', runner: 'ava', cmd: 'ava {path} --serial'},
      {label: 'default', runner: 'ava', cmd: 'ava {path}'},
      {label: 'concurrency=2', runner: 'ava', cmd: 'ava {path} --concurrency=2'},
      {label: 'concurrency=4', runner: 'ava', cmd: 'ava {path} --concurrency=4'},
      {label: 'concurrency=50', runner: 'ava', cmd: 'ava {path} --concurrency=50'},
      {label: 'concurrency=100', runner: 'ava', cmd: 'ava {path} --concurrency=100'},
      {label: 'no-power-assert', runner: 'ava', cmd: 'ava {path} --no-power-assert'},
    ]
  },
};

