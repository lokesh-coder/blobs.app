const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

module.exports = {
    mode: 'production',
    entry: {
        index: paths.entry
    },
    devtool: 'cheap-source-map',
    output: {
        path: paths.output,
        filename: '[name].bundle.js'
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
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: paths.template,
            hash: true,
            title: 'Boilerplate',
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            defaultSizes: 'gzip'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css'
        })
    ],
    resolve: {
        extensions: ['.js', 'jsx', '.scss', '.css']
    },
}