module.exports = {
  presets: [
    ['@babel/preset-env', {
      useBuiltIns: 'entry',
      corejs: 3,
      targets: {
        browsers: ['last 2 versions', 'ie >= 11']
      }
    }],
    ['@babel/preset-react', {
      runtime: 'automatic'
    }],
    '@babel/preset-typescript'
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    ['module-resolver', {
      alias: {
        '@': './src'
      }
    }]
  ],
  env: {
    development: {
      plugins: ['react-refresh/babel']
    },
    production: {
      plugins: [
        ['transform-remove-console', {
          exclude: ['error', 'warn']
        }]
      ]
    }
  }
};
