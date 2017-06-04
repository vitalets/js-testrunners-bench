/**
 * Generates tests for particular config and runner
 */
const fs = require('fs-extra');
const path = require('path');
const randomizer = require('./randomizer');
const paths = require('./paths');

module.exports = class Generator {
  constructor(config, runner) {
    this._config = config.generate;
    this._runner = runner;
    this._testsPath = paths.getTestsPath(config, runner.name);
    randomizer.reset();
  }

  generate() {
    if (this._config.nestedSuites > 0 && !this._supportsSuites()) {
      return;
    }
    if (this._config.hooks > 0 && !this._supportsHooks()) {
      return;
    }
    if (!this._getFn()) {
      return;
    }
    fs.emptyDirSync(this._testsPath);
    this._createFiles();
    console.log(`Generated ${this._config.filesCount} files in ${this._testsPath}`);
  }

  _createFiles() {
    for (let i = 0; i < this._config.filesCount; i++) {
      this._createFile(i);
    }
  }

  _createFile(index) {
    const suiteName = `suite ${index}`;
    const fileName = `test-${index}.js`;
    const content = this._getSuite(suiteName, 0);
    const fileContent = (this._runner.file || '{content}')
      .replace('{name}', fileName)
      .replace('{content}', content);

    const fullPath = path.join(this._testsPath, fileName);
    if (!fileContent) {
      throw new Error(`Empty file: ${fullPath}`);
    }

    fs.writeFileSync(fullPath, fileContent);
  }

  _getSuite(suiteName, suiteLevel) {
    const content = this._getSuiteContent(suiteName, suiteLevel);
    return this._runner.suite ? this._wrapSuiteContent(suiteName, content) : content;
  }

  _wrapSuiteContent(suiteName, content) {
    return this._runner.suite
      .replace('{name}', suiteName)
      .replace('{content}', content);
  }

  _getSuiteContent(suiteName, suiteLevel) {
    return ['']
      .concat(this._getHooks())
      .concat(this._getChildren(suiteName, suiteLevel))
      .concat([''])
      .join('\n')
  }

  _getHooks() {
    const hasHooks = [0, 1].indexOf(this._config.hooks) >= 0
      ? (this._config.hooks === 1)
      : randomizer.getValue() < this._config.hooks;

    return hasHooks
      ? this._runner.hooks.map(hook => `${hook}(${this._getFn()});`)
      : [];
  }

  _getChildren(suiteName, suiteLevel) {
    const isMaxSuiteLevel = suiteLevel === this._config.nestedSuites;
    const itemsCount = isMaxSuiteLevel ? this._config.testsInSuite : this._config.suitesInSuite;
    const items = [];
    for (let i = 0; i < itemsCount; i++) {
      let item;
      if (isMaxSuiteLevel) {
        const testName = `test ${suiteLevel} ${i}`;
        item = this._runner.test
          .replace('{name}', testName)
          .replace('{fn}', this._getFn());
      } else {
        const subSuiteName = `${suiteName} ${suiteLevel + 1} ${i}`;
        item = this._getSuite(subSuiteName, suiteLevel + 1);
      }
      items.push(item);
    }
    return items;
  }

  _getFn() {
    const fn = this._runner[this._config.fn];
    return fn.replace('{delay}', this._getDelay());
  }

  _getDelay() {
    if (typeof this._config.delay === 'string') {
      const parts = this._config.delay.split('-');
      const min = parseInt(parts[0], 10);
      const max = parseInt(parts[1], 10);
      const random = randomizer.getValue();
      return Math.round(min + random * (max - min));
    } else {
      return this._config.delay;
    }
  }

  _supportsSuites() {
    return Boolean(this._runner.suite);
  }

  _supportsHooks() {
    return Boolean(this._runner.hooks);
  }
};
