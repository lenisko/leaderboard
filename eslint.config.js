import nextConfig from 'eslint-config-next';
import coreWebVitals from 'eslint-config-next/core-web-vitals';
import tsConfig from 'eslint-config-next/typescript';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import formatjsPlugin from 'eslint-plugin-formatjs';

export default [
  ...nextConfig,
  ...coreWebVitals,
  ...tsConfig,
  {
    plugins: {
      prettier: prettierPlugin,
      formatjs: formatjsPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'formatjs/enforce-id': 'error',
    },
  },
  prettierConfig,
  {
    ignores: ['dist/', '.next/', 'node_modules/'],
  },
];
