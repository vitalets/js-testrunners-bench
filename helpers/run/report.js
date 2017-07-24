/**
 * Reports results to console and html
 */
const path = require('path');
const os = require('os');
const chalk = require('chalk');
const columnify = require('columnify');

exports.printHeader = function () {
  console.log(chalk.bold(`JavaScript test-runners benchmark`));
  printSystemInfo();
  console.log(`${chalk.bold('Date:')} ${new Date().toDateString()}`);
  console.log('');
};

exports.printRunners = function (runConfigs) {
  const versions = [];
  runConfigs.forEach(runConfig => {
    runConfig.runs.forEach(runInfo => {
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

exports.printMeasurementHeader = function (result) {
  const {files, tests} = result.genConfig;
  console.log(`${chalk.bold('Bench type:')} ${result.name.replace(/_/g, ', ')}`);
  console.log(`${chalk.bold('Tests count:')} ${tests} (${files} files)`);
};

exports.printMeasurementResult = function (result) {
  const runs = result.runs.slice();
  if (runs.length) {
    const {label, time} = runs[0];
    // mark top with bold
    runs[0] = {
      label: chalk.green.bold(label),
      time: chalk.green.bold(time),
    };
  }
  console.log(chalk.bold('Result:'));
  console.log(columnify(runs));
  console.log('');
};

exports.printFooter = function () {
  console.log(chalk.bold('Done.'));
};

function printSystemInfo() {
  console.log([
    `${chalk.bold('System:')} ${os.platform()} ${os.arch()} ${os.cpus().length} cpu(s) `,
    `${process.title} ${process.version}`
  ].join(''));
}
