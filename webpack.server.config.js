const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const glob = require('glob');
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;
const ClosureCompilerPlugin = require('closure-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
};

module.exports = {
  entry: './server.ts',
  externals: [/node_modules/],
  mode: 'production',
  module: {
    rules: [
      { test: /\.ts$/, loader: 'tsickle-loader' },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        // Mark files inside `@angular/core` as using SystemJS style dynamic imports.
        // Removing this will cause deprecation warnings to appear.
        parser: { system: true },
        test: /(\\|\/)@angular(\\|\/)core(\\|\/).+\.js$/,
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
      new OptimizeCSSAssetsPlugin({}),
      new ClosureCompilerPlugin({
        mode: 'STANDARD',
        childCompilations: true,
        platform: 'native'
      }, {
       
        languageOut: 'ECMASCRIPT5',
        compilation_level: 'ADVANCED',
        formatting: 'PRETTY_PRINT',
        debug: true,
        renaming: true,
      })
    ],
    usedExports: true,
    splitChunks: {
      minSize: 0
    },
    concatenateModules: true
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin(),
    new HTMLInlineCSSWebpackPlugin(),
    new webpack.ContextReplacementPlugin(
      // fixes WARNING Critical dependency: the request of a dependency is an expression
      /(.+)?angular(\\|\/)core(.+)?/,
      path.join(__dirname, 'src'), // location of your src
      {} // a map of your routes
    ),
    new webpack.ContextReplacementPlugin(
      // fixes WARNING Critical dependency: the request of a dependency is an expression
      /(.+)?express(\\|\/)(.+)?/,
      path.join(__dirname, 'src'),
      {}
    ),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      files: ['src/app/**/*.css'],
      fix: true,
    }),
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    }),
    new CompressionPlugin({
      algorithm: 'brotliCompress',
      compressionOptions: { level: 11 },
      filename: '[path].br[query]',
      minRatio: 0.8,
      test: /\.(js|css|html|svg)$/,
      threshold: 1024,
    }),
    new WebpackNotifierPlugin({
      alwaysNotify: true,
      title: 'App Name'
    }),
  ],
  resolve: { alias: { src: path.join(__dirname, 'src'), }, extensions: ['.ts', '.mjs', '.js'] },
  target: 'node',
};