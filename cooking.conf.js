var path = require('path')
var cooking = require('cooking')
var build = require('./build')

cooking.set({
  entry: build.entries(),
  dist: './dist',
  template: build.templates(),
  devServer: {
    port: 8081,
    publicPath: '/',
  },
  clean: true,
  hash: true,
  sourceMap: true,
  chunk: true,
  publicPath: '/dist/',
  extractCSS: true,
  alias: {
    'src': path.join(__dirname, 'src'),
    'components':path.join(__dirname,'src/components'),
    'assets':path.join(__dirname,'src/assets')
  },
  extends: ['react', 'lint','babel', 'autoprefixer'],
  // externals:build.externals()
})

cooking.add('loader.jsx', {
  test: /\.jsx$/,
  loaders: ['babel-loader']
});

cooking.add('loader.less', {
  test: /\.less$/,
  loaders: ['less-loader']
});

cooking.add('loader.json', {
  test: /\.json$/,
  loaders: ['json-loader']
});

module.exports = cooking.resolve()
