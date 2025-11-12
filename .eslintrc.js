module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'react/no-unstable-nested-components': 'off',
    'indent': [ 'error', 2 ],
    'semi': [ 'error', 'never' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'computed-property-spacing': [ 'error', 'always' ],
    'template-curly-spacing': [ 'error', 'always' ],
    'space-in-parens': [ 'error', 'never' ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'func-call-spacing': [ 'error', 'never' ],
  },
}
