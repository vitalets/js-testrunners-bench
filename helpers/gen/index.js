/**
 * Generates tests for all configs and runners
 */

const fs = require('fs-extra');
const Generator = require('./generator');

module.exports = function gen(configs, runners) {
  fs.emptyDirSync(configs[0].basePath);
  configs.forEach(config => {
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
