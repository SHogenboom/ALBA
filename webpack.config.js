// SOURCES
// NetNinja Webpack & Typescript Tutorial: https://www.youtube.com/watch?v=sOUhEJeJ-kI&list=PL4cUxeGkcC9hOkGbwzgYFmaxB0WiduYJC
// NetNinja Webpack & Typescript Github: https://github.com/iamshaunjp/webpack-and-typescript
// miltoncandelero pixi-hotwire: https://github.com/miltoncandelero/pixi-hotwire

// LOAD MODULES/PLUGINS
const webpack = require("webpack");
const path = require("path"); // converting relative to absolute filepaths
const CopyPlugin = require("copy-webpack-plugin"); // copy assets / external folders to public output
const HtmlWebpackPlugin = require("html-webpack-plugin"); // create HTML files from templates
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // create separate CSS files - not in bundle

// WEBPACK SETTINGS
module.exports = (env, argv) => {
  return {
    // COMPILATION: ENTRY POINT
    // First file to look at/compile (relative to webpack.config.js).
    // Other dependent files will also be compiled if linked to index.ts
    entry: "./src/game.js",
    // COMPILATION: MODE
    mode: "development",
    // COMPILATION: TERMINAL OUTPUT
    // Keep console output easy to read.
    stats: "minimal",
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
    devtool: argv.mode === "development" ? "eval-source-map" : undefined,

    module: {
      rules: [
        // CSS Styling
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        // Images
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        // Fonts
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
      ],
    },
    // Resolve issues when wanting to use multiple src files - with import statements that have relative paths
    resolve: {
      extensions: [".js"],
    },
    // PLUGINS
    plugins: [
      // Copy our static assets to the final build
      new CopyPlugin({
        patterns: [{ from: "assets/" }],
      }),
      // Make an index.html from the .ejs template
      new HtmlWebpackPlugin({
        template: "src/index.ejs", // Set title, basic styling etc in template
        hash: true,
        minify: false,
        inject: "body",
      }),
      // Add CSS files
      new MiniCssExtractPlugin({}),
    ],
    // OUTPUT
    output: {
      // Name of the javascript output file in the public folder
      filename: "bundle.js",
      // Create an absolute filepath from the current directory to the output directory
      path: path.resolve(__dirname, "dist"),
      // Clean files that aren't used anymore from the dist folder
      clean: true,
    },
  };
};
