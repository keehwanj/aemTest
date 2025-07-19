module.exports = {
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  overrides: [
    {
      files: '*.java',
      options: {
        useTabs: false,
        trailingComma: 'none',
      },
    },
  ],
};
