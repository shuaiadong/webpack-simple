const fs = require('fs');
const path = require('path');

/**
 * 
 * @param {*} data 模版
 * @param {*} open flag
 */
function entryTemplate (data, open) {
    if (!open) {
        return `document.body.innerHTML = '<h1>尚未打开<h1>'`;
    }
    return Object.keys(data).map(entry => {
        return `require(${entry});`
    }) + `
    // 模块热更新
    if(module.hot){
        module.hot.accept();
    }
    `
}
module.exports = {
/**
 * 写文件
 * @params
 *  - entry  文件的名称
 *  - data   写入的数据
 */
 writeFIle({
    entry = '',
    dirName = '',
    data = 'heelo word!'
} = {}) {
    const fileName = path.join(__dirname, dirName, entry);
    const templateStr = JSON.stringify(data);

    fs.writeFileSync(
        path.join(__dirname, entry),
        templateStr
        );
},

/**
 * 动态打开、关闭 entry
 * @param {*} entry string 
 * @param {*} data {}
 * @param {*} open bool
 */
toggle(entry, data, open = false) {
    this.writeFIle(entry, entryTemplate(data, open))
}
}
