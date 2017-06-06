/**
 * Runs tests by all runners in particular dir
 */

const path = require('path');
const fs = require('fs-extra');
const {exec} = require('shelljs');
const paths = require('./paths');

module.exports = class Executer {
  constructor(config, runners) {
    this._config = config;
    this._runners = runners;
    this._results = [];
  }

  mesure() {
    this._config.run.forEach(runInfo => this._mesureRunner(runInfo));
    return this._results.sort((a, b) => a.time - b.time);
  }

  _mesureRunner(runInfo) {
    const testsPath = paths.getTestsPath(this._config, runInfo.runner);
    const label = runInfo.label || runInfo.runner;
    const cmd = runInfo.cmd.replace('{path}', testsPath);
    if (!fs.existsSync(testsPath)) {
      console.log(`Skipping: ${label} "${cmd}" - path does not exist: ${testsPath}`);
      return;
    }
    console.log(`Running: ${label} "${cmd}"`);
    this._writeRunnerConfigFile(testsPath, runInfo);
    const result = {
      runner: label,
      time: mesureCmd(cmd)
    };
    this._results.push(result);
  }

  _writeRunnerConfigFile(testsPath, runInfo) {
    const runner = this._runners.find(runner => runner.name === runInfo.runner);
    if (runner.writeConfigFile) {
      runner.writeConfigFile(testsPath, runInfo);
    }
  }
};

function mesureCmd(cmd, count = 1) {
  const values = [];
  for (let i = 0; i < count; i++) {
    const proc = exec(`time ${cmd}`, {silent: true});
    assertOk(cmd, proc.stderr);
    assertOk(cmd, proc.stdout);

    const matches = proc.stderr.match(/real\s+([0-9]+)m([0-9\.]+)s/);
    const minutes = parseInt(matches[1], 10);
    const seconds = parseFloat(matches[2]);
    const total = minutes * 60 + seconds;
    values.push(total);
  }
  const sum = values.reduce((r, value) => r + value, 0);
  return (sum / count).toPrecision(3);
}

function assertOk(cmd, output) {
  // if (!output) {
  //   console.log(`Output is empty! COMMAND: ${cmd}`);
  //   process.exit(1);
  // }
  if (/error|exception/i.test(output)) {
    console.log(output);
    console.log(`Error in output! COMMAND: ${cmd}`);
    process.exit(1);
  }
}
