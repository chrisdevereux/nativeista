module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('ts-loader'),
  })

  config.resolve.extensions.push('.ts', '.tsx')
  config.resolve.alias = {
    ...(config.resolve && config.resolve.alias),
    'react-native': 'react-native-web',
  }

  return config
}
