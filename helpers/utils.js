
const {exec} = require('shelljs');

/**
 * Expands array props of object
 * Example:
 * {x: 1, y: [1, 2]} --> [{x:1, y: 1, _path: ['y=1']}, {x:1, y: 2, _path: ['y=2']}]
 *
 * @returns {Array}
 */
exports.expandArrayProps = function expandArrayProps(obj) {
  const PATH_KEY = '_path';
  const subObjects = [];
  const keys = Object.keys(obj).sort();
  for (let i = 0; i < keys.length; i++) {
    const prop = keys[i];
    const value = obj[prop];
    if (Array.isArray(value) && prop !== PATH_KEY) {
      value.forEach(item => {
        const itemName = item.name || item;
        const itemValue = item.value !== undefined ? item.value : item;
        const pathValue = (obj[PATH_KEY] || []).concat([`${prop}=${itemName}`]);
        const subObj = Object.assign({}, obj, {
          [prop]: itemValue,
          [PATH_KEY]: pathValue,
        });
        subObjects.push(subObj);
      });
      break;
    }
  }

  if (subObjects.length) {
    return subObjects.reduce((res, subObj) => {
      return res.concat(expandArrayProps(subObj));
    }, []);
  } else {
    return [obj];
  }
};

/**
 * Measures CMD execution time
 *
 * @param {String} cmd
 * @param {Number} [count=1] count of runs
 * @returns {Number}
 */
exports.measureCmd = function measureCmd(cmd, count = 1) {
  const values = [];
  for (let i = 0; i < count; i++) {
    const proc = exec(`time ${cmd}`, {silent: true});
    assertCmdOutput(cmd, proc.stderr);
    assertCmdOutput(cmd, proc.stdout);

    const matches = proc.stderr.match(/real\s+([0-9]+)m([0-9\.]+)s/);
    const minutes = parseInt(matches[1], 10);
    const seconds = parseFloat(matches[2]);
    const total = minutes * 60 + seconds;
    values.push(total);
  }
  const sum = values.reduce((r, value) => r + value, 0);
  return sum / count;
};

function assertCmdOutput(cmd, output) {
  // if (!output) {
  //   console.log(`Output is empty! COMMAND: ${cmd}`);
  //   process.exit(1);
  // }
  if (/error|exception/i.test(output)) {
    console.log(output);
    console.log(`Error in output! COMMAND: ${cmd}`);
    process.exit(1);
  }
}
