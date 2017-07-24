/**
 * Measures runners execution times for pair of genConfig and runConfig.
 */

const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');
const utils = require('../utils');

module.exports = class Measurer {
  constructor(genConfig, runConfig, runners) {
    this._genConfig = genConfig;
    this._runConfig = runConfig;
    this._runners = runners;
    this._result = {
      name: `${genConfig.name} (${runConfig.name})`,
      genConfig,
      runConfig,
      runs: [],
    };
  }

  measure() {
    this._measureRunners();
    this._sortResults();
    return this._result;
  }

  _measureRunners() {
    this._runConfig.runs.forEach(runInfo => this._measureRunner(runInfo));
  }

  _measureRunner(runInfo) {
    const testsPath = path.join(this._genConfig.outPath, runInfo.runner);
    const label = runInfo.label || runInfo.runner;
    const cmd = runInfo.cmd.replace('{path}', testsPath);
    if (!fs.existsSync(testsPath)) {
      console.log(`${chalk.bold('Skipping:')} ${label}, ${chalk.bold('cmd:')} ${cmd}`);
      return;
    }
    console.log(`${chalk.bold('Running:')} ${label}, ${chalk.bold('cmd:')} ${cmd}`);
    this._writeRunnerConfigFile(testsPath, runInfo);
    const time = utils.measureCmd(cmd).toPrecision(3);
    const runnerResult = {label, time};
    this._result.runs.push(runnerResult);
  }

  _writeRunnerConfigFile(runnerTestsPath, runInfo) {
    const runner = this._runners.find(runner => runner.name === runInfo.runner);
    if (runner.writeConfigFile) {
      runner.writeConfigFile(runnerTestsPath, runInfo);
    }
  }

  _sortResults() {
    this._result.runs.sort((a, b) => a.time - b.time);
  }
};
