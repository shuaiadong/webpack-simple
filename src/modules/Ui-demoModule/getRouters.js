/** require.context(目录,是否递归搜索,筛选器)参数只有静态常量有效
 *  resolve {Function} -接受一个参数request,request为test文件夹下面匹配文件的相对路径,返回这个匹配文件相对于整个工程的相对路径
    keys {Function} -返回匹配成功模块的名字组成的数组
    id {String} -执行环境的id,返回的是一个字符串,主要用在module.hot.accept,应该是热加载?

 *
 */
export const getDemoRoutes = function() {
    let route = require.context('src', true, /\/_?demo(-[\w-]*)?\/index\.js$/);
    return route.keys();
};
