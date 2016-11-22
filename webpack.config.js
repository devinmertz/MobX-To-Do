// import HTMLWebpackPlugin from "html-webpack-plugin";
// import path from "path";
// import webpack from "webpack";
var HTMLWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

let HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + "/app/index.html",
    filename: "index.html",
    inject: "body"
});


module.exports = {
    entry: ["./app/index.js"],
    output: {
        path: path.join(__dirname + "dist"),
        filename: "index.bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
    plugins: [HTMLWebpackPluginConfig]
};