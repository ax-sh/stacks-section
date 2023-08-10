module.exports = {
  rules: {
    "unicorn/no-array-for-each": "off",
  },
  overrides: [
    {
      files: ["**/*config.ts", "**/*config.js"],
      rules: {
        "unicorn/prefer-module": "off",
      },
    },
  ],
};
