# JavaScript test-runners benchmark
The benchmark for running the same tests on the most popular JavaScript test-runners and measuring execution time. Tests are divided onto **unit** and **functional**.

## Unit tests

### Runners
* [Mocha](https://github.com/mochajs/mocha)
* [Jasmine](https://github.com/jasmine/jasmine)
* [AVA](https://github.com/avajs/ava)
* [Jest](https://github.com/facebook/jest)
* [tape](https://github.com/substack/tape)
* [tap](https://github.com/tapjs/node-tap)
* [mocha-parallel-tests](https://github.com/yandex/mocha-parallel-tests)
* [mocha.parallel](https://github.com/danielstjules/mocha.parallel)
* [QUnit](https://github.com/qunitjs/qunit)
* [lab](https://github.com/hapijs/lab)

### Benchmark conditions
This benchmark measures execution time for every combination of following conditions:

#### 1. Test types
* Synchronous empty test:
  ```js
  function () {}
  ```
* Synchronous heavy test:
  ```js
  function () {
    for (let i = 0; i < 10000; i++) {
      new Date();
    }
  }
  ```
* Asynchronous empty test with zero delay:
  ```js
  function (done) {
    setTimeout(done, 0);
  }
  ```
* Asynchronous empty test with random delay:
  ```js
  function (done) {
    setTimeout(done, Math.round(Math.random() * 10));
  }
  ```

#### 2. Tests structure
* With nested suites 
* Without nested suites

#### 3. Run types
* With Babel transpiling 
* Without Babel transpiling
  
### Latest results
https://vitalets.github.io/js-testrunners-bench/index.html

### Run yourself
1. Clone the repo:
    ```bash
    git clone https://github.com/vitalets/js-testrunners-bench.git
    ```

2. Install dependencies:
    ```bash
    cd js-testrunners-bench
    npm install
    ```

3. Generate tests:
    ```bash
    node unit gen
    ```
    After run check that `/tests` directory is created and filled with test-files.
    
4. Run benchmark:
    ```bash
    node unit run [testsType] [runType]
    ```
    Examples:
    ```bash
    # Synchronous empty tests without nested suites and without Babel
    node unit run test=syncEmptyFn_nestedSuites=false babel=false
    
    # Asynchronous tests with random delay 0-10ms with nested suites and Babel
    node unit run test=asyncEmptyFnRandomDelay_nestedSuites=true babel=true
    
    etc..
    ```

<details>
 <summary>Example output:</summary>

    > node unit run test=syncEmptyFn_nestedSuites=false babel=false
    JavaScript test-runners benchmark
    System: darwin x64 4 cpu(s) node v7.2.0
    Date: Wed Jul 26 2017
    
    RUNNER               VERSION
    mocha                3.4.2  
    jasmine              2.6.0  
    mocha.parallel       0.15.2 
    mocha-parallel-tests 1.2.9  
    qunit                2.3.3  
    tape                 4.6.3  
    tap                  10.3.3 
    lab                  13.1.0 
    ava                  0.19.1 
    jest                 20.0.4 
    
    Bench type: test=syncEmptyFn, nestedSuites=false, babel=false
    Tests count: 250 (50 files)
    Running: mocha, cmd: mocha tests/unit/test=syncEmptyFn/nestedSuites=false/mocha
    Running: jasmine, cmd: jasmine JASMINE_CONFIG_PATH=temp/jasmine.json
    Running: mocha.parallel, cmd: mocha tests/unit/test=syncEmptyFn/nestedSuites=false/mocha.parallel
    Running: mocha-parallel-tests, cmd: mocha-parallel-tests tests/unit/test=syncEmptyFn/nestedSuites=false/mocha-parallel-tests
    Running: qunit, cmd: qunit tests/unit/test=syncEmptyFn/nestedSuites=false/qunit
    Running: tape, cmd: tape tests/unit/test=syncEmptyFn/nestedSuites=false/tape/*.js
    Running: tap, cmd: tap tests/unit/test=syncEmptyFn/nestedSuites=false/tap --jobs-auto
    Running: lab, cmd: lab --parallel tests/unit/test=syncEmptyFn/nestedSuites=false/lab
    Running: ava, cmd: ava tests/unit/test=syncEmptyFn/nestedSuites=false/ava --concurrency=4
    Running: jest (jsdom), cmd: jest --env=jsdom tests/unit/test=syncEmptyFn/nestedSuites=false/jest
    Running: jest (node), cmd: jest --env=node tests/unit/test=syncEmptyFn/nestedSuites=false/jest
    Result:
    LABEL                TIME 
    jasmine              0.205
    tape                 0.273
    qunit                0.332
    mocha                0.346
    mocha.parallel       0.420
    lab                  0.429
    mocha-parallel-tests 0.471
    jest (node)          1.84 
    jest (jsdom)         3.78 
    tap                  6.32 
    ava                  8.34 
    
    Done.
</details>

## Functional tests

Not ready yet.

### Runners
 * todo [Webdriverio](http://webdriver.io)
 * todo [Mocha](https://github.com/mochajs/mocha) + [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver)
 * todo [CucumberJS](https://github.com/cucumber/cucumber-js)
 * todo [Nightwatch](https://github.com/nightwatchjs/nightwatch)
 * todo [TestCafe](https://github.com/DevExpress/testcafe)
 * todo [Nemo](https://github.com/paypal/nemo)

## Related links
* [JavaScript Test-Runners Benchmark (Part 1, The Unit Testing)](https://medium.com/dailyjs/javascript-test-runners-benchmark-3a78d4117b4)
* [JavaScript unit testing tools](https://mo.github.io/2017/06/05/javascript-unit-testing.html)
* [An Overview of JavaScript Testing in 2017](https://medium.com/powtoon-engineering/a-complete-guide-to-testing-javascript-in-2017-a217b4cd5a2a)
* [Picking Jest over Mocha – testing tools comparison](https://gziolo.pl/2017/06/17/picking-jest-over-mocha/)

## License
MIT @ [Vitaliy Potapov](https://github.com/vitalets)
