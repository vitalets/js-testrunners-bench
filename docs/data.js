const data = {
  "test=syncEmptyFn_nestedSuites=false_babel=false": {
    "name": "test=syncEmptyFn_nestedSuites=false_babel=false",
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
        "nestedSuites=false"
      ],
      "name": "test=syncEmptyFn_nestedSuites=false",
      "outPath": "tests/unit/test=syncEmptyFn/nestedSuites=false",
      "tests": 250
    },
    "runConfig": {
      "name": "babel=false",
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
        "time": "0.177"
      },
      {
        "label": "tape",
        "time": "0.213"
      },
      {
        "label": "qunit",
        "time": "0.266"
      },
      {
        "label": "mocha",
        "time": "0.269"
      },
      {
        "label": "lab",
        "time": "0.277"
      },
      {
        "label": "mocha.parallel",
        "time": "0.393"
      },
      {
        "label": "mocha-parallel-tests",
        "time": "0.411"
      },
      {
        "label": "jest (node)",
        "time": "1.86"
      },
      {
        "label": "jest (jsdom)",
        "time": "3.01"
      },
      {
        "label": "tap",
        "time": "5.55"
      },
      {
        "label": "ava",
        "time": "7.97"
      }
    ]
  },
  "test=asyncEmptyFnZeroDelay_nestedSuites=false_babel=false": {
    "name": "test=asyncEmptyFnZeroDelay_nestedSuites=false_babel=false",
    "genConfig": {
      "basePath": "tests/unit",
      "files": 50,
      "nestedSuites": false,
      "hooks": false,
      "suitesInSuite": 2,
      "testsInSuite": 5,
      "test": "setTimeout(done, 0)",
      "_path": [
        "test=asyncEmptyFnZeroDelay",
        "nestedSuites=false"
      ],
      "name": "test=asyncEmptyFnZeroDelay_nestedSuites=false",
      "outPath": "tests/unit/test=asyncEmptyFnZeroDelay/nestedSuites=false",
      "tests": 250
    },
    "runConfig": {
      "name": "babel=false",
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
        "label": "lab",
        "time": "0.365"
      },
      {
        "label": "mocha-parallel-tests",
        "time": "0.431"
      },
      {
        "label": "mocha.parallel",
        "time": "0.500"
      },
      {
        "label": "jasmine",
        "time": "0.564"
      },
      {
        "label": "tape",
        "time": "0.600"
      },
      {
        "label": "mocha",
        "time": "0.665"
      },
      {
        "label": "jest (node)",
        "time": "1.90"
      },
      {
        "label": "jest (jsdom)",
        "time": "3.06"
      },
      {
        "label": "qunit",
        "time": "4.47"
      },
      {
        "label": "tap",
        "time": "5.81"
      },
      {
        "label": "ava",
        "time": "7.86"
      }
    ]
  },
  "test=syncEmptyFn_nestedSuites=false_babel=true": {
    "name": "test=syncEmptyFn_nestedSuites=false_babel=true",
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
        "nestedSuites=false"
      ],
      "name": "test=syncEmptyFn_nestedSuites=false",
      "outPath": "tests/unit/test=syncEmptyFn/nestedSuites=false",
      "tests": 250
    },
    "runConfig": {
      "name": "babel=true",
      "runs": [
        {
          "runner": "mocha",
          "cmd": "mocha {path} --compilers js:babel-register"
        },
        {
          "runner": "mocha-parallel-tests",
          "cmd": "mocha-parallel-tests {path} --compilers js:babel-register"
        },
        {
          "runner": "jasmine",
          "cmd": "jasmine JASMINE_CONFIG_PATH=temp/jasmine.json",
          "babel": true
        },
        {
          "runner": "lab",
          "cmd": "lab {path} -T node_modules/lab-babel"
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
        "label": "lab",
        "time": "0.972"
      },
      {
        "label": "jasmine",
        "time": "1.72"
      },
      {
        "label": "mocha",
        "time": "1.83"
      },
      {
        "label": "jest (node)",
        "time": "1.84"
      },
      {
        "label": "jest (jsdom)",
        "time": "2.89"
      },
      {
        "label": "mocha-parallel-tests",
        "time": "4.19"
      },
      {
        "label": "ava",
        "time": "8.07"
      }
    ]
  },
  "test=syncHeavyFn_nestedSuites=false_babel=false": {
    "name": "test=syncHeavyFn_nestedSuites=false_babel=false",
    "genConfig": {
      "basePath": "tests/unit",
      "files": 50,
      "nestedSuites": false,
      "hooks": false,
      "suitesInSuite": 2,
      "testsInSuite": 5,
      "test": "\n      eval(''); // disable V8 optimizations\n      for (let i = 0; i < 10000; i++) {\n        new Date();\n      }\n    ",
      "_path": [
        "test=syncHeavyFn",
        "nestedSuites=false"
      ],
      "name": "test=syncHeavyFn_nestedSuites=false",
      "outPath": "tests/unit/test=syncHeavyFn/nestedSuites=false",
      "tests": 250
    },
    "runConfig": {
      "name": "babel=false",
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
        "time": "0.621"
      },
      {
        "label": "tape",
        "time": "0.657"
      },
      {
        "label": "qunit",
        "time": "0.695"
      },
      {
        "label": "mocha",
        "time": "0.707"
      },
      {
        "label": "lab",
        "time": "0.728"
      },
      {
        "label": "mocha-parallel-tests",
        "time": "0.836"
      },
      {
        "label": "mocha.parallel",
        "time": "0.855"
      },
      {
        "label": "jest (node)",
        "time": "2.56"
      },
      {
        "label": "jest (jsdom)",
        "time": "3.69"
      },
      {
        "label": "tap",
        "time": "5.87"
      },
      {
        "label": "ava",
        "time": "8.32"
      }
    ]
  },
  "test=syncHeavyFn_nestedSuites=false_babel=true": {
    "name": "test=syncHeavyFn_nestedSuites=false_babel=true",
    "genConfig": {
      "basePath": "tests/unit",
      "files": 50,
      "nestedSuites": false,
      "hooks": false,
      "suitesInSuite": 2,
      "testsInSuite": 5,
      "test": "\n      eval(''); // disable V8 optimizations\n      for (let i = 0; i < 10000; i++) {\n        new Date();\n      }\n    ",
      "_path": [
        "test=syncHeavyFn",
        "nestedSuites=false"
      ],
      "name": "test=syncHeavyFn_nestedSuites=false",
      "outPath": "tests/unit/test=syncHeavyFn/nestedSuites=false",
      "tests": 250
    },
    "runConfig": {
      "name": "babel=true",
      "runs": [
        {
          "runner": "mocha",
          "cmd": "mocha {path} --compilers js:babel-register"
        },
        {
          "runner": "mocha-parallel-tests",
          "cmd": "mocha-parallel-tests {path} --compilers js:babel-register"
        },
        {
          "runner": "jasmine",
          "cmd": "jasmine JASMINE_CONFIG_PATH=temp/jasmine.json",
          "babel": true
        },
        {
          "runner": "lab",
          "cmd": "lab {path} -T node_modules/lab-babel"
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
        "label": "lab",
        "time": "1.63"
      },
      {
        "label": "jest (node)",
        "time": "2.49"
      },
      {
        "label": "jasmine",
        "time": "2.53"
      },
      {
        "label": "mocha",
        "time": "2.64"
      },
      {
        "label": "jest (jsdom)",
        "time": "3.72"
      },
      {
        "label": "mocha-parallel-tests",
        "time": "5.05"
      },
      {
        "label": "ava",
        "time": "8.58"
      }
    ]
  },
  "test=asyncEmptyFnZeroDelay_nestedSuites=false_babel=true": {
    "name": "test=asyncEmptyFnZeroDelay_nestedSuites=false_babel=true",
    "genConfig": {
      "basePath": "tests/unit",
      "files": 50,
      "nestedSuites": false,
      "hooks": false,
      "suitesInSuite": 2,
      "testsInSuite": 5,
      "test": "setTimeout(done, 0)",
      "_path": [
        "test=asyncEmptyFnZeroDelay",
        "nestedSuites=false"
      ],
      "name": "test=asyncEmptyFnZeroDelay_nestedSuites=false",
      "outPath": "tests/unit/test=asyncEmptyFnZeroDelay/nestedSuites=false",
      "tests": 250
    },
    "runConfig": {
      "name": "babel=true",
      "runs": [
        {
          "runner": "mocha",
          "cmd": "mocha {path} --compilers js:babel-register"
        },
        {
          "runner": "mocha-parallel-tests",
          "cmd": "mocha-parallel-tests {path} --compilers js:babel-register"
        },
        {
          "runner": "jasmine",
          "cmd": "jasmine JASMINE_CONFIG_PATH=temp/jasmine.json",
          "babel": true
        },
        {
          "runner": "lab",
          "cmd": "lab {path} -T node_modules/lab-babel"
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
        "label": "lab",
        "time": "1.54"
      },
      {
        "label": "jest (node)",
        "time": "2.31"
      },
      {
        "label": "jasmine",
        "time": "2.46"
      },
      {
        "label": "mocha",
        "time": "2.51"
      },
      {
        "label": "jest (jsdom)",
        "time": "3.10"
      },
      {
        "label": "mocha-parallel-tests",
        "time": "4.91"
      },
      {
        "label": "ava",
        "time": "8.13"
      }
    ]
  },
  "test=asyncEmptyFnRandomDelay_nestedSuites=false_babel=false": {
    "name": "test=asyncEmptyFnRandomDelay_nestedSuites=false_babel=false",
    "genConfig": {
      "basePath": "tests/unit",
      "files": 50,
      "nestedSuites": false,
      "hooks": false,
      "suitesInSuite": 2,
      "testsInSuite": 5,
      "test": "setTimeout(done, Math.round({random} * 10))",
      "_path": [
        "test=asyncEmptyFnRandomDelay",
        "nestedSuites=false"
      ],
      "name": "test=asyncEmptyFnRandomDelay_nestedSuites=false",
      "outPath": "tests/unit/test=asyncEmptyFnRandomDelay/nestedSuites=false",
      "tests": 250
    },
    "runConfig": {
      "name": "babel=false",
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
        "label": "mocha-parallel-tests",
        "time": "0.435"
      },
      {
        "label": "lab",
        "time": "0.746"
      },
      {
        "label": "mocha.parallel",
        "time": "0.866"
      },
      {
        "label": "jasmine",
        "time": "1.86"
      },
      {
        "label": "tape",
        "time": "1.87"
      },
      {
        "label": "mocha",
        "time": "1.93"
      },
      {
        "label": "jest (node)",
        "time": "2.29"
      },
      {
        "label": "jest (jsdom)",
        "time": "3.46"
      },
      {
        "label": "qunit",
        "time": "5.71"
      },
      {
        "label": "tap",
        "time": "5.73"
      },
      {
        "label": "ava",
        "time": "7.90"
      }
    ]
  },
  "test=asyncEmptyFnRandomDelay_nestedSuites=false_babel=true": {
    "name": "test=asyncEmptyFnRandomDelay_nestedSuites=false_babel=true",
    "genConfig": {
      "basePath": "tests/unit",
      "files": 50,
      "nestedSuites": false,
      "hooks": false,
      "suitesInSuite": 2,
      "testsInSuite": 5,
      "test": "setTimeout(done, Math.round({random} * 10))",
      "_path": [
        "test=asyncEmptyFnRandomDelay",
        "nestedSuites=false"
      ],
      "name": "test=asyncEmptyFnRandomDelay_nestedSuites=false",
      "outPath": "tests/unit/test=asyncEmptyFnRandomDelay/nestedSuites=false",
      "tests": 250
    },
    "runConfig": {
      "name": "babel=true",
      "runs": [
        {
          "runner": "mocha",
          "cmd": "mocha {path} --compilers js:babel-register"
        },
        {
          "runner": "mocha-parallel-tests",
          "cmd": "mocha-parallel-tests {path} --compilers js:babel-register"
        },
        {
          "runner": "jasmine",
          "cmd": "jasmine JASMINE_CONFIG_PATH=temp/jasmine.json",
          "babel": true
        },
        {
          "runner": "lab",
          "cmd": "lab {path} -T node_modules/lab-babel"
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
        "label": "jest (node)",
        "time": "2.33"
      },
      {
        "label": "lab",
        "time": "3.01"
      },
      {
        "label": "jest (jsdom)",
        "time": "3.41"
      },
      {
        "label": "mocha",
        "time": "3.90"
      },
      {
        "label": "jasmine",
        "time": "4.08"
      },
      {
        "label": "mocha-parallel-tests",
        "time": "5.35"
      },
      {
        "label": "ava",
        "time": "8.61"
      }
    ]
  },
  "test=syncEmptyFn_nestedSuites=true_babel=false": {
    "name": "test=syncEmptyFn_nestedSuites=true_babel=false",
    "genConfig": {
      "basePath": "tests/unit",
      "files": 50,
      "nestedSuites": true,
      "hooks": false,
      "suitesInSuite": 2,
      "testsInSuite": 5,
      "test": "",
      "_path": [
        "test=syncEmptyFn",
        "nestedSuites=true"
      ],
      "name": "test=syncEmptyFn_nestedSuites=true",
      "outPath": "tests/unit/test=syncEmptyFn/nestedSuites=true",
      "tests": 500
    },
    "runConfig": {
      "name": "babel=false",
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
        "time": "0.202"
      },
      {
        "label": "mocha",
        "time": "0.326"
      },
      {
        "label": "qunit",
        "time": "0.342"
      },
      {
        "label": "mocha-parallel-tests",
        "time": "0.481"
      },
      {
        "label": "jest (node)",
        "time": "1.93"
      },
      {
        "label": "jest (jsdom)",
        "time": "2.94"
      },
      {
        "label": "tap",
        "time": "6.44"
      }
    ]
  },
  "test=syncEmptyFn_nestedSuites=true_babel=true": {
    "name": "test=syncEmptyFn_nestedSuites=true_babel=true",
    "genConfig": {
      "basePath": "tests/unit",
      "files": 50,
      "nestedSuites": true,
      "hooks": false,
      "suitesInSuite": 2,
      "testsInSuite": 5,
      "test": "",
      "_path": [
        "test=syncEmptyFn",
        "nestedSuites=true"
      ],
      "name": "test=syncEmptyFn_nestedSuites=true",
      "outPath": "tests/unit/test=syncEmptyFn/nestedSuites=true",
      "tests": 500
    },
    "runConfig": {
      "name": "babel=true",
      "runs": [
        {
          "runner": "mocha",
          "cmd": "mocha {path} --compilers js:babel-register"
        },
        {
          "runner": "mocha-parallel-tests",
          "cmd": "mocha-parallel-tests {path} --compilers js:babel-register"
        },
        {
          "runner": "jasmine",
          "cmd": "jasmine JASMINE_CONFIG_PATH=temp/jasmine.json",
          "babel": true
        },
        {
          "runner": "lab",
          "cmd": "lab {path} -T node_modules/lab-babel"
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
        "label": "jest (node)",
        "time": "1.99"
      },
      {
        "label": "mocha",
        "time": "2.23"
      },
      {
        "label": "jasmine",
        "time": "2.76"
      },
      {
        "label": "jest (jsdom)",
        "time": "4.63"
      },
      {
        "label": "mocha-parallel-tests",
        "time": "6.81"
      }
    ]
  }
}