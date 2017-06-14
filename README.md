# JavaScript test-runners benchmark
This benchmark runs the same tests on the most popular JavaScript test-runners and measures execution time.  
Tests are divided onto **unit** and **functional**.

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

### Latest results
https://vitalets.github.io/js-testrunners-bench/index.html

### Usage
1. Clone the repo
    ```bash
    git clone https://github.com/vitalets/js-testrunners-bench.git
    ```

2. Install dependencies
    ```bash
    cd js-testrunners-bench
    npm install
    ```

3. Generate tests
    ```bash
    node commands/generate unit
    ```
    Check that `/tests` directory is created and filled with test-files.
    
4. Run benchmarks
    ```bash
    # Synchronous tests with no hooks, no nested suites and no Babel transpiling
    node commands/bench unit sync_hooks=0_nestedSuites=0 'no Babel'
    
    # Asynchronous tests with random delay 0-10ms with hooks and nested suites
    node commands/bench unit async_delay=0-10_hooks=1_nestedSuites=1
    
    etc..
    ```

<details>
 <summary>Example output:</summary>

    > node commands/bench unit sync_hooks=0_nestedSuites=0 'no Babel'
    
    JavaScript test-runners benchmark.
    Testing type: unit
    System: darwin x64 4 cpu(s) node v7.2.0
    Date: Wed Jun 14 2017
    
    RUNNER               VERSION
    mocha                3.4.2  
    mocha.parallel       0.15.2 
    mocha-parallel-tests 1.2.9  
    jasmine              2.6.0  
    tape                 4.6.3  
    qunit                2.3.3  
    lab                  13.1.0 
    tap                  10.3.3 
    jest                 20.0.4 
    ava                  0.19.1 
    
    sync_hooks=0_nestedSuites=0: running 250 tests in 50 files:
    
    benchName: no Babel
    Running: mocha ( mocha tests/unit/sync/hooks=0_nestedSuites=0/mocha )
    Running: mocha.parallel ( mocha tests/unit/sync/hooks=0_nestedSuites=0/mocha.parallel )
    Running: mocha-parallel-tests ( mocha-parallel-tests tests/unit/sync/hooks=0_nestedSuites=0/mocha-parallel-tests )
    Running: jasmine ( jasmine JASMINE_CONFIG_PATH=temp/jasmine.json )
    Running: tape ( tape tests/unit/sync/hooks=0_nestedSuites=0/tape/*.js )
    Running: qunit ( qunit tests/unit/sync/hooks=0_nestedSuites=0/qunit )
    Running: lab ( lab --parallel tests/unit/sync/hooks=0_nestedSuites=0/lab )
    Running: tap ( tap tests/unit/sync/hooks=0_nestedSuites=0/tap --jobs-auto )
    Running: jest ( jest tests/unit/sync/hooks=0_nestedSuites=0/jest )
    Running: ava ( ava tests/unit/sync/hooks=0_nestedSuites=0/ava --concurrency=4 )
    
    benchName: no Babel
    RUNNER               TIME 
    jasmine              0.220
    tape                 0.288
    mocha                0.322
    qunit                0.330
    lab                  0.378
    mocha.parallel       0.515
    mocha-parallel-tests 0.552
    jest                 3.41 
    tap                  5.93 
    ava                  10.1 
    
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
