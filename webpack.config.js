module.exports = {
  entry: './src/script1.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exculde: /\node_modules/,
        loader: 'babel-loader',
        query: {
          presets : ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  }
}
