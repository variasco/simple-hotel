import HTMLWebpackPlugin from "html-webpack-plugin";
import { Chunk, DefinePlugin, ProgressPlugin, webpack, WebpackPluginInstance } from "webpack";
import { WebpackOptions } from "./types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function webpackPlugins(options: WebpackOptions): WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: options.paths.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(options.isDev),
      __API__: JSON.stringify(options.apiUrl),
    }),
  ];
}
