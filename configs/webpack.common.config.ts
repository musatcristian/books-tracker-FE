import { Configuration } from 'webpack';
import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const common: Configuration = {
  context: resolve(__dirname, '../src'),
  entry: {
    main: './index.tsx',
  },
  module: {
    rules: [
      {
        test: /\.ts$|tsx$/,
        use: 'ts-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../static/templates/index.html'),
      title: 'Books tracker',
      scriptLoading: 'defer',
      favicon: resolve(__dirname, '../static/images/favicon.ico'),
    }),
  ],
  resolve: {
    alias: {
      '@App': resolve(__dirname, '../src/app'),
      '@Components': resolve(__dirname, '../src/components'),
      '@Theming': resolve(__dirname, '../src/material'),
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
};
