const fs = require('fs-extra');

module.exports = {
  name: 'jasmine',
  hooks: [
    'beforeAll',
    'beforeEach',
    'afterAll',
    'afterEach',
  ],
  suite: `describe('{name}', function () { {content} });`,
  test: `it('{name}', {fn})`,
  syncFn: `function () {}`,
  asyncFn: `function (done) {
    return new Promise(resolve => setTimeout(resolve, {delay})).then(done);
  }`,
  writeConfigFile
};

function writeConfigFile(testsPath) {
  const config = {
    spec_dir: testsPath,
    spec_files: [
      '**/*.js'
    ]
  };
  const filename = './temp/jasmine.json';
  fs.outputJsonSync(filename, config);
}
