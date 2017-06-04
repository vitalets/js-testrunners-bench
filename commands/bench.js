/**
 * Runs bench for all runners for particular config
 * Example of call:
 * ```
 * node utils/bench unit async
 * ```
 */

const testingType = process.argv[2];
const baseConfigName = process.argv[3];
const subConfigName = process.argv[4];

const paths = require('./helpers/paths');
const configUtils = require('./helpers/config');
const Executer = require('./helpers/executer');
const report = require('./helpers/report');
const {configs} = require(`../${testingType}`);

paths.setTestingType(testingType);
const expandedConfigs = configUtils.getExpandedConfigs(configs, baseConfigName, subConfigName);
report.printHeader(`${testingType} testing`);
report.printRunners(expandedConfigs[0]);
expandedConfigs.forEach(mesureConfig);
report.printFooter();

function mesureConfig(config) {
  report.printConfigHeader(config);
  const results = new Executer(config).mesure();
  report.printConfigResults(results);
}
