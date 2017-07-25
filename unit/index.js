/**
 * Entry point for running tests.
 * @examples
 * node unit gen
 * node unit conf
 * node unit run test=syncEmptyFn_nestedSuites=false babel=false
 * node unit run test=syncEmptyFn_nestedSuites=false babel=true
 * node unit run test=syncHeavyFn_nestedSuites=false babel=false
 * node unit run test=syncHeavyFn_nestedSuites=true babel=false
 * node unit run test=asyncEmptyFnZeroDelay_nestedSuites=false babel=false
 * node unit run test=asyncEmptyFnRandomDelay_nestedSuites=false babel=false
 */
const chalk = require('chalk');
const genConfigs = require('./gen-configs');
const runConfigs = require('./run-configs');
const runners = require('./runners');
const run = require('../helpers/run');
const gen = require('../helpers/gen');

const command = process.argv[2];

switch (command) {
  case 'gen':
    gen(genConfigs, runners);
    break;
  case 'conf':
    printConfigs();
    break;
  case 'run':
    const genFilter = process.argv[3];
    const runFilter = process.argv[4];
    runBench(genFilter, runFilter);
    break;
  case 'run-and-save':
    // run all benchs and save results to docs/data.js
    process.env.SAVE_BENCH = true;
    runBench();
    break;
  default:
    console.log(`Unknown command: ${command}`);
}

function runBench(genConfigName, runConfigName) {
  const filteredGenConfigs = filterByName(genConfigs, genConfigName);
  const filteredRunConfigs = filterByName(runConfigs, runConfigName);
  run(filteredGenConfigs, filteredRunConfigs, runners);
}

function printConfigs() {
  console.log(chalk.bold('genConfigs:'));
  genConfigs.forEach(genConfig => console.log(genConfig.name));
  console.log(chalk.bold('runConfigs:'));
  runConfigs.forEach(runConfig => console.log(runConfig.name));
}

function filterByName(configs, value) {
  return configs.filter(config => !value || config.name.indexOf(value) >= 0);
}
