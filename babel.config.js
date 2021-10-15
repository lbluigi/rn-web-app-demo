module.exports = (api) => {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          alias: {
            components: './src/components',
            hooks: './src/hooks',
          },
        },
      ],
    ],
  }
}
