const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/ReactWasmBridge.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ReactWasmBridge',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};
