/**
 * Generates tests for particular config and runner
 */
const fs = require('fs-extra');
const path = require('path');
const randomizer = require('../randomizer');

module.exports = class Generator {
  constructor(config, runner) {
    this._config = config;
    this._runner = runner;
    this._outPath = path.join(config.path, config.name, runner.name);
  }

  generate() {
    if (this._isConfigSupportedByRunner()) {
      randomizer.reset();
      this._createFiles();
    }
  }

  _createFiles() {
    for (let i = 0; i < this._config.files; i++) {
      this._createFile(i);
    }
    console.log(`Generated ${this._config.files} files in ${this._outPath}`);
  }

  _createFile(index) {
    const fileName = `test-${index}.js`;
    const suiteName = `suite ${index}`;
    const suiteContent = this._createSuite(suiteName, 0);
    const tpl = this._runner.file || '{content}';
    const fileContent = tpl
      .replace('{name}', fileName)
      .replace('{content}', suiteContent);

    const filePath = path.join(this._outPath, fileName);
    if (!fileContent) {
      throw new Error(`Empty file: ${filePath}`);
    }

    fs.outputFileSync(filePath, fileContent);
  }

  _createSuite(suiteName, suiteLevel) {
    const hooks = this._createHooks();
    const isNestedSuites = this._config.nestedSuites && suiteLevel === 0;
    const children = isNestedSuites ? this._createSubSuites(suiteName, suiteLevel) : this._createTests(suiteLevel);
    const content = [hooks, children].join('\n');
    const tpl = this._runner.suite || '{content}';
    return tpl
      .replace('{name}', suiteName)
      .replace('{content}', content);
  }

  _createHooks() {
    if (this._config.hooks) {
      const hooks = this._runner.hooks.map(hook => this._createHook(hook));
      return hooks.join('\n');
    } else {
      return '';
    }
  }

  _createHook(hookName) {
    const tpl = '{name}({fn});';
    return tpl
      .replace('{name}', hookName)
      .replace('{fn}', this._createTestFn());
  }

  _createSubSuites(suiteName, suiteLevel) {
    const subSuites = [];
    for (let i = 0; i < this._config.suitesInSuite; i++) {
      const name = `${suiteName} ${suiteLevel + 1} ${i}`;
      const subSuite = this._createSuite(name, suiteLevel + 1);
      subSuites.push(subSuite);
    }
    return subSuites.join('\n');
  }

  _createTests(suiteLevel) {
    const tests = [];
    for (let i = 0; i < this._config.testsInSuite; i++) {
      const testName = `test ${suiteLevel} ${i}`;
      const test = this._createTest(testName);
      tests.push(test);
    }
    return tests.join('\n');
  }

  _createTest(testName) {
    return this._runner.test
      .replace('{name}', testName)
      .replace('{fn}', this._createTestFn());
  }

  _createTestFn() {
    const content = this._config.test;
    const isAsync = content.indexOf('done') >= 0;
    const tpl = isAsync ? this._runner.asyncFn : this._runner.syncFn;
    return tpl
      .replace('{content}', content)
      .replace('{random}', randomizer.getValue().toFixed(2));
  }

  /**
   * Some configs are not supported by runners. For example, config with nested suites is not supported by AVA.
   * @returns {boolean}
   * @private
   */
  _isConfigSupportedByRunner() {
    // nested suites are required but not supported by runner
    if (this._config.nestedSuites > 0 && !this._runner.suite) {
      return false;
    }
    // hooks are required but not supported by runner
    if (this._config.hooks > 0 && !this._runner.hooks) {
      return false;
    }
    // ?
    // if (!this._getFn()) {
    //   return false;
    // }
    return true;
  }
};
