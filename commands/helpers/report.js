/**
 * Reports results to console and html
 */
const path = require('path');
const fs = require('fs-extra');
const os = require('os');
const chalk = require('chalk');
const columnify = require('columnify');

exports.printHeader = function (testingType) {
  console.log(chalk.bold(`JavaScript test-runners benchmark.`));
  console.log(`${chalk.bold('Testing type:')} ${testingType}`);
  printSystemInfo();
  console.log(`${chalk.bold('Date:')} ${new Date().toDateString()}`);
  console.log('');
};

exports.printRunners = function (config) {
  const versions = [];
  Object.keys(config.bench).forEach(benchName => {
    config.bench[benchName].forEach(runInfo => {
      const exists = versions.some(v => v.runner === runInfo.runner);
      if (!exists) {
        const npmModule = runInfo.runner === 'qunit' ? 'qunitjs' : runInfo.runner;
        versions.push({
          runner: runInfo.runner,
          version: require(`${npmModule}/package.json`).version,
        });
      }
    });
  });
  console.log(columnify(versions));
  console.log('');
};

exports.printConfigHeader = function (config) {
  const {filesCount, testsCount} = config.generate;
  const prefix = chalk.magenta(`${config.name}:`);
  const line = `${prefix} running ${chalk.blue(testsCount)} tests in ${chalk.blue(filesCount)} files:`;
  console.log(chalk.bold(line));
};

exports.printConfigResult = function (result) {
  Object.keys(result).forEach(benchName => {
    const times = result[benchName].slice();
    if (times.length) {
      const {runner, time} = times[0];
      times[0] = {
        runner: chalk.green.bold(runner),
        time: chalk.green.bold(time),
      };
    }
    console.log('');
    console.log(chalk.bold(`benchName: ${benchName}`));
    console.log(columnify(times));
    console.log('');
  });
};

exports.printFooter = function () {
  console.log('Done.');
};

exports.storeResult = function (config, result) {
  const filePath = 'docs/data.js';
  fs.ensureFileSync(filePath);
  const prefix = 'const data = ';
  const data = fs.readFileSync(filePath, 'utf8').replace(prefix, '').trim();
  const json = data ? JSON.parse(data) : {};
  Object.keys(result).forEach(benchName => {
    const key = `${config.name}_${benchName}`;
    json[key] = Object.assign({}, config.generate, {
      benchName,
      result: result[benchName]
    });
  });
  const newData = `${prefix}${JSON.stringify(json, false, 2)}`;
  fs.writeFileSync(filePath, newData, 'utf8');
};

function printSystemInfo() {
  console.log([
    `${chalk.bold('System:')} ${os.platform()} ${os.arch()} ${os.cpus().length} cpu(s) `,
    `${process.title} ${process.version}`
  ].join(''));
}

function capitalizeFirstLetter(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
