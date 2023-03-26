import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { WebpackOptions } from "./types";

export function webpackLoaders(options: WebpackOptions): RuleSetRule[] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: "/node_modules/",
  };

  const cssLoader = {
    test: /\.s?[ac]ss$/i,
    use: [
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            localIdentName: options.isDev ? "[name]_[local]-[hash:base64:5]" : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ["@svgr/webpack"],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    type: "asset/resource",
  };

  return [tsLoader, cssLoader, svgLoader, fileLoader];
}
