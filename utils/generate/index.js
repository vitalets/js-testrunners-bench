/**
 * Generates tests for all runners
 */

const fs = require('fs-extra');
const path = require('path');
const configs = require('../configs');
const runners = require('../runners');
const Generator = require('./generator');
const randomizer = require('./randomizer');

const TESTS_DIR = 'tests';

generate();

function generate() {
  randomizer.seed(1000);
  fs.emptyDirSync(TESTS_DIR);
  configs.forEach(generateForRunners);
}

function generateForRunners(config) {
  runners.forEach(runner => {
    const testsPath = path.join(TESTS_DIR, config.name, runner.name, config.generate.name);
    new Generator(testsPath, config.generate, runner).generate();
  });
}


