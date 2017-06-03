/**
 * Runs bench for all runners for particular config
 */
const path = require('path');
const os = require('os');
const chalk = require('chalk');
const columnify = require('columnify');
const configs = require('../configs');
const execConfig = require('./exec-config');

const configName = process.argv[2];
const subConfigName = process.argv[3] || '';
const config = configs.find(c => c.name === configName);

run();

function run() {
  printHeader();
  printRunners();
  configs.filter(shouldRunConfig).forEach(runForConfig);
  console.log('Done.');
}

function shouldRunConfig(config) {
  return !subConfigName || config.generate.name === subConfigName;
}

function runForConfig(config) {
    printConfigHeader(config);
    const results = execConfig(config);
    printConfigResults(results);
}

function printHeader() {
  console.log(chalk.bold(`testrunners-bench-unit`));
  console.log([
    `${chalk.bold('System:')} ${os.platform()} ${os.arch()} ${os.cpus().length} cpu(s) `,
    `${process.title} ${process.version}`
  ].join(''));
  console.log(`${chalk.bold('Date:')} ${new Date().toDateString()}`);
  console.log('');
}

function printRunners() {
  const runners = new Set();
  const versions = [];
  config.run.forEach(runInfo => runners.add(runInfo.runner));
  runners.forEach(runner => {
    versions.push({
      runner: runner,
      version: require(`${runner}/package.json`).version,
    });
  });
  console.log(columnify(versions));
  console.log('');
}

function printConfigHeader(config) {
  const {name, filesCount, testsInSuite, suitesInSuite, nestedSuites} = config.generate;
  const testsCount = filesCount * testsInSuite * Math.pow(suitesInSuite, nestedSuites);
  const prefix = chalk.magenta(`${config.name} (${name}):`);
  const line = `${prefix} running ${chalk.blue(testsCount)} tests in ${chalk.blue(filesCount)} files:`;
  console.log(chalk.bold(line));
}

function printConfigResults(results) {
  results[0].runner = chalk.green.bold(results[0].runner);
  results[0].time = chalk.green.bold(results[0].time);
  console.log('');
  console.log(columnify(results));
  console.log('');
}
