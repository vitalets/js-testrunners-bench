/**
 * Configs and runners for functional tests
 */

exports.configs = [
  require('./configs/load-page'),
];

exports.runners = [
  require('./runners/webdriverio'),
];
