const daoAddData = require('../dao/dao.addData')
const response = require('../../config/response-config')
const config = require('../../config/env-config')
class ServiceAddData {
    async addData(ctx){
        try {
            let {message,tableName} = ctx.request.body
            let res = await daoAddData.addData(message,tableName)
            // response(res)
        }
        catch (e) {
            ctx.body = config.ERROR
        }
    }
}
module.exports = new ServiceAddData()