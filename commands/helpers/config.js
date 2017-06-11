/**
 * Config utils
 */

/**
 * Returns expanded and filtered configs
 *
 * @returns {Array}
 */
exports.getExpandedConfigs = function (baseConfigs, filterName) {
  let expandedConfigs = expandConfigs(baseConfigs);
  if (filterName) {
    expandedConfigs = expandedConfigs.filter(config => config.name.startsWith(filterName));
  }
  return expandedConfigs;
};

function expandConfigs(baseConfigs) {
  return baseConfigs.reduce((res, baseConfig) => {
    const expandedConfigs = expandConfig(baseConfig);
    return res.concat(expandedConfigs);
  }, []);
}

function expandConfig(baseConfig) {
  const expandedGenerates = expandArrayProps(baseConfig.generate);
  return expandedGenerates.map(generate => {
    return Object.assign({}, baseConfig, {
      generate,
      name: `${baseConfig.baseName}_${generate.name}`,
    });
  });
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
}
