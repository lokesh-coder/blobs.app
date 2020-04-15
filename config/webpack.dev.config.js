const webpackBaseConfig = require('./webpack.base.config');
const paths = require('./paths');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    ...webpackBaseConfig({ plugins: [] }),
    devServer: {
        contentBase: paths.output,
        port: 9000,
        hot: true,
    }
};
