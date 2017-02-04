var webpack = require('webpack');
var path = require('path');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  contentBase: path.resolve('./public'),
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3030, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3030/');
});
