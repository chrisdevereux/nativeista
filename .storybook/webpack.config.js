module.exports = (baseConfig, env, config) => {
  config.module.rules = [
    {
      test: /\.(ts|tsx)$/,
      loaders: [require.resolve('babel-loader'), require.resolve('ts-loader')],
    },

    {
      test: /\.svg$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: ['babel-preset-react'],
          },
        },
        {
          loader: require.resolve('react-svg-loader'),
          options: {
            jsx: true, // true outputs JSX tags
          },
        },
      ],
    },
  ]

  config.resolve.extensions.push('.ts', '.tsx')
  config.resolve.alias = {
    ...(config.resolve && config.resolve.alias),
    'react-native': 'react-native-web',
  }

  return config
}
