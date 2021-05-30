import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import { common } from './webpack.common.config';

const devOptions = {
  devServer: {
    contentBase: false,
    compress: false,
    port: 3000,
    bonjour: false,
  },
};

const config: Configuration = merge<Configuration>(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  ...devOptions,
});

export default config;
