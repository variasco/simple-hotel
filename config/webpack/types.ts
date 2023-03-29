export interface WebpackOptions {
  mode: WebpackMode;
  paths: WebpackPaths;
  port: number;
  isDev: boolean;
  apiUrl: string;
}

export interface WebpackPaths {
  entry: string;
  build: string;
  src: string;
  html: string;
}

export type WebpackMode = "development" | "production";

export interface WebpackEnv {
  mode: WebpackMode;
  port: number;
  apiUrl: string;
}
