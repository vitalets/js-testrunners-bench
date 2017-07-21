
const utils = require('./utils');

/**
 * Expands config
 *
 * @returns {Array}
 */
module.exports = function expandConfig(config) {
  const expandedConfigs = utils.expandArrayProps(config);
  return expandedConfigs
    .map(calcTestsCount)
    .map(setConfigName);
};

function calcTestsCount(config) {
  const {files, testsInSuite, suitesInSuite, nestedSuites} = config;
  const testsInFile = nestedSuites ? testsInSuite * suitesInSuite : testsInSuite;
  const tests = testsInFile * files;
  return Object.assign(config, {tests});
}

function setConfigName(config) {
  const name = config._path.sort((a, b) => a > b ? -1 : 1).join('_');
  return Object.assign(config, {name});
}

