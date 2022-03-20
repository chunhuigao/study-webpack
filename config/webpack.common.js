const path = require("path")
const golb = require("glob")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const WebpackBar = require("webpackbar")
const TersetWebpackPlugin = require("terser-webpack-plugin")
const MiniCssPlugin = require("mini-css-extract-plugin")
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin")
const PurgecssWebpackPlugin = require("purgecss-webpack-plugin")

module.exports = {
  entry: {
    index: path.join(__dirname, "../src/index.js"),
  },
  output: {
    filename: "[name].[chunkhash:4].js",
    path: path.join(__dirname, "../dist"),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../index.html"),
      filename: "index.html",
    }),
    new WebpackBar(),
    new MiniCssPlugin(),
    new CssMinimizerWebpackPlugin(),
    new PurgecssWebpackPlugin({
      paths: golb.sync(
        `${path.join(__dirname, "../src/")}/**/*.{css,jsx,js,tsx,less,scss}`,
        { nodir: true }
      ),
      whitelist: ["html", "body"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: "babel-loader",
      },
      {
        test: /\.(css)$/,
        use: [MiniCssPlugin.loader, "css-loader"],
      },
      {
        test: /\.(less)$/,
        use: [
          MiniCssPlugin.loader,
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
        use: [MiniCssPlugin.loader, "css-loader", "sass-loader"],
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
