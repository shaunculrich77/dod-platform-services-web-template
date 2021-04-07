module.exports = {
    extends: [
        'plugin:vue/strongly-recommended',
        'airbnb-base',
        'prettier',
        // 'plugin:jest/recommended',
        // 'plugin:jest/style',
    ],
    plugins: ['prettier'],
    settings: {
        'import/resolver': {
            webpack: {
                config: '../webapp/webpack.config.js',
            },
        },
    },
    rules: {
        'prettier/prettier': 'error',
        'no-console': 'warn',
        // Turn off no-shadow and no-param-reassign for Vuex state
        'no-shadow': [
            'error',
            {
                allow: ['state'],
            },
        ],
        'no-param-reassign': [
            'error',
            {
                props: true,
                ignorePropertyModificationsFor: ['state'],
            },
        ],
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'always',
                    normal: 'never',
                },
            },
        ],
        'vue/max-attributes-per-line': 'off',
    },
};
