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
    }),
  ],
};
