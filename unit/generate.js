/**
 * Generates tests for all runners
 */

const fs = require('fs-extra');
const path = require('path');
const configs = require('./configs');
const runners = require('./runners');
const Generator = require('../utils/generator');

const TESTS_DIR = path.join('tests', 'unit');

fs.emptyDirSync(TESTS_DIR);
configs.forEach(config => {
  runners.forEach(runner => {
    const testsPath = path.join(TESTS_DIR, config.name, runner.name, config.generate.name);
    new Generator(testsPath, config.generate, runner).generate();
  });
});
