const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

module.exports = {
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static'
  },
  webpack: (config: any) => {
    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        verbose: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [
          {
            handler: 'networkFirst',
            urlPattern: /^https?.*/
          }
        ]
      })
    )
    return config
  }
}
