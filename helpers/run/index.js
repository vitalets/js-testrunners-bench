/**
 * Runs bench for combination of genConfigs + runConfigs.
 */

const path = require('path');
const assert = require('assert');
const Measurer = require('./measurer');
const report = require('./report');
const saveResult = require('./save-result');

module.exports = function run(genConfigs, runConfigs, runners) {
  assert(genConfigs.length, `Empty genConfigs`);
  assert(runConfigs.length, `Empty runConfigs`);
  report.printHeader();
  report.printRunners(runConfigs);
  measureRunners(genConfigs, runConfigs, runners);
  report.printFooter();
};

function measureRunners(genConfigs, runConfigs, runners) {
  genConfigs.forEach(genConfig => {
    runConfigs.forEach(runConfig => {
      const measurer = new Measurer(genConfig, runConfig, runners);
      report.printMeasurementHeader(measurer.result);
      measurer.measure();
      report.printMeasurementResult(measurer.result);
      if (process.env.SAVE_BENCH) {
        saveResult(measurer.result);
      }
    });
  });
}
