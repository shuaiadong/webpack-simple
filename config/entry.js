const path = require('path');

function p(paths) {
    return path.join(__dirname, paths);
};

module.exports = {
    index: {
        entry: [p('../src/modules/index.js')],
    }
}