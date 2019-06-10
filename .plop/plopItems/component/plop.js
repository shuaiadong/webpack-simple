const path = require('path');
const utils = require('../../utils');

module.exports = function (plop, data) {
    function prompts(inquirer) {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'compName',
                    message: '组件的名称是什么？'
                }
            ])
            .then(inputs => {
                console.log(inputs, 'inputs')
                return inputs;
            })
    }


    plop.setGenerator('component', {
        prompts,
        actions: function (inputs) {
            const compPath = '{{currentPath}}/{{compClass}}';
            data.compName = inputs.compName;

            let actions = [
                {
                    type: 'add',
                    data,
                    path: path.join(data.currentPath, inputs.compName, '/index.js'),
                    template: utils.template(__dirname, 'index.js')
                }
            ];

            return actions;
        }
    })
}