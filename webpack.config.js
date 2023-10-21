const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  // entry: './scripts.js',
  devServer: {
    static: {
      directory: path.join(__dirname, ''),
    },
    // devMiddleware: {
    //   publicPath: '/dist/',
    //   writeToDisk: false,
    // },
    compress: true,
    open: true,
    hot: true,
    port: 8080,     // You can specify the port you want to use
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
