const CopyWebpackPlugin = require('copy-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const pathNpm = require('path');

module.exports = {

  webpack: (config: any, { buildId, dev, isServer, defaultLoaders, webpack }: any) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    // config.node = {
    //   fs: 'empty'
    // }
    // Example using webpack option
    // config.entry = './pages/index.js',
    // config.output = {
    //   filename: 'bundle.js'
    // }
    config.plugins.push(
      new CopyWebpackPlugin([{
        context: './static',
        from: '*.*'
      }])
    );
    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        staticFileGlobs: [
          pathNpm.join(pathNpm.resolve(__dirname, './next'), '**/*')
        ],
        logger: function () {},
        filename: 'sw.js',
      })
    );

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

    return config;
  },
}

module.exports = {
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static'
  }
}
