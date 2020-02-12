// Work around for https://github.com/angular/angular-cli/issues/7200

const CompressionPlugin = require('compression-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const glob = require('glob');
const path = require('path');
const webpack = require('webpack');

const PATHS = {
  src: path.join(__dirname, 'src'),
};

module.exports = {
  entry: {
    server: './server.ts',
  },
  externals: [/node_modules/],
  mode: 'none',
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' },
      {
        parser: { system: true },
        test: /(\\|\/)@angular(\\|\/)core(\\|\/).+\.js$/,
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      // fixes WARNING Critical dependency: the request of a dependency is an expression
      /(.+)?angular(\\|\/)core(.+)?/,
      path.join(__dirname, 'src'), // location of your src
      {}, // a map of your routes
    ),
    new webpack.ContextReplacementPlugin(
      // fixes WARNING Critical dependency: the request of a dependency is an expression
      /(.+)?express(\\|\/)(.+)?/,
      path.join(__dirname, 'src'),
      {},
    ),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      files: ['src/scss/**/*.scss', 'src/app/**/*.scss'],
      fix: true,
    }),
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      filename: '[path].gz[query]',
      minRatio: 0.8,
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
    }),
    new CompressionPlugin({
      algorithm: 'brotliCompress',
      compressionOptions: { level: 11 },
      filename: '[path].br[query]',
      minRatio: 0.8,
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
    }),
  ],
  resolve: { extensions: ['.ts', '.mjs', '.js'] },
  target: 'node',
};
