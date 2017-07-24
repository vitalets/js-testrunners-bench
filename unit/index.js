
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
  case 'sync-empty':
    runBench('test=syncEmptyFn_nestedSuites=false_hooks=false', 'noBabel');
    break;
  case 'sync-empty-babel':
    runBench('test=syncEmptyFn_nestedSuites=false_hooks=false', 'withBabel');
    break;
  case 'sync-empty-nested':
    runBench('test=syncEmptyFn_nestedSuites=true_hooks=false', 'noBabel');
    break;
  case 'sync-empty-nested-babel':
    runBench('test=syncEmptyFn_nestedSuites=true_hooks=false', 'withBabel');
    break;
  case 'sync-heavy':
    runBench('test=syncHeavyFn_nestedSuites=false_hooks=false', 'noBabel');
    break;
  case 'all':
    runBench();
    break;
  case 'conf':
    printConfigs();
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
