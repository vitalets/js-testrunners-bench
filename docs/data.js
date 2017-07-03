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
        "time": "0.228"
      },
      {
        "runner": "tape",
        "time": "0.299"
      },
      {
        "runner": "qunit",
        "time": "0.325"
      },
      {
        "runner": "lab",
        "time": "0.375"
      },
      {
        "runner": "mocha",
        "time": "0.415"
      },
      {
        "runner": "mocha.parallel",
        "time": "0.479"
      },
      {
        "runner": "mocha-parallel-tests",
        "time": "0.520"
      },
      {
        "runner": "jest (node)",
        "time": "2.13"
      },
      {
        "runner": "jest (jsdom)",
        "time": "3.42"
      },
      {
        "runner": "tap",
        "time": "6.30"
      },
      {
        "runner": "ava",
        "time": "10.0"
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
        "time": "1.17"
      },
      {
        "runner": "jasmine",
        "time": "1.34"
      },
      {
        "runner": "mocha",
        "time": "1.87"
      },
      {
        "runner": "jest",
        "time": "3.30"
      },
      {
        "runner": "mocha-parallel-tests",
        "time": "3.90"
      },
      {
        "runner": "ava",
        "time": "9.89"
      }
    ]
  },
  "sync_hooks=0_nestedSuites=0_AVA": {
    "filesCount": 50,
    "nestedSuites": 0,
    "suitesInSuite": 2,
    "testsInSuite": 5,
    "hooks": 0,
    "testFn": "syncFn",
    "name": "hooks=0_nestedSuites=0",
    "testsCount": 250,
    "benchName": "AVA",
    "result": [
      {
        "runner": "concurrency=100",
        "time": "9.31"
      },
      {
        "runner": "concurrency=50",
        "time": "9.34"
      },
      {
        "runner": "concurrency=4",
        "time": "9.35"
      },
      {
        "runner": "concurrency=2",
        "time": "10.8"
      },
      {
        "runner": "no-power-assert",
        "time": "16.3"
      },
      {
        "runner": "default",
        "time": "16.6"
      },
      {
        "runner": "serial",
        "time": "17.9"
      }
    ]
  },
  "async_delay=0-10_hooks=0_nestedSuites=0_no Babel": {
    "filesCount": 50,
    "nestedSuites": 0,
    "suitesInSuite": 2,
    "testsInSuite": 5,
    "hooks": 0,
    "delay": "0-10",
    "testFn": "asyncFn",
    "name": "delay=0-10_hooks=0_nestedSuites=0",
    "testsCount": 250,
    "benchName": "no Babel",
    "result": [
      {
        "runner": "mocha-parallel-tests",
        "time": "0.495"
      },
      {
        "runner": "lab",
        "time": "0.810"
      },
      {
        "runner": "mocha.parallel",
        "time": "0.920"
      },
      {
        "runner": "jasmine",
        "time": "1.83"
      },
      {
        "runner": "tape",
        "time": "1.89"
      },
      {
        "runner": "mocha",
        "time": "2.01"
      },
      {
        "runner": "jest (node)",
        "time": "2.36"
      },
      {
        "runner": "jest (jsdom)",
        "time": "4.13"
      },
      {
        "runner": "qunit",
        "time": "5.81"
      },
      {
        "runner": "tap",
        "time": "5.83"
      },
      {
        "runner": "ava",
        "time": "9.69"
      }
    ]
  },
  "sync_hooks=1_nestedSuites=1_no Babel": {
    "filesCount": 50,
    "nestedSuites": 1,
    "suitesInSuite": 2,
    "testsInSuite": 5,
    "hooks": 1,
    "testFn": "syncFn",
    "name": "hooks=1_nestedSuites=1",
    "testsCount": 500,
    "benchName": "no Babel",
    "result": [
      {
        "runner": "jasmine",
        "time": "0.248"
      },
      {
        "runner": "qunit",
        "time": "0.400"
      },
      {
        "runner": "mocha",
        "time": "0.416"
      },
      {
        "runner": "mocha-parallel-tests",
        "time": "0.542"
      },
      {
        "runner": "jest (node)",
        "time": "1.99"
      },
      {
        "runner": "jest (jsdom)",
        "time": "3.35"
      },
      {
        "runner": "tap",
        "time": "7.32"
      }
    ]
  },
  "sync_hooks=1_nestedSuites=1_with Babel": {
    "filesCount": 50,
    "nestedSuites": 1,
    "suitesInSuite": 2,
    "testsInSuite": 5,
    "hooks": 1,
    "testFn": "syncFn",
    "name": "hooks=1_nestedSuites=1",
    "testsCount": 500,
    "benchName": "with Babel",
    "result": [
      {
        "runner": "jasmine",
        "time": "1.57"
      },
      {
        "runner": "mocha",
        "time": "1.76"
      },
      {
        "runner": "jest (node)",
        "time": "2.01"
      },
      {
        "runner": "jest (jsdom)",
        "time": "3.68"
      },
      {
        "runner": "mocha-parallel-tests",
        "time": "4.58"
      }
    ]
  },
  "async_delay=0_hooks=0_nestedSuites=0_no Babel": {
    "filesCount": 50,
    "nestedSuites": 0,
    "suitesInSuite": 2,
    "testsInSuite": 5,
    "hooks": 0,
    "delay": 0,
    "testFn": "asyncFn",
    "name": "delay=0_hooks=0_nestedSuites=0",
    "testsCount": 250,
    "benchName": "no Babel",
    "result": [
      {
        "runner": "lab",
        "time": "0.456"
      },
      {
        "runner": "mocha.parallel",
        "time": "0.531"
      },
      {
        "runner": "mocha-parallel-tests",
        "time": "0.541"
      },
      {
        "runner": "jasmine",
        "time": "0.607"
      },
      {
        "runner": "tape",
        "time": "0.657"
      },
      {
        "runner": "mocha",
        "time": "0.752"
      },
      {
        "runner": "jest",
        "time": "4.36"
      },
      {
        "runner": "qunit",
        "time": "4.50"
      },
      {
        "runner": "tap",
        "time": "5.93"
      },
      {
        "runner": "ava",
        "time": "10.9"
      }
    ]
  },
  "async_delay=0-10_hooks=1_nestedSuites=1_no Babel": {
    "filesCount": 50,
    "nestedSuites": 1,
    "suitesInSuite": 2,
    "testsInSuite": 5,
    "hooks": 1,
    "delay": "0-10",
    "testFn": "asyncFn",
    "name": "delay=0-10_hooks=1_nestedSuites=1",
    "testsCount": 500,
    "benchName": "no Babel",
    "result": [
      {
        "runner": "mocha-parallel-tests",
        "time": "1.03"
      },
      {
        "runner": "jest (node)",
        "time": "7.80"
      },
      {
        "runner": "jest (jsdom)",
        "time": "9.39"
      },
      {
        "runner": "tap",
        "time": "10.1"
      },
      {
        "runner": "jasmine",
        "time": "18.0"
      },
      {
        "runner": "mocha",
        "time": "18.3"
      },
      {
        "runner": "qunit",
        "time": "61.7"
      }
    ]
  }
}