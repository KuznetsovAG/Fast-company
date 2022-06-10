module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    rules: {
        indent: ["error", 4],
        semi: [2, "always"],
        "multiline-ternary": 0,
        "space-before-function-paren": [
            "error",
            { anonymous: "always", named: "never" }
        ],
        quotes: ["error", "double", { allowTemplateLiterals: true }]
    },
    plugins: ["react"],
    extends: [
        "plugin:react/recommended",
        "standard",
    ]
};
