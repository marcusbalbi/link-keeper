module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: [
    'eslint:recommended',
    'standard'
  ],
  globals: {
    describe: true,
    it: true,
    jest: true,
    expect: true
  },
  // add your custom rules here
  'rules': {
    'no-new': 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    // custom
    'no-console': 1,
    'no-template-curly-in-string': 2,
    'complexity': ["error", 10],
    'no-var': 2,
    // 'consistent-return': ['error', { "treatUndefinedAsUnspecified": false }]
  }
}
