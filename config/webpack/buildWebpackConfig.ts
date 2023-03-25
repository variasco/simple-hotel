import { Configuration } from "webpack";
import { WebpackOptions } from "./types";
import { webpackDevServer } from "./webpackDevServer";
import { webpackLoaders } from "./webpackLoaders";
import { webpackPlugins } from "./webpackPlugins";
import { webpackResolvers } from "./webpackResolvers";

export function buildWebpackConfig(options: WebpackOptions): Configuration {
  return {
    mode: options.mode,
    entry: options.paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: options.paths.build,
      clean: true,
    },
    module: {
      rules: webpackLoaders(options),
    },
    resolve: webpackResolvers(options),
    plugins: webpackPlugins(options),
    // DEV
    devtool: options.isDev ? "inline-source-map" : undefined,
    devServer: options.isDev ? webpackDevServer(options) : undefined,
  };
}
