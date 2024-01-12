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
			files: ["**/*config.{ts,js}", "vitest-setup.ts"],
			rules: {
				"unicorn/prefer-module": "off",
				"new-cap": "off",
				"import/no-unassigned-import": "off",
			},
		},
		{
			files: ["auto-imports.d.ts"],
			rules: {
				"unicorn/no-abusive-eslint-disable": "off",
			},
		},
	],
};
