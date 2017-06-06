/**
 * Configs and runners for unit tests
 */

exports.configs = [
  require('./configs/sync'),
  require('./configs/async'),
];

exports.runners = [
  require('./runners/mocha'),
  require('./runners/mocha.parallel'),
  require('./runners/mocha-parallel-tests'),
  require('./runners/jasmine'),
  require('./runners/qunit'),
  require('./runners/ava'),
  require('./runners/tape'),
  require('./runners/jest'),
];
