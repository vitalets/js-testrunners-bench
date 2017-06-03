/**
 * Runs tests by all runners in particular dir
 */

const path = require('path');
const fs = require('fs-extra');
const {exec} = require('shelljs');

const TESTS_DIR = 'tests';

module.exports = function (config) {
  const results = config.run.reduce((res, runInfo) => {
    const testsPath = path.join(TESTS_DIR, config.name, runInfo.runner, config.generate.name);
    const label = runInfo.label || runInfo.runner;
    if (!fs.existsSync(testsPath)) {
      console.log(`Skipping: ${label}`);
      return res;
    }
    if (runInfo.runner === 'jasmine') {
      updateJasmineConfig(testsPath);
    }
    const cmd = runInfo.cmd.replace('{path}', testsPath);
    console.log(`Running: ${process.env.BENCH_DEBUG ? cmd : label}`);
    const item = {
      runner: label,
      time: mesureCmd(cmd)
    };
    return res.concat([item]);
  }, []);
  return results.sort((a, b) => a.time - b.time);
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

function updateJasmineConfig(testsDir) {
  const config = {
    spec_dir: testsDir,
    spec_files: [
      '**/*.js'
    ]
  };
  const filename = './temp/jasmine.json';
  fs.outputJsonSync(filename, config);
}
