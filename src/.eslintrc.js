module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        'plugin:vue/essential',
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    globals: {
        window: true,
        document: false,
    },
    rules: {
        // default
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        // custom
        'array-callback-return': 0,
        'import/extensions': ['error', 'always', {
            js: 'never',
            vue: 'never',
        }],
        'no-shadow': 0,
        'prefer-destructuring': ['error', { object: false, array: false }],
        // lbg
        'linebreak-style': 0,
        indent: [2, 4, {
            SwitchCase: 1,
        }],
        'max-len': [2, { code: 1000, ignoreUrls: true }],
        radix: ['error', 'as-needed'],
        'object-shorthand': ['error', 'methods'],
        'no-unused-expressions': ['error', {
            allowShortCircuit: true,
        }],
        'import/no-unresolved': 0,
        'import/prefer-default-export': 0,
        'import/no-dynamic-require': 0,
        'object-curly-newline': 0,
        'consistent-return': 0,
        'no-unused-vars': 1,
        'class-methods-use-this': 0,
        'import/no-extraneous-dependencies': 0,
        'no-restricted-syntax': 0,
        'no-param-reassign': 0,
        'no-return-await': 0,
        'no-use-before-define': 0,
        'no-await-in-loop': 0,
        'no-continue': 0,
        'no-plusplus': 0,
        'no-bitwise': 0,
        'padding-line-between-statements': [
            'warn',
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: 'block-like', next: '*' },
            { blankLine: 'always', prev: 'block', next: '*' },
            { blankLine: 'always', prev: 'function', next: '*' },
        ],
        'no-nested-ternary': 0,
    },
};
