import path from 'node:path';
import { fileURLToPath } from 'node:url';
import eslintPluginAstro from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser';
import tseslint from '@typescript-eslint/eslint-plugin';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tailwindcss from 'eslint-plugin-tailwindcss';
import eslintConfigPrettier from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  // Ignore patterns
  {
    ignores: [
      '.astro/',
      '.wrangler',
      'dist/',
      'node_modules/',
      'worker-configuration.d.ts',
      'public/**/*.css',
      'public/**/*.js',
    ],
  },
  // Global settings
  {
    settings: {
      tailwindcss: {
        config: path.join(__dirname, './tailwind.config.js'),
      },
    },
  },
  // TypeScript files
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  // Astro files
  ...eslintPluginAstro.configs.recommended,
  // Tailwind CSS rules
  {
    files: ['**/*.astro', '**/*.jsx', '**/*.tsx'],
    plugins: {
      tailwindcss,
    },
    rules: {
      'tailwindcss/no-contradicting-classname': 'error',
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/enforces-negative-arbitrary-values': 'warn',
      'tailwindcss/enforces-shorthand': 'warn',
      'tailwindcss/no-unnecessary-arbitrary-value': 'warn',
      'tailwindcss/no-custom-classname': 'off', // Allow custom theme colors
    },
  },
  // Prettier config (disables conflicting rules)
  eslintConfigPrettier,
];
