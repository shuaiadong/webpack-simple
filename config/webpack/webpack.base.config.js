const path = require('path');
const configuration = require('../config');

const {rootPath} = configuration;

module.exports = function (config = {}) {

    // 别名
    const resolve = {
        alias: {
            utils:path.resolve(__dirname, rootPath, 'src/utils'),
            src:  path.resolve(__dirname, rootPath, 'src'),
            img:  path.resolve(__dirname, rootPath, 'src/pubilc/img'),
            mobx: path.resolve(__dirname, rootPath, 'node_modules/mobx/lib/mobx.es6.js'),// 体积最小的 ES6 构建
            comps:path.resolve(__dirname, rootPath, 'src/components') 
        }
    };
    const module = {
        rules: [
            // js & jsx
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            // less
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    // postcss自动加前缀 #todo
                    // {

                    // },
                    {
                        loader: 'less-loader'
                    }
                ]
            }
        ],
    };
    const plugins = [
        // new Webpack.DllReferencePlugin({
        //     manifest: require(path.join(config.devDllPath, `${item}-manifest.json`))
        // })
    ];
    return {
        resolve,
        module,
        plugins,
    }
}