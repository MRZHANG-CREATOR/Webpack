const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
const WebpackDevMiddleware = require("webpack-dev-middleware");
const  webpack  = require("webpack");
module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve("./dist/"),
    filename: "bundle.js",
    publicPath: "/",
  },
  mode:'development',
  // mode: "production",
  devServer: {
    contentBase: "./src",
    port: 5000,
    compress: true,
    hot: true,
    open: true,
  },
  // exclude:/node_modules/,
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from:path.join(__dirname,'basal','src','assets'),
          to:'assets'
        },
      ],
    }),
    new webpack.BannerPlugin('author:ZPP')
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.s(a|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|bmp)$/,
        use: {
            loader:'url-loader',
            options:{
                limit:5*1024,
                outputPath:'images',// 
                name:'[name]-[hash:4].[ext]'
            }
        },
      },
      {
        test: /\.(woff|woff2|eot|svg|ttf)$/,
        use: {
            loader:'url-loader',
            options:{
                limit:5*1024,
                outputPath:'fonts',// 

            }
        },
      },{
        test:/\.js$/,
        use:{
          loader:'babel-loader',
          // options:{
          //   presets:['@babel/preset-env'],
          //   plugins: ["@babel/plugin-transform-runtime"]
          // }
        }
      }
    ],
  },
};
