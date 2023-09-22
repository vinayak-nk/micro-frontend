const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  mode: 'development',
  devServer: {
    open: true,
    port: 3000
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        barchartX: 'barchartA@http://localhost:3001/remoteEntry.js',
        linechartX: 'linechartA@http://localhost:3002/remoteEntry.js'
      }
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
}