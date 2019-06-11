const path = require('path');
const utils = require('../../utils');

module.exports = function (plop, data) {
    function prompts(inquirer) {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'compName',
                    message: '模块的名称是什么？'
                }
            ])
            .then(inputs => {
                console.log(inputs, 'inputs')
                return inputs;
            })
    }


    plop.setGenerator('module', {
        prompts,
        actions: function (inputs) {
            const compPath = '{{currentPath}}/{{compClass}}';
            data.compName = inputs.compName;

            let actions = [
                {
                    type: 'add',
                    data,
                    path: path.join(data.currentPath, inputs.compName + 'Module', '/index.js'),
                    template: utils.template(__dirname, 'index.js')
                },
                {
                    type: 'add',
                    data,
                    path: path.join(data.currentPath, inputs.compName + 'Module', './routers.js'),
                    template: utils.template(__dirname, 'routers.js')
                },
                {
                    type: 'add',
                    data,
                    path: path.join(data.currentPath, inputs.compName + 'Module', './store.js'),
                    template: utils.template(__dirname, 'store.js')
                },

                {
                    type: 'add',
                    data,
                    path: path.join(data.currentPath, inputs.compName + 'Module', './IndexPage/index.js'),
                    template: utils.template(__dirname, './IndexPage/index.js')
                },
                {
                    type: 'add',
                    data,
                    path: path.join(data.currentPath, inputs.compName + 'Module', './IndexPage/store.js'),
                    template: utils.template(__dirname, './IndexPage/store.js')
                },
                {
                    type: 'add',
                    data,
                    path: path.join(data.currentPath, inputs.compName + 'Module', './IndexPage/style.less'),
                    template: utils.template(__dirname, './IndexPage/style.less')
                }
            ];

            return actions;
        }
    })
}