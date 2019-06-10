const entry = require('../entry');
const devConfig = require('./webpack.dev.config');
module.exports = function () {
    return devConfig(entry);
}