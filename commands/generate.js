/**
 * Generates tests for all runners
 */

const testingType = process.argv[2];

const fs = require('fs-extra');
const paths = require('./helpers/paths');
const configUtils = require('./helpers/config');
const Generator = require('./helpers/generator');
const {configs, runners} = require(`../${testingType}`);

paths.setTestingType(testingType);
fs.emptyDirSync(paths.getTestingTypePath());
const expandedConfigs = configUtils.getExpandedConfigs(configs);
expandedConfigs.forEach(config => {
  runners.forEach(runner => {
    new Generator(config, runner).generate();
  });
});
