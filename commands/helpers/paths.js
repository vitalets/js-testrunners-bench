/**
 * Singleton for getting paths
 */

const path = require('path');
const TESTS_DIR = 'tests';

class Paths {
  constructor() {
    this._testingType = '';
  }

  setTestingType(type) {
    this._testingType = type;
  }

  getTestingTypePath() {
    return path.join(TESTS_DIR, this._testingType);
  }

  getTestsPath(config, runnerName) {
    return path.join(TESTS_DIR, this._testingType, config.name, runnerName, config.generate.name);
  }
}

module.exports = new Paths();
