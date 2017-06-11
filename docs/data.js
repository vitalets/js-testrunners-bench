const data = {
  "sync_hooks=0_nestedSuites=0": {
    "generate": {
      "filesCount": 50,
      "nestedSuites": 0,
      "suitesInSuite": 2,
      "testsInSuite": 5,
      "hooks": 0,
      "testFn": "syncFn",
      "name": "hooks=0_nestedSuites=0",
      "testsCount": 250
    },
    "bench": {
      "no Babel": [
        {
          "runner": "jasmine",
          "time": "0.225"
        },
        {
          "runner": "tape",
          "time": "0.264"
        },
        {
          "runner": "qunit",
          "time": "0.317"
        },
        {
          "runner": "mocha",
          "time": "0.341"
        },
        {
          "runner": "lab",
          "time": "0.374"
        },
        {
          "runner": "jest",
          "time": "3.40"
        },
        {
          "runner": "tap",
          "time": "5.89"
        }
      ],
      "with Babel": [
        {
          "runner": "lab",
          "time": "1.13"
        },
        {
          "runner": "jasmine",
          "time": "1.24"
        },
        {
          "runner": "mocha",
          "time": "1.74"
        },
        {
          "runner": "jest",
          "time": "3.09"
        }
      ]
    }
  }
}
