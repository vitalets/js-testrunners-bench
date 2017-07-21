
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
