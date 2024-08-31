const js = require('@eslint/js');

module.exports = [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
        exports: 'readonly',
        console: 'readonly',
      },
    },
    rules: {
      indent: ['error', 2],
      'max-len': ['error', { code: 80 }],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
    },
  },
];
