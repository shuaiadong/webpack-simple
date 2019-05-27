### 提交时检测commit规范
https://blog.csdn.net/wei371522/article/details/84070803
cnpm i @commitlint/config-angular @commitlint/cli -D
npm install --save-dev husky

commitlint.config.js
module.exports = {extends: ['@commitlint/config-angular']};

package.json
 "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }

### changlog
 npm install -g conventional-changelog

 conventional-changelog -p angular -i CHANGELOG.md -s -r 0 && git add CHANGELOG.md

 配置并生成changelog 文件

### commit 前 的 代码规范检查 pre-commit
https://www.jianshu.com/p/cdd749c624d9
cnpm i --save-dev  lint-staged
npm i --save-dev --save-exact prettier
 "lint-staged": {   // lint-staged 配置
        "app/**/*.{js,jsx}": [
            "prettier --tab-width 4 --write",
            "eslint --fix",
            "git add"
        ]
    },
npm install --save-dev eslint
npm install --save-dev eslint babel-eslint
node_modules/.bin/eslint --init
### 生成模版文件

 ### todo
 版本号 自增 and 多版本