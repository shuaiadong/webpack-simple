const path = require('path');
const fs = require('fs');

module.exports = {
    // 模版替换
    template(dirname, fileName) {
        const content = fs
            .readFileSync(
                path.resolve(dirname, fileName)
            )
            .toString();
        return content
            .replace(/\/\* *skip *\*\/[^]+?\/\* *skip *\*\//g, '')
            .replace(/\/\* *plop/g, '')
            .replace(/plop *\*\//g, '')
            .replace(/\/\* *(\{\{[^]+?\}\};?) *\*\//g, '$1')
    }
}