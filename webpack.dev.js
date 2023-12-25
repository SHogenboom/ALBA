// WEBPACK SETTINGS
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  // DEVELOPMENT SERVER
  devServer: {
    compress: true,
    static: false,
    client: {
      logging: "warn",
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: true,
    },
    port: 1234,
    host: "0.0.0.0",
  },
  // Web games are bigger than pages, disable the warnings that game is too big.
  performance: { hints: false },
  // Enable sourcemaps while debugging (to easily locate where an error was produced)
  devtool: "inline-source-map",
});
