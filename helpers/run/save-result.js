
const fs = require('fs-extra');

const filePath = 'docs/data.js';
const prefix = 'const data = ';

/**
 * Saves result to docs/data.js
 */
module.exports = function saveResult(result) {
  fs.ensureFileSync(filePath);
  const data = readData();
  data[result.name] = result;
  writeData(data);
};

function readData() {
  const content = fs.readFileSync(filePath, 'utf8');
  return parseContent(content);
}

function writeData(data) {
  const content = createContent(data);
  fs.writeFileSync(filePath, content, 'utf8');
}

function parseContent(content) {
  const strJson = content.replace(prefix, '').trim();
  return strJson ? JSON.parse(strJson) : {};
}

function createContent(data) {
  return `${prefix}${JSON.stringify(data, false, 2)}`;
}
