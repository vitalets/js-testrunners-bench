const data = {
  "test=syncEmptyFn_nestedSuites=false_hooks=false (noBabel)": {
    "name": "test=syncEmptyFn_nestedSuites=false_hooks=false (noBabel)",
    "genConfig": {
      "basePath": "tests/unit",
      "files": 50,
      "nestedSuites": false,
      "hooks": false,
      "suitesInSuite": 2,
      "testsInSuite": 5,
      "test": "",
      "_path": [
        "test=syncEmptyFn",
        "nestedSuites=false",
        "hooks=false"
      ],
      "name": "test=syncEmptyFn_nestedSuites=false_hooks=false",
      "outPath": "tests/unit/test=syncEmptyFn/nestedSuites=false/hooks=false",
      "tests": 250
    },
    "runConfig": {
      "name": "noBabel",
      "runs": [
        {
          "runner": "mocha",
          "cmd": "mocha {path}"
        },
        {
          "runner": "jasmine",
          "cmd": "jasmine JASMINE_CONFIG_PATH=temp/jasmine.json"
        },
        {
          "runner": "mocha.parallel",
          "cmd": "mocha {path}"
        },
        {
          "runner": "mocha-parallel-tests",
          "cmd": "mocha-parallel-tests {path}"
        }
      ]
    },
    "runs": [
      {
        "label": "jasmine",
        "time": "0.208"
      },
      {
        "label": "mocha",
        "time": "0.333"
      },
      {
        "label": "mocha.parallel",
        "time": "0.427"
      },
      {
        "label": "mocha-parallel-tests",
        "time": "0.469"
      }
    ]
  },
  "test=syncHeavyFn_nestedSuites=false_hooks=false (noBabel)": {
    "name": "test=syncHeavyFn_nestedSuites=false_hooks=false (noBabel)",
    "genConfig": {
      "basePath": "tests/unit",
      "files": 50,
      "nestedSuites": false,
      "hooks": false,
      "suitesInSuite": 2,
      "testsInSuite": 5,
      "test": "\n      eval(''); // disable V8 optimizations\n      for (let i = 0; i < 20000; i++) {\n        new Date();\n      }\n    ",
      "_path": [
        "test=syncHeavyFn",
        "nestedSuites=false",
        "hooks=false"
      ],
      "name": "test=syncHeavyFn_nestedSuites=false_hooks=false",
      "outPath": "tests/unit/test=syncHeavyFn/nestedSuites=false/hooks=false",
      "tests": 250
    },
    "runConfig": {
      "name": "noBabel",
      "runs": [
        {
          "runner": "mocha",
          "cmd": "mocha {path}"
        },
        {
          "runner": "jasmine",
          "cmd": "jasmine JASMINE_CONFIG_PATH=temp/jasmine.json"
        },
        {
          "runner": "mocha.parallel",
          "cmd": "mocha {path}"
        },
        {
          "runner": "mocha-parallel-tests",
          "cmd": "mocha-parallel-tests {path}"
        },
        {
          "runner": "qunit",
          "cmd": "qunit {path}"
        },
        {
          "runner": "tape",
          "cmd": "tape {path}/*.js"
        },
        {
          "runner": "tap",
          "cmd": "tap {path} --jobs-auto"
        },
        {
          "runner": "lab",
          "cmd": "lab --parallel {path}"
        },
        {
          "runner": "ava",
          "cmd": "ava {path} --concurrency=4"
        },
        {
          "label": "jest (jsdom)",
          "runner": "jest",
          "cmd": "jest --env=jsdom {path}"
        },
        {
          "label": "jest (node)",
          "runner": "jest",
          "cmd": "jest --env=node {path}"
        }
      ]
    },
    "runs": [
      {
        "label": "jasmine",
        "time": "1.04"
      },
      {
        "label": "mocha",
        "time": "1.13"
      },
      {
        "label": "mocha.parallel",
        "time": "1.26"
      },
      {
        "label": "lab",
        "time": "1.33"
      },
      {
        "label": "tape",
        "time": "1.85"
      },
      {
        "label": "qunit",
        "time": "1.91"
      },
      {
        "label": "mocha-parallel-tests",
        "time": "2.16"
      },
      {
        "label": "jest (node)",
        "time": "4.34"
      },
      {
        "label": "jest (jsdom)",
        "time": "6.79"
      },
      {
        "label": "tap",
        "time": "7.03"
      },
      {
        "label": "ava",
        "time": "11.2"
      }
    ]
  }
}