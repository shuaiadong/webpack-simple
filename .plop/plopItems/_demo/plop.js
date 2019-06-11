const path = require('path');
const utils = require('../../utils');

module.exports = function (plop, data) {
    function prompts(inquirer) {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'compName',
                    message: 'demo名称是什么？'
                }
            ])
            .then(inputs => {
                console.log(inputs, 'inputs')
                return inputs;
            })
    }


    plop.setGenerator('_demo', {
        prompts,
        actions: function (inputs) {
            const compPath = '{{currentPath}}/{{compClass}}';
            data.compName = inputs.compName;

            let actions = [
                {
                    type: 'add',
                    data,
                    path: path.join(data.currentPath, '_demo/index.js'),
                    template: utils.template(__dirname, 'index.js')
                },
                {
                    type: 'add',
                    data,
                    path: path.join(data.currentPath, '_demo/store.js'),
                    template: utils.template(__dirname, './store.js')
                },
                {
                    type: 'add',
                    data,
                    path: path.join(data.currentPath, '_demo/style.less'),
                    template: utils.template(__dirname, './style.less')
                }
            ];

            return actions;
        }
    })
}