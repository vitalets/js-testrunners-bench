/**
 * Generates tests for all configs and runners
 */

const fs = require('fs-extra');
const expandConfig = require('../expand-config');
const Generator = require('./generator');

module.exports = function gen(config, runners) {
  fs.emptyDirSync(config.path);
  const expandedConfigs = expandConfig(config);
  expandedConfigs.forEach(config => {
    runners.forEach(runner => {
      new Generator(config, runner).generate();
    });
  });
};

/*
paths.setTestingType(testingType);
fs.emptyDirSync(paths.getTestingTypePath());
const expandedConfigs = configUtils.getExpandedConfigs(configs);
expandedConfigs.forEach(config => {
  runners.forEach(runner => {
    new Generator(config, runner).generate();
  });
});
*/
