const nx = require('@nx/eslint-plugin');

module.exports = [
	...nx.configs['flat/base'],
	...nx.configs['flat/typescript'],
	...nx.configs['flat/javascript'],
	{
		ignores: ['**/dist']
	},
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
		rules: {
			'@nx/enforce-module-boundaries': [
				'error',
				{
					enforceBuildableLibDependency: true,
					allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
					depConstraints: [
						{
							sourceTag: 'type:shell',
							onlyDependOnLibsWithTags: [
								'type:shell',
								'type:feature',
								'type:ui',
								'type:utils',
								'type:data'
							]
						},
						{
							sourceTag: 'type:feature',
							onlyDependOnLibsWithTags: [
								'type:feature',
								'type:ui',
								'type:utils',
								'type:data'
							]
						},
						{
							sourceTag: 'type:ui',
							onlyDependOnLibsWithTags: [
								'type:ui',
								'type:utils',
								'type:data'
							]
						},
						{
							sourceTag: 'type:utils',
							onlyDependOnLibsWithTags: [
								'type:utils',
								'type:data'
							]
						},
						{
							sourceTag: 'type:data',
							onlyDependOnLibsWithTags: ['type:data']
						},
						{
							sourceTag: 'domain:public-site',
							onlyDependOnLibsWithTags: [
								'domain:public-site',
								'domain:common',
								'domain:theming',
								'domain:home',
								'domain:contact'
							]
						},
						{
							sourceTag: 'domain:common',
							onlyDependOnLibsWithTags: ['domain:common']
						},
						{
							sourceTag: 'domain:theming',
							onlyDependOnLibsWithTags: [
								'domain:theming',
								'domain:common'
							]
						},
						{
							sourceTag: 'domain:home',
							onlyDependOnLibsWithTags: [
								'domain:home',
								'domain:common'
							]
						},
						{
							sourceTag: 'domain:contact',
							onlyDependOnLibsWithTags: [
								'domain:contact',
								'domain:common'
							]
						}
					]
				}
			],
			'default-case': 'error',
			'no-array-constructor': 'error',
			'no-empty-function': [
				'error',
				{
					allow: ['constructors']
				}
			],
			'no-eval': 'error',
			'no-implied-eval': 'error',
			'no-lone-blocks': 'error',
			'no-lonely-if': 'error',
			'no-script-url': 'error',
			'no-undef-init': 'error',
			'no-useless-escape': 'error',
			'no-useless-rename': 'error',
			'prefer-arrow-callback': 'error',
			'prefer-const': 'error',
			'prefer-object-has-own': 'error',
			'quote-props': ['error', 'as-needed'],
			'spaced-comment': 'error',
			'array-bracket-spacing': 'error',
			'arrow-parens': 'error',
			'arrow-spacing': 'error',
			'block-spacing': 'error',
			'brace-style': 'error',
			'comma-dangle': 'error',
			'comma-spacing': 'error',
			'func-call-spacing': 'error',
			'implicit-arrow-linebreak': 'error',
			indent: [
				'error',
				'tab',
				{
					SwitchCase: 1
				}
			],
			'key-spacing': 'error',
			'keyword-spacing': 'error',
			'new-parens': 'error',
			'no-extra-parens': ['error', 'functions'],
			'no-multi-spaces': 'error',
			'no-trailing-spaces': 'error',
			'no-whitespace-before-property': 'error',
			'object-curly-spacing': 'error',
			'operator-linebreak': 'error',
			'padded-blocks': ['error', 'never'],
			'padding-line-between-statements': 'error',
			quotes: ['error', 'single'],
			'rest-spread-spacing': 'error',
			semi: 'error',
			'semi-spacing': 'error',
			'semi-style': 'error',
			'space-before-blocks': 'error',
			'space-in-parens': 'error',
			'space-infix-ops': 'error',
			'space-unary-ops': 'error',
			'switch-colon-spacing': 'error',
			'template-curly-spacing': 'error',
			'wrap-regex': 'error'
		}
	},
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
		// Override or add rules here
		rules: {}
	},
	{
		files: ['**/*.json'],
		rules: {
			'@nx/dependency-checks': [
				'error',
				{ignoredFiles: ['{projectRoot}/eslint.config.{js,cjs,mjs}']}
			]
		},
		languageOptions: {parser: require('jsonc-eslint-parser')}
	},
	{
		files: ['**/*.json'],
		rules: {
			'@nx/dependency-checks': [
				'error',
				{ignoredFiles: ['{projectRoot}/eslint.config.{js,cjs,mjs}']}
			]
		},
		languageOptions: {parser: require('jsonc-eslint-parser')}
	}
];
