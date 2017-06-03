/**
 * Load-page config
 */

module.exports = {
  name: 'load-page',

  generate: {
    filesCount: 5,
    nestedSuites: 0,
    delay: [0, '0-500'],
    hooks: 0,
    testsInSuite: 3,
    suitesInSuite: 1,
    fn: 'loadPageFn',
  },

  run: [
    {
      runner: 'sheeva',
      cmd: 'sheeva --config=temp/sheeva.config.js {path}',
      config: {
        concurrency: 3
      }
    },
    {
      runner: 'sheeva',
      label: 'sheeva (newSessionPerFile)',
      cmd: 'sheeva --config=temp/sheeva.config.js {path}',
      config: {
        concurrency: 3,
        newSessionPerFile: true
      }
    },
    {
      runner: 'webdriverio',
      cmd: 'wdio temp/wdio.conf.js',
      config: {
        maxInstances: 3
      }
    },
  ]
};
