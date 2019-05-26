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