const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  mode: 'development',
  devServer: {
    open: true,
    port: 3002
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'linechartA',
      filename: 'remoteEntry.js',
      exposes: {
        "./LinechartIndex": "./src/index"
      }
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ]
}