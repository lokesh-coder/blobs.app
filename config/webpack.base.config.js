const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const paths = require("./paths");

module.exports = function ({ plugins }) {
  return {
    entry: {
      index: paths.entry,
    },
    output: {
      path: paths.output,
      filename: "[name].bundle.js",
    },
    module: {
      rules: [
        {
          test: /(.js|.jsx)/,
          exclude: /(node_modules|bower_components)/,
          use: "babel-loader",
        },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      ...plugins,
      new HtmlWebpackPlugin({
        template: paths.template,
        hash: true,
        title: "Blobs for web and flutter",
      }),
      new MiniCssExtractPlugin({
        filename: "[name].[hash].css",
        chunkFilename: "[id].[hash].css",
      }),
      new CopyPlugin({
        patterns: [{ from: "src/assets/favicons", to: "favicons" }],
      }),
    ],
    resolve: {
      extensions: [".js", ".jsx", ".scss", ".css"],
      alias: {
        components: paths.components,
        assets: paths.assets,
      },
    },
  };
};
