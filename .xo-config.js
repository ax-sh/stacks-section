module.exports = {
	extends: ["prettier"],
	rules: {
		"unicorn/no-array-for-each": "off",
		"import/extensions": "off",
		"capitalized-comments": "off",
		"unicorn/no-array-callback-reference": "off",
		"@typescript-eslint/triple-slash-reference": "off",
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
