const { override, useEslintRc, fixBabelImports } = require('customize-cra');
const rewireYAML = require('react-app-rewire-yaml');

module.exports = override(
  useEslintRc(),
  rewireYAML,
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
);
