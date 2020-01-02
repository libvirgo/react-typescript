module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            modules: true
        }
    },
    plugins: [
        'react-hooks'
    ],
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true
    },
    rules: {
        'semi': [1, 'always'],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
    },
    overrides: [
        {
            files: ['**/*.ts?(x)'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 2018,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                    modules: true
                }
            },
            plugins: ['@typescript-eslint']
        }
    ]
}