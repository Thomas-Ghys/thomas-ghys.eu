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
                  sourceTag: "type:feature",
                  onlyDependOnLibsWithTags: [
                      "type:feature",
                      "type:ui",
                      "type:utils",
                      "type:data"
                  ]
              },
              {
                sourceTag: "type:ui",
                onlyDependOnLibsWithTags: [
                    "type:ui",
                    "type:utils",
                    "type:data"
                ]
              },
              {
                sourceTag: "type:utils",
                onlyDependOnLibsWithTags: [
                    "type:utils",
                    "type:data"
                ]
              },
              {
                sourceTag: "type:data",
                onlyDependOnLibsWithTags: [
                    "type:data"
                ]
              },
              {
                sourceTag: "domain:theming",
                onlyDependOnLibsWithTags: [
                    "domain:theming"
                ]
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
];
