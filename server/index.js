const path = require('path');
const serverConfig = require('./config');
const confing = require('../config/entry');
const _utils = require('./utils')
const devConfig = require('../config/webpack/webpack.dev.config')
/**
 * @file 后端
 */
const express = require('express');
const Webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');

const app = express();
console.log(devConfig(confing), 'devConfig(confing)')

// const compilter = Webpack(devConfig);
// app.use(WebpackDevMiddleware(compilter));
// app.use(hotMiddleware(compilter));

let devEntry = {};

// /**
//  * 动态开启module模块
//  */
// app.all('/_toggle', (res, rej) => {
//     console.log(res, 'res')
//     console.log(rej, 'rej')
//     Object.keys(entry => _utils.toggle(entry, open));
// });

// app.listen(serverConfig.port, ()=> {
//     console.log(`${serverConfig.port}启动成功`)
// });
