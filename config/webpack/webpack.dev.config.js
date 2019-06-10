const utils = require('./utils');
const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function htmlPlugins (entry = {}) {
    return Object.keys(entry).map(item => {
        return new HtmlWebpackPlugin({
            filename: 'pages/[name].html',
            chunks: [item],
        })
    })
}


module.exports = function (entrys = {}) {
    // todo entrys = {} || []; 单一配置 and 配置
    let entry = {};
    Object.keys(entrys).forEach(key => {
        entry[key] = entrys[key].entry
    });
 return merge(base(), {

    mode: 'development',
    
    entry,
    
    plugins:[
        ...htmlPlugins(entry)
    ],
    
    output: {
        filename: 'js/[name].dev.js',
        chunkFilename: '[name].chunk.js',
        path: path.resolve(__dirname, '../../dist/')
    }
 });
}