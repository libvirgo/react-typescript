const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.base.js');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    output: {
        filename: 'js/[name].[hash:8].bundle.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        open: true,
        port: 3000,
        compress: true,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            inject: 'body',
            hash: false
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader?modules', 'postcss-loader']
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    'style-loader',
                    'css-loader?modules',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    }
});