// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node: true
  },
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // plugins: [
  //   'vue'
  // ],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    /*
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ],
    }],
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    */

    'linebreak-style': 'off',
    // 'global-require': 'off',
    'no-alert': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: ['error', 'never'],
    // 'comma-dangle': ['error', 'never'],
    indent: ['error', 2],
    quotes: ['error', 'single'], // 문자열따옴표 설정(single / double)
    'vue/html-indent': ['error', 2],
    'max-len': ['error', { code: 400 }],
    'fun-names': 'off',
    // 'prefer-arrow-callback': 'off',
    // 'no-return-await': 'off',
    // 'no-param-reassign': 'off',
    // 'import/no-named-as-default-member': 'off',
    // 'import/named': 'off',
    // 'consistent-return': 'off',
    // 'object-curly-newline': 'off',
    // 'dot-notation': 'off',


    // 'comma-spacing': 'error', // 콤마뒤에 한칸띄어주기 설정
    // 'eol-last': ['error'], // 파일끝에 한줄공백 설정
    // 'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }], // 소스라인 간의 줄공백 최대값 설정
    'no-trailing-spaces': ['error'], // trim에 의해서 제거대상이 되는 공백(소스라인 양끝)에 대한 처리
    // 'prefer-template': ['off'], // `template${~~}` 사용 강제여부 설정
  }
}
