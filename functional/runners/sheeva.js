/**
 * Sheeva
 */

const fs = require('fs-extra');
const path = require('path');

module.exports = {
  name: 'sheeva',
  hooks: [
    'before',
    'beforeEach',
    'after',
    'afterEach',
  ],
  file: `const {until} = require('selenium-webdriver');\n{content}`,
  suite: `describe('{name}', () => { {content} });`,
  test: `it('{name}', {fn});`,
  loadPageFn: driver => {
    return driver.get('{baseUrl}?delay={delay}')
      .then(() => driver.wait(until.titleIs('Loaded.'), 10000));
  },
  writeConfigFile
};

function writeConfigFile(testsPath, runInfo) {
  const extraConfig = Object.assign({}, runInfo.config);
  const extraConfigStr = JSON.stringify(extraConfig, false, 2);
  const filename = './temp/sheeva.config.js';
  const templatePath = path.resolve('./src/runners/sheeva.config.js');
  const template = fs.readFileSync(templatePath, 'utf-8');
  const content = template.replace('extraConfig', extraConfigStr);
  fs.outputFileSync(filename, content);
}
