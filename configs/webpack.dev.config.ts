/* eslint-disable import/no-extraneous-dependencies */
import { Configuration, SourceMapDevToolPlugin } from 'webpack';
import { merge } from 'webpack-merge';
import { resolve } from 'path';

import { common } from './webpack.common.config';

const devOptions: any = {
  devServer: {
    contentBase: false,
    compress: false,
    port: 3000,
    bonjour: false,
  },
};

const config: Configuration = merge<Configuration>(common, {
  mode: 'development',
  devtool: false,
  plugins: [
    new SourceMapDevToolPlugin({
      test: /\.(js|jsx)$/,
      filename: '[name].js.map',
      exclude: /node_modules/,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      '@App': resolve(__dirname, '../src/app'),
      '@Components': resolve(__dirname, '../src/components'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  ...devOptions,
});

export default config;
