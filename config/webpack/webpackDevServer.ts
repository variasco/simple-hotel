import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { WebpackOptions } from "./types";

export function webpackDevServer(options: WebpackOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
  };
}
