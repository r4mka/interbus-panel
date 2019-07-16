const { override, useEslintRc } = require('customize-cra');
const rewireYAML = require('react-app-rewire-yaml');

module.exports = override(useEslintRc(), rewireYAML);
