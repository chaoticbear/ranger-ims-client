module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:typescript-sort-keys/recommended',
    'prettier',
  ],
  ignorePatterns: ['.cache/*', 'node_modules', 'test-results'],
  overrides: [
    {
      files: ['types/*.d.ts'],
      rules: {
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
    {
      files: ['components/**/*.test.*'],
      rules: {
        'playwright/missing-playwright-await': 'off',
      },
    },
    {
      files: ['types/empty-props.ts'],
      rules: {
        '@typescript-eslint/ban-types': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'simple-import-sort',
    'sort-destructure-keys',
    'import',
    'typescript-sort-keys',
  ],
  rules: {
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          object: {
            message: 'Be more specific with Record or use UnknownObject.',
          },
        },
      },
    ],
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/sort-type-constituents': 'error',
    'eol-last': 'error',
    eqeqeq: ['error', 'always'],
    'jsx-a11y/label-has-for': 'off',
    'no-alert': 'error',
    'no-console': 'error',
    'no-debugger': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 1,
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            message: 'Use individual lodash packages',
            name: 'lodash',
          },
          {
            message: 'Use date-fns',
            name: 'moment',
          },
        ],
      },
    ],
    'no-trailing-spaces': 'error',
    'no-warning-comments': 'warn',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        next: 'return',
        prev: '*',
      },
    ],
    'prefer-template': 'error',
    radix: ['error', 'always'],
    'react/forbid-component-props': [
      'error',
      {
        forbid: ['style'],
      },
    ],
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-no-literals': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': 'error',
    'react/no-array-index-key': 'error',
    'react/no-set-state': 'off',
    'react/prefer-stateless-function': [
      'error',
      {
        ignorePureComponents: true,
      },
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    semi: ['error', 'never'],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Non-side effect imports.
          ['^[^\\u0000]'], // Side effect imports.
          ['^\\u0000'],
        ],
      },
    ],
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-imports': 'off',
    'sort-keys': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
