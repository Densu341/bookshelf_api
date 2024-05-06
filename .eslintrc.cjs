module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 15,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'off',
    'import/extensions': ['error', 'always'],
    'arrow-body-style': ['error', 'as-needed'],
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    'no-unused-vars': 'off',
    'object-curly-newline': [
      'error',
      {
        multiline: true,
        consistent: true,
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'no-console': 'warn',
    'no-unused-vars': 'off',
  },
};
