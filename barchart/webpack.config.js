const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  mode: "development",
  devServer: {
    port: 3001,
    open: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'barchartA',
      filename: 'remoteEntry.js',
      exposes: {
        "./BarchartIndex": "./src/index"
      }
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
};

