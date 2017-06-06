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
    {label: 'mocha (babel)', runner: 'mocha', cmd: 'mocha {path} --compilers js:babel-register'},
    {runner: 'jasmine', cmd: 'jasmine JASMINE_CONFIG_PATH=temp/jasmine.json'},
    {label: 'jasmine (babel)', runner: 'jasmine', cmd: 'jasmine JASMINE_CONFIG_PATH=temp/jasmine.json', babel: true},
    {runner: 'tape', cmd: 'tape {path}/*.js'},
    {runner: 'qunit', cmd: 'qunit {path}'},
    {runner: 'lab', cmd: 'lab {path}'},
    {label: 'lab (babel)', runner: 'lab', cmd: 'lab {path} -T node_modules/lab-babel'},
    //{label: 'tap (parallel)', runner: 'tap', cmd: 'tap {path} --jobs-auto'},
    // {runner: 'tap', cmd: 'tap {path}'},
    //{runner: 'ava', cmd: 'ava {path}'},
    //{runner: 'jest', cmd: 'jest {path}'},
  ]
};

