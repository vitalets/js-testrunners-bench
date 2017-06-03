# Unit testrunners bench
Javascript testrunners benchmark for unit testing.

## Runners
* [mocha](https://github.com/mochajs/mocha)
* [jasmine](https://github.com/jasmine/jasmine)
* [ava](https://github.com/avajs/ava)
* [tape](https://github.com/substack/tape)
* [jest](https://github.com/facebook/jest)
* [mocha-parallel-tests](https://github.com/yandex/mocha-parallel-tests)
* [mocha.parallel](https://github.com/danielstjules/mocha.parallel)

 
## Tests
To ensure comprehensive benchmarking, tests are generated as combination of several parameters: 

* synchronous / asynchronous
* has nested suites / no nested suites
* has hooks / no hooks
* equal duration / random duration

## Usage

1. Generate tests:
```bash
npm run generate
```

2. Run benchmark
```bash
# run synchronous tests benchmark (1 combination of parameters)
npm run sync

# run synchronous tests benchmark (all combinations of parameters)
npm run sync-all

# run asynchronous tests benchmark (1 combination of parameters)
npm run async

# run asynchronous tests benchmark (all combinations of parameters)
npm run async-all
```
For other options have a look on `package.json` scripts.

## Last results
Results can depend on your machine and runner versions.

### Synchronous tests
```
> npm run sync

testrunners-bench-unit
System: darwin x64 4 cpu(s) node v7.2.0
Date: Mon May 08 2017

RUNNER  VERSION
mocha   3.3.0  
jasmine 2.6.0  
tape    4.6.3  
jest    20.0.0 
sheeva  0.1.0  

sync (nestedSuites=0_hooks=0): running 250 tests in 50 files:
Running: mocha
Running: jasmine
Running: tape
Running: jest
Running: sheeva

RUNNER  TIME 
jasmine 0.179
tape    0.224
mocha   0.269
sheeva  0.305
jest    4.32 

Done.
```

### Asynchronous tests
```
> npm run async

testrunners-bench-unit
System: darwin x64 4 cpu(s) node v7.2.0
Date: Mon May 08 2017

RUNNER               VERSION
mocha                3.3.0  
jasmine              2.6.0  
mocha.parallel       0.15.2 
mocha-parallel-tests 1.2.9  
tape                 4.6.3  
jest                 20.0.0 
sheeva               0.1.0  

async (nestedSuites=0_delay=0-10_hooks=0): running 250 tests in 50 files:
Running: mocha
Running: jasmine
Running: mocha.parallel
Running: mocha-parallel-tests
Running: tape
Running: jest
Running: sheeva

RUNNER               TIME 
sheeva               0.338
mocha-parallel-tests 0.473
mocha.parallel       0.896
jasmine              1.91 
tape                 1.91 
mocha                2.00 
jest                 5.29 

Done.
```
