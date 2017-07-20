const fs = require('fs-extra');
const path = require('path');

module.exports = {
  name: 'jasmine',
  file: '',
  suite: `describe('{name}', function () { {content} });`,
  hooks: [
    'beforeAll',
    'beforeEach',
    'afterAll',
    'afterEach',
  ],
  test: `it('{name}', {fn})`,
  syncFn: `function () { {content} }`,
  asyncFn: `function (done) {
    {content}
  }`,
  writeConfigFile
};

function writeConfigFile(testsPath, runInfo) {
  const config = {
    spec_dir: testsPath,
    spec_files: [
      '**/*.js'
    ]
  };

  if (runInfo.babel) {
    config.helpers = [path.resolve('./node_modules/babel-register/lib/node.js')];
  }

  const filename = './temp/jasmine.json';
  fs.outputJsonSync(filename, config);
}
