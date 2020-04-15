const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const webpackBaseConfig = require('./webpack.base.config');

module.exports = {
    mode: 'production',
    devtool: 'cheap-source-map',
    ...webpackBaseConfig({
        plugins: [
            new CleanWebpackPlugin(),
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                defaultSizes: 'gzip'
            }),
        ]
    }),
};
