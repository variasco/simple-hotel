import HTMLWebpackPlugin from "html-webpack-plugin";
import { Chunk, ProgressPlugin, webpack, WebpackPluginInstance } from "webpack";
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
      chunkFilename: "css/[name].[contenthash:8].css"
    }),
  ];
}
