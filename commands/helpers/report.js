/**
 * Reports results to console and html
 */
const path = require('path');
const os = require('os');
const chalk = require('chalk');
const columnify = require('columnify');

exports.printHeader = function (text) {
  console.log(chalk.bold(capitalizeFirstLetter(text)));
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
  const {name, filesCount, testsInSuite, suitesInSuite, nestedSuites} = config.generate;
  const testsCount = filesCount * testsInSuite * Math.pow(suitesInSuite, nestedSuites);
  const prefix = chalk.magenta(`${config.name}_${name}:`);
  const line = `${prefix} running ${chalk.blue(testsCount)} tests in ${chalk.blue(filesCount)} files:`;
  console.log(chalk.bold(line));
};

exports.printConfigResult = function (result) {
  result.forEach(res => {
    const times = res.times.slice();
    if (times.length) {
      const {runner, time} = times[0];
      times[0] = {
        runner: chalk.green.bold(runner),
        time: chalk.green.bold(time),
      };
    }
    console.log('');
    console.log(chalk.bold(`benchName: ${res.benchName}`));
    console.log(columnify(times));
    console.log('');
  });
};

exports.printFooter = function () {
  console.log('Done.');
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
