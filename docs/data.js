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
        "time": "0.204"
      },
      {
        "label": "tape",
        "time": "0.266"
      },
      {
        "label": "mocha",
        "time": "0.336"
      },
      {
        "label": "qunit",
        "time": "0.339"
      },
      {
        "label": "lab",
        "time": "0.370"
      },
      {
        "label": "mocha.parallel",
        "time": "0.419"
      },
      {
        "label": "mocha-parallel-tests",
        "time": "0.467"
      },
      {
        "label": "jest (node)",
        "time": "1.84"
      },
      {
        "label": "jest (jsdom)",
        "time": "3.46"
      },
      {
        "label": "tap",
        "time": "5.64"
      },
      {
        "label": "ava",
        "time": "8.26"
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
        "time": "0.386"
      },
      {
        "label": "mocha-parallel-tests",
        "time": "0.433"
      },
      {
        "label": "mocha.parallel",
        "time": "0.504"
      },
      {
        "label": "jasmine",
        "time": "0.594"
      },
      {
        "label": "tape",
        "time": "0.614"
      },
      {
        "label": "mocha",
        "time": "0.682"
      },
      {
        "label": "jest (node)",
        "time": "1.96"
      },
      {
        "label": "jest (jsdom)",
        "time": "3.12"
      },
      {
        "label": "qunit",
        "time": "4.48"
      },
      {
        "label": "tap",
        "time": "5.67"
      },
      {
        "label": "ava",
        "time": "7.92"
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
        "time": "1.09"
      },
      {
        "label": "jasmine",
        "time": "1.75"
      },
      {
        "label": "jest (node)",
        "time": "1.83"
      },
      {
        "label": "mocha",
        "time": "2.23"
      },
      {
        "label": "jest (jsdom)",
        "time": "3.07"
      },
      {
        "label": "mocha-parallel-tests",
        "time": "4.27"
      },
      {
        "label": "ava",
        "time": "8.17"
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
        "time": "0.676"
      },
      {
        "label": "tape",
        "time": "0.707"
      },
      {
        "label": "qunit",
        "time": "0.733"
      },
      {
        "label": "lab",
        "time": "0.738"
      },
      {
        "label": "mocha",
        "time": "0.744"
      },
      {
        "label": "mocha.parallel",
        "time": "0.883"
      },
      {
        "label": "mocha-parallel-tests",
        "time": "0.886"
      },
      {
        "label": "jest (node)",
        "time": "2.52"
      },
      {
        "label": "jest (jsdom)",
        "time": "3.73"
      },
      {
        "label": "tap",
        "time": "5.85"
      },
      {
        "label": "ava",
        "time": "8.71"
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
        "time": "1.64"
      },
      {
        "label": "jasmine",
        "time": "2.16"
      },
      {
        "label": "mocha",
        "time": "2.26"
      },
      {
        "label": "jest (node)",
        "time": "2.52"
      },
      {
        "label": "jest (jsdom)",
        "time": "3.69"
      },
      {
        "label": "mocha-parallel-tests",
        "time": "4.69"
      },
      {
        "label": "ava",
        "time": "8.32"
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
        "time": "1.43"
      },
      {
        "label": "jest (node)",
        "time": "1.92"
      },
      {
        "label": "jasmine",
        "time": "2.19"
      },
      {
        "label": "mocha",
        "time": "2.34"
      },
      {
        "label": "jest (jsdom)",
        "time": "2.99"
      },
      {
        "label": "mocha-parallel-tests",
        "time": "4.21"
      },
      {
        "label": "ava",
        "time": "8.00"
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
        "time": "0.450"
      },
      {
        "label": "lab",
        "time": "0.777"
      },
      {
        "label": "mocha.parallel",
        "time": "0.884"
      },
      {
        "label": "jasmine",
        "time": "1.86"
      },
      {
        "label": "tape",
        "time": "1.91"
      },
      {
        "label": "mocha",
        "time": "1.99"
      },
      {
        "label": "jest (node)",
        "time": "2.32"
      },
      {
        "label": "jest (jsdom)",
        "time": "3.52"
      },
      {
        "label": "tap",
        "time": "5.71"
      },
      {
        "label": "qunit",
        "time": "5.72"
      },
      {
        "label": "ava",
        "time": "7.98"
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
        "time": "2.34"
      },
      {
        "label": "lab",
        "time": "2.72"
      },
      {
        "label": "jest (jsdom)",
        "time": "3.39"
      },
      {
        "label": "jasmine",
        "time": "3.45"
      },
      {
        "label": "mocha",
        "time": "3.52"
      },
      {
        "label": "mocha-parallel-tests",
        "time": "4.26"
      },
      {
        "label": "ava",
        "time": "7.92"
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
        "time": "0.233"
      },
      {
        "label": "mocha",
        "time": "0.332"
      },
      {
        "label": "qunit",
        "time": "0.344"
      },
      {
        "label": "mocha-parallel-tests",
        "time": "0.495"
      },
      {
        "label": "jest (node)",
        "time": "1.97"
      },
      {
        "label": "jest (jsdom)",
        "time": "3.00"
      },
      {
        "label": "tap",
        "time": "6.50"
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
        "label": "jasmine",
        "time": "1.80"
      },
      {
        "label": "jest (node)",
        "time": "1.87"
      },
      {
        "label": "mocha",
        "time": "1.89"
      },
      {
        "label": "jest (jsdom)",
        "time": "2.97"
      },
      {
        "label": "mocha-parallel-tests",
        "time": "4.47"
      }
    ]
  },
  "test=syncHeavyFn_nestedSuites=true_babel=false": {
    "name": "test=syncHeavyFn_nestedSuites=true_babel=false",
    "genConfig": {
      "basePath": "tests/unit",
      "files": 50,
      "nestedSuites": true,
      "hooks": false,
      "suitesInSuite": 2,
      "testsInSuite": 5,
      "test": "\n      eval(''); // disable V8 optimizations\n      for (let i = 0; i < 10000; i++) {\n        new Date();\n      }\n    ",
      "_path": [
        "test=syncHeavyFn",
        "nestedSuites=true"
      ],
      "name": "test=syncHeavyFn_nestedSuites=true",
      "outPath": "tests/unit/test=syncHeavyFn/nestedSuites=true",
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
        "time": "1.15"
      },
      {
        "label": "qunit",
        "time": "1.21"
      },
      {
        "label": "mocha",
        "time": "1.25"
      },
      {
        "label": "mocha-parallel-tests",
        "time": "1.37"
      },
      {
        "label": "jest (node)",
        "time": "4.45"
      },
      {
        "label": "jest (jsdom)",
        "time": "5.61"
      },
      {
        "label": "tap",
        "time": "7.11"
      }
    ]
  },
  "test=syncHeavyFn_nestedSuites=true_babel=true": {
    "name": "test=syncHeavyFn_nestedSuites=true_babel=true",
    "genConfig": {
      "basePath": "tests/unit",
      "files": 50,
      "nestedSuites": true,
      "hooks": false,
      "suitesInSuite": 2,
      "testsInSuite": 5,
      "test": "\n      eval(''); // disable V8 optimizations\n      for (let i = 0; i < 10000; i++) {\n        new Date();\n      }\n    ",
      "_path": [
        "test=syncHeavyFn",
        "nestedSuites=true"
      ],
      "name": "test=syncHeavyFn_nestedSuites=true",
      "outPath": "tests/unit/test=syncHeavyFn/nestedSuites=true",
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
        "time": "3.27"
      },
      {
        "label": "jasmine",
        "time": "3.44"
      },
      {
        "label": "mocha",
        "time": "3.57"
      },
      {
        "label": "jest (jsdom)",
        "time": "4.36"
      },
      {
        "label": "mocha-parallel-tests",
        "time": "6.22"
      }
    ]
  },
  "test=asyncEmptyFnZeroDelay_nestedSuites=true_babel=false": {
    "name": "test=asyncEmptyFnZeroDelay_nestedSuites=true_babel=false",
    "genConfig": {
      "basePath": "tests/unit",
      "files": 50,
      "nestedSuites": true,
      "hooks": false,
      "suitesInSuite": 2,
      "testsInSuite": 5,
      "test": "setTimeout(done, 0)",
      "_path": [
        "test=asyncEmptyFnZeroDelay",
        "nestedSuites=true"
      ],
      "name": "test=asyncEmptyFnZeroDelay_nestedSuites=true",
      "outPath": "tests/unit/test=asyncEmptyFnZeroDelay/nestedSuites=true",
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
        "label": "mocha-parallel-tests",
        "time": "0.521"
      },
      {
        "label": "mocha",
        "time": "1.07"
      },
      {
        "label": "jasmine",
        "time": "1.10"
      },
      {
        "label": "jest (node)",
        "time": "2.96"
      },
      {
        "label": "jest (jsdom)",
        "time": "4.05"
      },
      {
        "label": "tap",
        "time": "7.09"
      },
      {
        "label": "qunit",
        "time": "8.78"
      }
    ]
  },
  "test=asyncEmptyFnZeroDelay_nestedSuites=true_babel=true": {
    "name": "test=asyncEmptyFnZeroDelay_nestedSuites=true_babel=true",
    "genConfig": {
      "basePath": "tests/unit",
      "files": 50,
      "nestedSuites": true,
      "hooks": false,
      "suitesInSuite": 2,
      "testsInSuite": 5,
      "test": "setTimeout(done, 0)",
      "_path": [
        "test=asyncEmptyFnZeroDelay",
        "nestedSuites=true"
      ],
      "name": "test=asyncEmptyFnZeroDelay_nestedSuites=true",
      "outPath": "tests/unit/test=asyncEmptyFnZeroDelay/nestedSuites=true",
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
        "time": "2.00"
      },
      {
        "label": "jest (jsdom)",
        "time": "3.02"
      },
      {
        "label": "jasmine",
        "time": "3.20"
      },
      {
        "label": "mocha",
        "time": "3.26"
      },
      {
        "label": "mocha-parallel-tests",
        "time": "5.10"
      }
    ]
  },
  "test=asyncEmptyFnRandomDelay_nestedSuites=true_babel=false": {
    "name": "test=asyncEmptyFnRandomDelay_nestedSuites=true_babel=false",
    "genConfig": {
      "basePath": "tests/unit",
      "files": 50,
      "nestedSuites": true,
      "hooks": false,
      "suitesInSuite": 2,
      "testsInSuite": 5,
      "test": "setTimeout(done, Math.round({random} * 10))",
      "_path": [
        "test=asyncEmptyFnRandomDelay",
        "nestedSuites=true"
      ],
      "name": "test=asyncEmptyFnRandomDelay_nestedSuites=true",
      "outPath": "tests/unit/test=asyncEmptyFnRandomDelay/nestedSuites=true",
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
        "label": "mocha-parallel-tests",
        "time": "0.537"
      },
      {
        "label": "jasmine",
        "time": "3.40"
      },
      {
        "label": "mocha",
        "time": "3.50"
      },
      {
        "label": "jest (node)",
        "time": "3.65"
      },
      {
        "label": "jest (jsdom)",
        "time": "4.77"
      },
      {
        "label": "tap",
        "time": "6.67"
      },
      {
        "label": "qunit",
        "time": "11.2"
      }
    ]
  },
  "test=asyncEmptyFnRandomDelay_nestedSuites=true_babel=true": {
    "name": "test=asyncEmptyFnRandomDelay_nestedSuites=true_babel=true",
    "genConfig": {
      "basePath": "tests/unit",
      "files": 50,
      "nestedSuites": true,
      "hooks": false,
      "suitesInSuite": 2,
      "testsInSuite": 5,
      "test": "setTimeout(done, Math.round({random} * 10))",
      "_path": [
        "test=asyncEmptyFnRandomDelay",
        "nestedSuites=true"
      ],
      "name": "test=asyncEmptyFnRandomDelay_nestedSuites=true",
      "outPath": "tests/unit/test=asyncEmptyFnRandomDelay/nestedSuites=true",
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
        "time": "2.91"
      },
      {
        "label": "jest (jsdom)",
        "time": "5.10"
      },
      {
        "label": "mocha-parallel-tests",
        "time": "5.20"
      },
      {
        "label": "mocha",
        "time": "6.12"
      },
      {
        "label": "jasmine",
        "time": "890"
      }
    ]
  }
}