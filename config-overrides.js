const yaml = require('react-app-rewire-yaml');

module.exports = (config, env) => {
  config = yaml(config, env);
  return config;
};
