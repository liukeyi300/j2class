/**
 * Created by liukeyi on 2017/11/7.
 */
const path = require('path');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            include: path.resolve(__dirname, 'src')
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', 'js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'lib')
    }
};