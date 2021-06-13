// module.exports = {
//     root: true,
//     parser: '@typescript-eslint/parser',
//     parserOptions: {
//         ecmaVersion: 2020,
//         sourceType: 'module',
//         ecmaFeatures: {
//             jsx: true
//         }
//     },
//     settings: {
//         react: {
//             version: 'detect'
//         }
//     },
//     env: {
//         browser: true,
//         amd: true,
//         node: true
//     },
//     extends: [
//         'eslint:recommended',
//         'plugin:@typescript-eslint/eslint-recommended',
//         'plugin:@typescript-eslint/recommended',
//         'plugin:react/recommended',
//         'plugin:jsx-a11y/recommended',
//         'prettier/@typescript-eslint',
//         'plugin:prettier/recommended' // Make sure this is always the last element in the array.
//     ],
//     rules: {
//         'react/prop-types': 'off',
//         'react/react-in-jsx-scope': 'off',
//         '@typescript-eslint/no-var-requires': 0,
//         '@typescript-eslint/explicit-function-return-type': 'off',
//         'prettier/prettier': ['error', {}, { usePrettierrc: true }],
//         'jsx-a11y/anchor-is-valid': [
//             'error',
//             {
//                 components: ['Link'],
//                 specialLink: ['hrefLeft', 'hrefRight'],
//                 aspects: ['invalidHref', 'preferButton']
//             }
//         ]
//     }
// };
