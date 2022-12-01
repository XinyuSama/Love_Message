const Router = require('koa-router');

//请求进来后 先通过中间件处理，比如鉴别权限等等
// 中间件

// 前缀：
const deportmentRouter = new Router({
    //baseurl
    prefix: '/api'
});

module.exports = deportmentRouter