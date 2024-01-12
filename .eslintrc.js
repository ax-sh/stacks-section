module.exports = {
  extends: ['next/core-web-vitals','prettier'],
  rules: {
    'unicorn/no-array-for-each': 'off',
    'import/extensions': 'off',
    'capitalized-comments': 'off',
    'unicorn/no-array-callback-reference': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    'no-lone-blocks': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    'n/prefer-global/process': 'off',
    'no-implicit-coercion': 'off'
  },
  overrides: [
    {
      files: ['**/*config.{ts,js}', 'vitest-setup.ts', '**/*.test.{tsx,jsx}'],
      rules: {
        'unicorn/prefer-module': 'off',
        'new-cap': 'off',
        'import/no-unassigned-import': 'off',
        'import/no-named-as-default': 'off'
      }
    },
    {
      files: ['auto-imports.d.ts'],
      rules: {
        'unicorn/no-abusive-eslint-disable': 'off'
      }
    }
  ]
};
