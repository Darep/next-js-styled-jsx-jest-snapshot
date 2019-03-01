module.exports = {
  env: {
    development: {
      presets: ['next/babel']
    },
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
      ]
    }
  }
};
