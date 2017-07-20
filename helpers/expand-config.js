/**
 * Expands config
 *
 * @returns {Array}
 */
module.exports = function expandConfig(config) {
  const expandedConfigs = expandArrayProps(config);
  expandedConfigs.forEach(calcTestsCount);
  return expandedConfigs;
};

function calcTestsCount(config) {
  const {files, testsInSuite, suitesInSuite, nestedSuites} = config;
  const testsInFile = nestedSuites ? testsInSuite * suitesInSuite : testsInSuite;
  config.tests = testsInFile * files;
}

/**
 * Expands array props of object
 * Example:
 * {x: 1, y: [1, 2]} --> [{x:1, y: 1, name: 'y=1'}, {x:1, y: 2, name: 'y=2'}]
 *
 * @returns {Array}
 */
function expandArrayProps(obj) {
  const subObjects = [];
  const keys = Object.keys(obj).sort();
  for (let i = 0; i < keys.length; i++) {
    const prop = keys[i];
    const value = obj[prop];
    if (Array.isArray(value)) {
      value.forEach(item => {
        const itemName = item.name || item;
        const itemValue = item.value !== undefined ? item.value : item;
        const name = `${obj.name ? obj.name + '_' : ''}${prop}=${itemName}`;
        const subObj = Object.assign({}, obj, {
          [prop]: itemValue,
          name,
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
}
