const fs = require('fs');
const path = require('path');

/**
 * 
 * @param {*} data 模版
 * @param {*} open flag
 */
function entryTemplate (data, open = false) {
    if (!open) {
        return `document.body.innerHTML = '<h1>尚未打开</h1>'`;
    }
    return Object.keys(data).map(entry => {
        return `require('${data[entry]}');`
    }) + `
    // 模块热更新
    if(module.hot){
        module.hot.accept();
    }
    `
}
module.exports = {
/**
 * entrys  = { index : {entry: [] } }
 */
initEntrys (entrys = {}) {
    let entry = {

    };
    Object.keys(entrys).forEach(key => {
        entry[key] = {
            entry: [
                // 热更新
                'react-hot-loader/patch',
                'webpack-hot-middleware/client',
                this.writeFIle({
                    entry: key,
                    data: entryTemplate(entrys[key].entry, entrys.open),
                })
            ],
            indexEntry: entrys[key].entry,
            open: entrys.open || false
    }
    });
    return entry;

},
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
    const fileName = path.join(__dirname, '../entrys/', `${entry}.js`);
    const templateStr = data;
    // # todo 报错处理
    fs.writeFileSync(
        fileName,
        templateStr
        );
    return fileName
},


 

/**
 * 动态打开、关闭 entry
 * @param {*} entry string 
 * @param {*} data {}
 * @param {*} open bool
 */
toggle(entry, data, open = false) {
    this.writeFIle({
            entry,
            data: entryTemplate(data, open)
    })
}
}
