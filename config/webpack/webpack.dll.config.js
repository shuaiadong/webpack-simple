const path = require('path');
const config = require('../config');

const Webpack = require('webpack');
const assetsWebpackPlugin = require('assets-webpack-plugin');
const merge = require('webpack-merge');

const CleanWebpackPlugin = require('clean-webpack-plugin');

const dllDev = {
    mode: 'development',
    entry: config.dllEntry,
    devtool: 'cheap-module-eval-source-map',

    output: {
        filename: '[name].dll.js',
        path: config.devDllPath,
        library: '[name]'
    },

    plugins: [
        new CleanWebpackPlugin(),
        new Webpack.DllPlugin({
            // context: config.devDllContent,
            name: '[name]',
            path: path.join(config.devDllPath, '/[name]-manifest.json')
        }),
        new assetsWebpackPlugin({
            path: config.devDllPath,
            filename: 'vendor-config.json'
        })
    ]
}
const dllProd = {
    mode: 'production',
    entry: config.dllEntry,
    devtool: 'source-map', // 只有在打开控制台时才开启

    output: {
        filename: '[name].[chunkhash:5].dll.js',
        path: config.prodDllPath,
        library: '[name]'
    },

    // optimization: {  // 并没有太大优化 228.515 -> 228.269 字节
    //     minimizer: [
    //         new UglifyjsWebpackPlugin({
    //             uglifyOptions: {
    //                 ecma: 6,
    //                 cache: true,
    //                 parallel: true, // 并行

    //             }
    //         })
    //     ]
    // },

    plugins: [
        new CleanWebpackPlugin(),
        new Webpack.DllPlugin({
            // context: config.devDllContent,
            name: '[name]',
            path: path.join(config.prodDllPath, '/[name]-manifest.json')
        }),
        new assetsWebpackPlugin({
            path: config.prodDllPath,
            filename: 'vendor-config.json'
        })
        
    ]
}



Promise.all([
    dllHelpPromise(dllDev), 
    dllHelpPromise(dllProd)
])
.then(res => console.log(res, `              👌  dll 成功      👌`))
.catch(err => console.log(err, `     🙅‍  ${err}  dll ‍‍失败      🙅‍`))





function dllHelpPromise(config) {
    return new Promise((res, rej) => {
        Webpack(config).run((err) => {
            !!err
                ? rej(err, config.mode + '🙅‍   dll 失败      🙅‍')
                : res(err, config.mode + '🙅‍   dll ‍‍成功      🙅‍');
        })
    })
}

