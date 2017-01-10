var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './jsx/main.js',
  output: { path: './static/js', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    })],
    resolve: {
        /*alias: {
            'react': 'react-lite',
            'react-dom': 'react-lite'
        }*/
    }
};