/**
 * Runs bench for all runners for particular config
 * Example of call:
 * ```
 * node utils/bench unit async
 * ```
 */

const testingType = process.argv[2];
const configName = process.argv[3];

const assert = require('assert');
const paths = require('./helpers/paths');
const configUtils = require('./helpers/config');
const Executer = require('./helpers/executer');
const report = require('./helpers/report');
const {configs, runners} = require(`../${testingType}`);

paths.setTestingType(testingType);
const expandedConfigs = configUtils.getExpandedConfigs(configs, configName);
assert(expandedConfigs.length, `No configs found for: ${configName}`);
report.printHeader(`${testingType} testing`);
report.printRunners(expandedConfigs[0]);
expandedConfigs.forEach(mesureConfig);
report.printFooter();

function mesureConfig(config) {
  report.printConfigHeader(config);
  const result = new Executer(config, runners).mesure();
  report.printConfigResult(result);
  if (!process.env.BENCH_STORE) {
    report.storeResult(config, result);
  }
}
