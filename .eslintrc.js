module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: ['plugin:prettier/recommended', 'plugin:@typescript-eslint/eslint-recommended'],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
  globals: {
    describe: true,
    it: true,
    jest: true,
    expect: true,
    beforeAll: true,
  },
};
