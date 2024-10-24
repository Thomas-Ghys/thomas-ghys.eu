const nx = require('@nx/eslint-plugin');

module.exports = [
	...nx.configs['flat/base'],
	...nx.configs['flat/typescript'],
	...nx.configs['flat/javascript'],
	{
		ignores: ['**/dist'],
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
								'type:data',
							],
						},
						{
							sourceTag: 'type:feature',
							onlyDependOnLibsWithTags: [
								'type:feature',
								'type:ui',
								'type:utils',
								'type:data',
							],
						},
						{
							sourceTag: 'type:ui',
							onlyDependOnLibsWithTags: [
								'type:ui',
								'type:utils',
								'type:data',
							],
						},
						{
							sourceTag: 'type:utils',
							onlyDependOnLibsWithTags: [
								'type:utils',
								'type:data',
							],
						},
						{
							sourceTag: 'type:data',
							onlyDependOnLibsWithTags: ['type:data'],
						},
						{
							sourceTag: 'domain:public-site',
							onlyDependOnLibsWithTags: [
								'domain:public-site',
								'domain:common',
								'domain:theming',
							],
						},
						{
							sourceTag: 'domain:common',
							onlyDependOnLibsWithTags: ['domain:common'],
						},
						{
							sourceTag: 'domain:theming',
							onlyDependOnLibsWithTags: [
								'domain:theming',
								'domain:common',
							],
                        },
                        {
                            sourceTag: 'domain:home',
                            onlyDependOnLibsWithTags: [
                                'domain:home',
                                'domain:common'
                            ],
                        }
					],
				},
			],
		},
	},
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
		// Override or add rules here
		rules: {},
	},
	{
		files: ['**/*.json'],
		rules: {
			'@nx/dependency-checks': [
				'error',
				{ ignoredFiles: ['{projectRoot}/eslint.config.{js,cjs,mjs}'] },
			],
		},
		languageOptions: { parser: require('jsonc-eslint-parser') },
	},
	{
		files: ['**/*.json'],
		rules: {
			'@nx/dependency-checks': [
				'error',
				{ ignoredFiles: ['{projectRoot}/eslint.config.{js,cjs,mjs}'] },
			],
		},
		languageOptions: { parser: require('jsonc-eslint-parser') },
	},
];
