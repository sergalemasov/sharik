const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    mode: 'development',

    context: path.join(__dirname, 'src'),

    entry: {
        main: './scripts/main',
        styles: './styles/main.scss'
    },

    output: {
        path: path.join(__dirname, "built"),
        filename: '[name].js'
    },

    module: {
        rules: [{
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"]
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Test',
            hash: true,
            template: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        hot: true
    },

    devtool: 'sourcemap'
};