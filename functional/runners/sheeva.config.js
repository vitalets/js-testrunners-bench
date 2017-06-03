
const webdriver = require('selenium-webdriver');

// disable webdriver controlFlow in favor of async/await
// see: https://github.com/SeleniumHQ/selenium/issues/2969#issue-184022168
process.env.SELENIUM_PROMISE_MANAGER = 0;

module.exports = Object.assign({
  files: [],
  reporters: [],
  createTargets: function () {
    return [
      {
        id: 'chrome',
        caps: {
          browserName : 'chrome',
        }
      },
    ];
  },
  startSession: function (session) {
    session.driver = new webdriver.Builder()
      .withCapabilities(session.target.caps)
      .usingServer('http://localhost:4444/wd/hub')
      .build();

    return session.driver;
  },
  endSession: function (session) {
    return session.driver.quit();
  },
  callTestHookFn: function ({fn, session}) {
    return fn(session.driver);
  },
}, extraConfig);
