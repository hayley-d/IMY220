const path = require('path');

module.exports = {
  entry: "./frontend/src/index.js",
  output: {
    //was ./public
    path: path.resolve('frontend', 'public'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  }
};
