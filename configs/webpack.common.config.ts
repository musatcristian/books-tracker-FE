import { Configuration } from 'webpack';
import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WorkboxPlugin from 'workbox-webpack-plugin';

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
    new WorkboxPlugin.InjectManifest({
      swSrc: resolve(__dirname, '../src/service-worker.ts'),
      swDest: 'service-worker.js',
      exclude: [/service-worker\.ts$/],
      maximumFileSizeToCacheInBytes: 10000000,
    }),
  ],
  resolve: {
    alias: {
      '@App': resolve(__dirname, '../src/app'),
      '@Components': resolve(__dirname, '../src/components'),
      '@Theming': resolve(__dirname, '../src/material'),
      '@GraphQL': resolve(__dirname, '../src/graphql'),
      '@Contexts': resolve(__dirname, '../src/contexts'),
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
};
