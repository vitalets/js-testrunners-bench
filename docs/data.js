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
        "time": "0.215"
      },
      {
        "runner": "qunit",
        "time": "0.301"
      },
      {
        "runner": "mocha",
        "time": "0.345"
      },
      {
        "runner": "lab",
        "time": "0.399"
      },
      {
        "runner": "mocha-parallel-tests",
        "time": "0.468"
      },
      {
        "runner": "tape",
        "time": "0.472"
      },
      {
        "runner": "mocha.parallel",
        "time": "0.485"
      },
      {
        "runner": "jest",
        "time": "3.33"
      },
      {
        "runner": "tap",
        "time": "6.39"
      },
      {
        "runner": "ava",
        "time": "10.1"
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
        "time": "0.485"
      },
      {
        "runner": "lab",
        "time": "0.813"
      },
      {
        "runner": "mocha.parallel",
        "time": "0.889"
      },
      {
        "runner": "jasmine",
        "time": "1.86"
      },
      {
        "runner": "tape",
        "time": "1.90"
      },
      {
        "runner": "mocha",
        "time": "1.96"
      },
      {
        "runner": "jest",
        "time": "3.71"
      },
      {
        "runner": "qunit",
        "time": "5.80"
      },
      {
        "runner": "tap",
        "time": "5.89"
      },
      {
        "runner": "ava",
        "time": "9.86"
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
        "time": "0.249"
      },
      {
        "runner": "qunit",
        "time": "0.412"
      },
      {
        "runner": "mocha",
        "time": "0.462"
      },
      {
        "runner": "mocha-parallel-tests",
        "time": "0.611"
      },
      {
        "runner": "jest",
        "time": "4.48"
      },
      {
        "runner": "tap",
        "time": "7.16"
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
        "time": "1.91"
      },
      {
        "runner": "mocha",
        "time": "2.06"
      },
      {
        "runner": "jest",
        "time": "3.58"
      },
      {
        "runner": "mocha-parallel-tests",
        "time": "4.71"
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
        "time": "0.931"
      },
      {
        "runner": "tap",
        "time": "9.91"
      },
      {
        "runner": "jest",
        "time": "10.4"
      },
      {
        "runner": "jasmine",
        "time": "18.3"
      },
      {
        "runner": "mocha",
        "time": "18.4"
      },
      {
        "runner": "qunit",
        "time": "61.0"
      }
    ]
  }
}