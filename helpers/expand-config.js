
const path = require('path');
const utils = require('./utils');

/**
 * Expands config
 *
 * @returns {Array}
 */
module.exports = function expandConfig(config) {
  const expandedConfigs = utils.expandArrayProps(config);
  return expandedConfigs
    .map(sortPath)
    .map(setName)
    .map(setOutPath)
    .map(setTestsCount);
};

function setTestsCount(config) {
  const {files, testsInSuite, suitesInSuite, nestedSuites} = config;
  const testsInFile = nestedSuites ? testsInSuite * suitesInSuite : testsInSuite;
  const tests = testsInFile * files;
  return Object.assign(config, {tests});
}

function sortPath(config) {
  config._path.sort((a, b) => a > b ? -1 : 1).join('_');
  return config;
}

function setName(config) {
  const name = config._path.join('_');
  return Object.assign(config, {name});
}

function setOutPath(config) {
  const outPath = path.join.apply(path, [config.basePath].concat(config._path));
  return Object.assign(config, {outPath});
}
