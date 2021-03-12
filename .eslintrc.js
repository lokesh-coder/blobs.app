module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'react-app'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.scss', '.css'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  globals: {
    __PATH_PREFIX__: true,
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': [0],
    'react/jsx-props-no-spreading': [0],
    'object-curly-newline': 'off',
  },
};
