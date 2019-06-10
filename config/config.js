const path = require('path');

const config = {
    rootPath: '../',
    // htmlTemplate: 'src/template/index.html',
    devDllPath: path.resolve(__dirname, '../dist/dev-dll/'),
    prodDllPath: path.resolve(__dirname, '../dist/prod-dll/'),
    dllEntry: {
        vendor: [
            'react', 'react-dom',
            'mobx', 'mobx-react',
            'react-router-dom', 'react-router-config'
        ]
    }
};



module.exports = config;