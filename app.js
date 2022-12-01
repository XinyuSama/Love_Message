const Koa = require("koa");
const cors = require('koa2-cors');
const useAddDataRoutes = require('./src/router/router.addData');
const bodyParser = require('koa-bodyparser');
const config = require('./config/env-config')
const app = module.exports = new Koa();

app.use(bodyParser());
app.use(cors());
app.use(useAddDataRoutes.routes());
console.log("服务开启");
if (!module.parent) {
    app.listen(config.APP_PORT, function () {
        console.log(`koa server running at port ${config.APP_PORT}`);
    });
}
module.exports = app;