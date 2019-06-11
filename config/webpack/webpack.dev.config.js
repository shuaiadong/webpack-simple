const utils = require('./utils');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function htmlPlugins (entry = {}) {
    return Object.keys(entry).map(item => {
        return new HtmlWebpackPlugin({
            filename: `pages/${item}.html`, // todo name ?
            chunks: [item],
            template: entry.template || path.resolve(__dirname, '../../template/index.html') //#todo 统一配置默认模版
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
        ...htmlPlugins(entry),
        new webpack.HotModuleReplacementPlugin()
    ],
    
    output: {
        filename: 'js/[name].dev.js',
        chunkFilename: 'js/[name].chunk.js',
        path: path.resolve(__dirname, '../../dist/'),
        publicPath: '/'
    }
 });
}