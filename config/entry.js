const path = require('path');

function p(paths) {
    return path.join(__dirname, paths);
};

module.exports = {
    test: {
        entry: [p('../src/modules/TestModule/index.js')]
    },
    'ui-demo': {
        entry: [p('../src/modules/Ui-demoModule/index.js')]
    }
}