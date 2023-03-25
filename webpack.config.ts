import { buildWebpackConfig } from "./config/webpack/buildWebpackConfig";
import { WebpackEnv, WebpackMode } from "./config/webpack/types";
import { WebpackOptions } from "./config/webpack/types";
import { WebpackPaths } from "./config/webpack/types";
import path from "path";

export default (env: WebpackEnv) => {
  const paths: WebpackPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const mode: WebpackMode = env.mode || "development";
  const port = env.port || 3000;

  const isDev = mode === "development";

  const options: WebpackOptions = {
    paths,
    isDev,
    mode,
    port,
  };

  return buildWebpackConfig(options);
};
