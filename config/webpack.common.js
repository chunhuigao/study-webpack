const path = require("path")
const glob = require("glob")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const WebpackBar = require("webpackbar")
const TersetWebpackPlugin = require("terser-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin")
const PurgecssWebpackPlugin = require("purgecss-webpack-plugin")
const PATHS = {
  src: path.join(__dirname, "../src"),
}
module.exports = {
  entry: {
    index: path.join(__dirname, "../src/index.js"),
  },
  output: {
    filename: "[name].[chunkhash:4].js",
    path: path.join(__dirname, "../dist"),
  },
  cache: {
    type: "filesystem",
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../index.html"),
      filename: "index.html",
    }),
    new WebpackBar(),
    new MiniCssExtractPlugin(),
    new CssMinimizerWebpackPlugin(),
    // new PurgecssWebpackPlugin({
    //   // paths: golb.sync(`${path.join(__dirname, "../src")}/**`, { nodir: true }),
    //   paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    //   only: ["style"],
    //   //whitelist: ["html", "body"],
    //   // paths: glob.sync(path.join(__dirname, "../index.html")),
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: "babel-loader",
      },
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 102400,
            },
          },
        ],
      },
      {
        test: /\.ott$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new TersetWebpackPlugin({
        extractComments: false,
        minify: TersetWebpackPlugin.esbuildMinify,
        // minify: TersetWebpackPlugin.terserMinify,
      }),
    ],
    splitChunks: {},
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  stats: {
    modules: false,
  },
}
