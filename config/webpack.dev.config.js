const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const paths = require('./paths');

module.exports = {
    mode: 'development',
    entry: {
        index: paths.entry
    },
    devtool: 'eval-source-map',
    output: {
        path: paths.output,
        filename: '[name].bundle.js',
        pathinfo: false,
    },
    module: {
        rules: [
            {
                test: /(.js|.jsx)/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader',
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: paths.template,
            hash: true,
            title: 'Boilerplate',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],
    resolve: {
        extensions: ['.js', 'jsx', '.scss', '.css']
    },
    devServer: {
        contentBase: paths.output,
        port: 9000,
        hot: true,
    }
}