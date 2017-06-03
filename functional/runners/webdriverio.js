const fs = require('fs-extra');
const path = require('path');

module.exports = {
  name: 'webdriverio',
  hooks: [
    'before',
    'beforeEach',
    'after',
    'afterEach',
  ],
  suite: `describe('{name}', function () { {content} });`,
  test: `it('{name}', {fn});`,
  loadPageFn: function () {
    browser.url('{baseUrl}?delay={delay}');
    browser.waitUntil(function () {
      return browser.getTitle() === 'Loaded.';
    }, 10000);
  },
  writeConfigFile
};

function writeConfigFile(testsPath, runInfo) {
  const config = Object.assign({
    specs: [
      `${testsPath}/*.js`
    ],
    maxInstances: 1,
    capabilities: [
      {browserName: 'chrome'}
    ],
    sync: true,
    logLevel: 'silent',
    coloredLogs: true,
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd'
    }
  }, runInfo.config);
  const filename = './temp/wdio.conf.js';
  const content = `exports.config = ${JSON.stringify(config, false, 2)};`;
  fs.outputFileSync(filename, content);
}
