const path = require('path');

const paths = {
    entry: path.resolve(__dirname, '../index'),
    output: path.resolve(__dirname, '../build'),
    template: path.resolve(__dirname, './template.html')
};


module.exports = paths;
