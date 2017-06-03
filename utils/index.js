/**
 * Utils
 */

/**
 * Expands array props of object
 * Example:
 * {x: 1, y: [1, 2]} --> [{x:1, y: 1, name: 'y=1'}, {x:1, y: 2, name: 'y=2'}]
 *
 * @returns {Array}
 */
exports.expandArrayProps = function expandArrayProps(obj) {
  const subObjects = [];
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const prop = keys[i];
    const value = obj[prop];
    if (Array.isArray(value)) {
      value.forEach(item => {
        const subObj = Object.assign({}, obj, {
          [prop]: item,
          name: `${obj.name ? obj.name + '_' : ''}${prop}=${item}`
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
