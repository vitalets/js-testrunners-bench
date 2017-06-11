/**
 * Load-page config
 */

module.exports = {
  baseName: 'load-page',

  generate: {
    filesCount: 5,
    nestedSuites: 0,
    hooks: 0,
    testsInSuite: 3,
    suitesInSuite: 1,
    url: 'http://localhost:8080',
    delay: [0, '0-200'],
    testFn: 'loadPageFn',
  },

  run: [
    {
      runner: 'webdriverio',
      label: 'webdriverio (concurrency=3)',
      cmd: 'wdio temp/wdio.conf.js',
      config: {
        maxInstances: 3
      }
    },
    {
      runner: 'webdriverio',
      label: 'webdriverio (concurrency=5)',
      cmd: 'wdio temp/wdio.conf.js',
      config: {
        maxInstances: 5
      }
    },
  ]
};
