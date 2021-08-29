const path = require("path");
const webpack = require("webpack");

/** @type {webpack.Configuration} */
const config = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "output"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "output"),
    },
    compress: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "esbuild-loader",
        options: {
          loader: "jsx", // Remove this if you're not using JSX
          target: "es2015", // Syntax to compile to (see options below for possible values)
        },
      },
      {
        test: /\.ts(x)?$/,
        loader: "esbuild-loader",
        options: {
          loader: "tsx",
          target: "es2015",
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: "base64-inline-loader?limit=1000&name=[name].[ext]",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

module.exports = config;
