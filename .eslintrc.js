// http://eslint.org/docs/user-guide/configuring
module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            impliedStrict: true
        }
    },
    env: {
        browser: true,
        node: true,
        'jest/globals': true,
    },
    extends: [
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'eslint:recommended',

        // https://github.com/AlloyTeam/eslint-config-alloy
        'alloy/typescript',
    ],
    plugins: [
        '@typescript-eslint',
        'jest',
    ],
    rules: {
        // http://eslint.cn/docs/rules/
        indent: ['error', 4, { SwitchCase: 1 }],
        semi: ['error', 'never'],
        'no-unused-vars': ['error', { ignoreRestSiblings: true }],
        'space-before-function-paren': ['off'],
        'arrow-parens': ['error', 'as-needed'],
        'no-console': 'off',
        'quotes': ['error', 'single'],
    },

}
