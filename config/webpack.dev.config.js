const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: paths.template,
            hash: true,
            title: 'Boilerplate',
        }),
    ],
    devServer: {
        contentBase: paths.output,
        port: 9000,
        hot: true,
    }
}