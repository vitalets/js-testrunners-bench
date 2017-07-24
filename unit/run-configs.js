
module.exports = [
  {
    name: 'noBabel',
    runs: [
      {runner: 'mocha', cmd: 'mocha {path}'},
      {runner: 'jasmine', cmd: 'jasmine JASMINE_CONFIG_PATH=temp/jasmine.json'},
      {runner: 'mocha.parallel', cmd: 'mocha {path}'},
      {runner: 'mocha-parallel-tests', cmd: 'mocha-parallel-tests {path}'},
      {runner: 'qunit', cmd: 'qunit {path}'},
      {runner: 'tape', cmd: 'tape {path}/*.js'},
      {runner: 'tap', cmd: 'tap {path} --jobs-auto'},
      {runner: 'lab', cmd: 'lab --parallel {path}'},
      {runner: 'ava', cmd: 'ava {path} --concurrency=4'},
      {label: 'jest (jsdom)', runner: 'jest', cmd: 'jest --env=jsdom {path}'},
      {label: 'jest (node)', runner: 'jest', cmd: 'jest --env=node {path}'},
    ]
  },
  {
    name: 'withBabel',
    runs: [
      {runner: 'mocha', cmd: 'mocha {path} --compilers js:babel-register'},
      {runner: 'mocha-parallel-tests', cmd: 'mocha-parallel-tests {path} --compilers js:babel-register'},
      {runner: 'jasmine', cmd: 'jasmine JASMINE_CONFIG_PATH=temp/jasmine.json', babel: true},
      {runner: 'lab', cmd: 'lab {path} -T node_modules/lab-babel'},
      {runner: 'ava', cmd: 'ava {path} --concurrency=4'},
      {label: 'jest (jsdom)', runner: 'jest', cmd: 'jest --env=jsdom {path}'},
      {label: 'jest (node)', runner: 'jest', cmd: 'jest --env=node {path}'},
    ]
  },
  {
    name: 'AVA',
    runs: [
      {label: 'ava (serial)', runner: 'ava', cmd: 'ava {path} --serial'},
      {label: 'ava (default)', runner: 'ava', cmd: 'ava {path}'},
      {label: 'ava (concurrency=2)', runner: 'ava', cmd: 'ava {path} --concurrency=2'},
      {label: 'ava (concurrency=4)', runner: 'ava', cmd: 'ava {path} --concurrency=4'},
      {label: 'ava (concurrency=50)', runner: 'ava', cmd: 'ava {path} --concurrency=50'},
      {label: 'ava (no-power-assert)', runner: 'ava', cmd: 'ava {path} --no-power-assert'},
    ]
  },
];
