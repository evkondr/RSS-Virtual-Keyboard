const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname + "/public"),
        filename: "bundle.js",
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true,
    },
    module: {
        rules: [
        {   
          test: /\.(scss|css)$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'resolve-url-loader',{
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }}],
        },
        {
            test: /\.html$/,
            loader: "html-loader"
        },
        {
            test: /\.(png|jpg|gif)$/i,
            type: 'asset/resource'
          }
      ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),
        new HtmlWebpackPlugin({
            filename: "pages/pets.html",
            template: "./src/pages/pets.html",
        }),
    ],
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
      },
  };