module.exports = {
  env: {
    test: {
      presets: [
        [
          'next/babel',
          {
            'preset-env': {
              modules: 'commonjs'
            }
          }
        ]
      ],
      plugins: ['styled-jsx/babel-test']
    }
  }
};
