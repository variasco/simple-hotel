import { ResolveOptions } from "webpack";
import { WebpackOptions } from "./types";

export function webpackResolvers(options: WebpackOptions): ResolveOptions {
  return {
    extensions: [".tsx", ".js", ".ts"],
    preferAbsolute: true,
    modules: [options.paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {},
  };
}
