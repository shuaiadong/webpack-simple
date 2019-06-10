const path = require('path');
const fs = require('fs');
const config = require('./config');
const moment = require('moment');


function loadGenerators (npath, plop) {
    const currentPath = path.resolve('.');
        const extraData = {
            currentPath,
            today: moment().format('YYYY-MM-DD'),
            userName: config.userName,
            // ...basicGlobalConfig,
            // ...globalConfig
        };

    const files = fs.readdirSync(npath);

    files.forEach(file => {
        const generatorPlopFile = path.resolve(npath, file, 'plop.js');
        if (fs.existsSync(generatorPlopFile)) {
            try {
                require(generatorPlopFile)(plop, extraData);
            }
            catch (ex) {
                console.error('遇到错误', ex);
                console.error('路径为 : ', generatorPlopFile);
            }
        }
    })
}


module.exports = function (plop) {
                                          // plop 文件存放的位置
    loadGenerators(path.resolve(__dirname, config.plopItems), plop)
}