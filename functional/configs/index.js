/**
 * Returns expanded configs
 */

const utils = require('../utils');

module.exports = expand([
  require('./load-page'),
]);

function expand(configs) {
  return configs.reduce((res, config) => {
    const expandedConfigs = utils.expandArrayProps(config.generate);
    expandedConfigs.forEach(expandedConfig => {
      const finalConfig = Object.assign({}, config, {generate: expandedConfig});
      res.push(finalConfig);
    });
    return res;
  }, []);
}
