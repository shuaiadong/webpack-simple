const path = require('path');
const serverConfig = require('./config');
const confing = require('../config/entry');
const _utils = require('./utils')
const proxy = require('./proxy');
const devConfig = require('../config/webpack/webpack.dev.config')
/**
 * @file 后端
 */
const express = require('express');
const Webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const proxyMiddleware = require('http-proxy-middleware');

const app = express();
let CompileEntry = _utils.initEntrys(confing);
const compilter = Webpack(devConfig(CompileEntry));
app.use(WebpackDevMiddleware(compilter));
app.use(hotMiddleware(compilter));

// 代理
Object.keys(proxy).forEach(element => {
    app.use(proxyMiddleware(element, proxy[element]))
});

// 动态页面配置页面
app.all('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './utils/index.html'))
})

// 请求打开的页面
app.all('/_getEntry', (req, res)=> {
    res.status(200)
    res.json(CompileEntry);
})

// /**
//  * 动态开启module模块
//  */
app.all('/_toggle', (req, res) => {
    let entryName = req.query.entryName;
    let open = !CompileEntry[entryName].open; // 要改变的状态
    // 没有匹配的entry
    if(!entryName) {
        return res.json({status: 'error', msg: `${entryName} Is not defined`})
    }

    _utils.toggle(entryName, CompileEntry[entryName].indexEntry, open)
    
    CompileEntry[entryName].open = open;

    // fs.writeFile(,data,[options],callback)
    res.json(CompileEntry)
});


app.all('/success', (req, res)=> {
    res.json({status:'success'})
})



app.listen(serverConfig.port, ()=> {
    console.log(`${serverConfig.port}启动成功`)
});
