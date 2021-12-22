module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:import/errors',
    'plugin:import/warnings',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [ '@typescript-eslint', 'import', 'react', 'react-hooks', 'html', ],
  rules: {
    // 일반 규칙
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'no-unexpected-multiline': 'off',
    'no-use-before-define': 'off',
    'spaced-comment': 'off',
    'no-param-reassign': 'off',
    'eol-last': [ 'warn', 'always', ],
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'array-callback-return': 'off',
    'consistent-return': 'off',
    'no-nested-ternary': 'off',
    quotes: [ 'warn', 'single', { allowTemplateLiterals: true, }, ],
    semi: [ 'error', 'always', ],
    'array-bracket-spacing': [
      'warn',
      'always',
      {
        arraysInArrays: true,
        singleValue: true,
        objectsInArrays: true,
      },
    ],
    'object-curly-spacing': [ 'warn', 'always', ],
    'no-shadow': 'off',
    indent: 'off',
    'comma-dangle': [ 'warn', {
      arrays: 'always',
      functions: 'never',
      objects: 'always',
      imports: 'never',
      exports: 'never',
    }, ],
    'jsx-quotes': [ 'error', 'prefer-single', ],
    'linebreak-style': 'off',
    'prefer-const': 'off',
    'max-len': 'off',
    'no-else-return': 'off',
    'global-require': 'off',
    'class-methods-use-this': 'off',
    'no-useless-constructor': 'off',
    'no-useless-return': 'off',
    'lines-between-class-members': 'off',

    // 임포트 규칙
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/no-dynamic-require': 'off',
    'import/prefer-default-export': 'off',

    // 리액트 규칙
    'react/jsx-props-no-spreading': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': [ 'error', {
      extensions: [ 'js', 'jsx', '.ts', '.tsx', ],
    }, ],
    'react/no-danger': 'off',
    'react/jsx-curly-brace-presence': [
      'warn',
      { props: 'never', children: 'never', },
    ],
    'react/require-default-props': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/no-arrow-function-lifecycle': 'off',
    'react/no-invalid-html-attribute': 'off',
    'react/no-unused-class-component-methods': 'off',
    'react/button-has-type': 'off',

    // 리액트 훅스 규칙
    'react-hooks/exhaustive-deps': 'off',

    // jsx 규칙
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: [ 'Link', ],
        specialLink: [ 'hrefLeft', 'hrefRight', ],
        aspects: [ 'invalidHref', 'preferButton', ],
      },
    ],
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',

    // 타입스크립트 규칙
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/indent': [ 'warn', 2, {
      SwitchCase: 1,
      FunctionExpression: {
        parameters: 0,
      },
    }, ],
  },
};
