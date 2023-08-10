module.exports = {
	extends: ["prettier"],
	rules: {
		"unicorn/no-array-for-each": "off",
		"import/extensions": "off",
		"capitalized-comments": "off",
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
