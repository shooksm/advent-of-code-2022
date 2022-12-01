module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['standard-with-typescript', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: '2021',
    project: ['./tsconfig.json'],
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        quoteProps: 'preserve',
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        useTabs: false,
      },
    ],
  },
};
