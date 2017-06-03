/**
 * Available runners
 */

module.exports = [
  require('./mocha'),
  require('./mocha.parallel'),
  require('./mocha-parallel-tests'),
  require('./jasmine'),
  require('./ava'),
  require('./tape'),
  require('./sheeva'),
  require('./jest'),
];
