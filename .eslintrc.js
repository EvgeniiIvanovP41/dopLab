module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': ['error', 'windows'],
    'comma-dangle': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-alert': 'off',
    'prefer-template': 'off',
    'no-useless-escape': 'off',
    'func-names': 'off',
    'prefer-arrow-callback': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'object-shorthand': 'off',
    'no-var': 'off',
  },
};
