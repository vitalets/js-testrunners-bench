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
        "runner": "concurrency=4",
        "time": "9.84"
      },
      {
        "runner": "concurrency=50",
        "time": "10.4"
      },
      {
        "runner": "concurrency=2",
        "time": "11.0"
      },
      {
        "runner": "concurrency=100",
        "time": "12.9"
      },
      {
        "runner": "no-power-assert",
        "time": "16.1"
      },
      {
        "runner": "serial",
        "time": "19.3"
      },
      {
        "runner": "default",
        "time": "20.3"
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
        "time": "0.506"
      },
      {
        "runner": "lab",
        "time": "0.797"
      },
      {
        "runner": "mocha.parallel",
        "time": "0.909"
      },
      {
        "runner": "tape",
        "time": "1.86"
      },
      {
        "runner": "jasmine",
        "time": "1.89"
      },
      {
        "runner": "mocha",
        "time": "1.97"
      },
      {
        "runner": "jest",
        "time": "4.59"
      },
      {
        "runner": "qunit",
        "time": "5.86"
      },
      {
        "runner": "tap",
        "time": "6.22"
      },
      {
        "runner": "ava (concurrency=4)",
        "time": "9.61"
      },
      {
        "runner": "ava (default)",
        "time": "18.2"
      }
    ]
  }
}