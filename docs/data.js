const data = {
  "sync_hooks=0_nestedSuites=0_no Babel": {
    "filesCount": 50,
    "nestedSuites": 0,
    "suitesInSuite": 2,
    "testsInSuite": 5,
    "hooks": 0,
    "testFn": "syncFn",
    "name": "hooks=0_nestedSuites=0",
    "testsCount": 250,
    "benchName": "no Babel",
    "result": [
      {
        "runner": "jasmine",
        "time": "0.206"
      },
      {
        "runner": "tape",
        "time": "0.252"
      },
      {
        "runner": "qunit",
        "time": "0.294"
      },
      {
        "runner": "mocha",
        "time": "0.314"
      },
      {
        "runner": "lab",
        "time": "0.358"
      },
      {
        "runner": "mocha.parallel",
        "time": "0.427"
      },
      {
        "runner": "mocha-parallel-tests",
        "time": "0.436"
      },
      {
        "runner": "jest",
        "time": "5.33"
      },
      {
        "runner": "tap",
        "time": "5.72"
      },
      {
        "runner": "ava",
        "time": "21.2"
      }
    ]
  },
  "sync_hooks=0_nestedSuites=0_with Babel": {
    "filesCount": 50,
    "nestedSuites": 0,
    "suitesInSuite": 2,
    "testsInSuite": 5,
    "hooks": 0,
    "testFn": "syncFn",
    "name": "hooks=0_nestedSuites=0",
    "testsCount": 250,
    "benchName": "with Babel",
    "result": [
      {
        "runner": "lab",
        "time": "1.13"
      },
      {
        "runner": "jasmine",
        "time": "1.27"
      },
      {
        "runner": "mocha",
        "time": "1.81"
      },
      {
        "runner": "jest",
        "time": "3.70"
      },
      {
        "runner": "mocha-parallel-tests",
        "time": "3.88"
      },
      {
        "runner": "ava",
        "time": "20.0"
      }
    ]
  }
}