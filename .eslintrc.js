module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'eslint-config-prettier',
    'plugin:react-hooks/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'testing-library',
  ],
  rules: {
    "no-use-before-define": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      "warn", {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    ]
  }
}
