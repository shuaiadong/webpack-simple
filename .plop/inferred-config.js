/**
 * 
 * @file 入口判断
 * 
 */
const path = require('path');
const config = require('./config');

/**
 * 检测用没有设置用户名
 */
function throwUsernameError () {
    throw new Error(['请设置usename',
    '配置文件在',
    path.resolve(__dirname, './config.js')
    ].join('\n'));
}
if(config.userName) {
    module.exports = config;
} else {
    throwUsernameError();
}