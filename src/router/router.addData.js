const RouterAddData = require('../../config/router-config')

const {
    addData
} = require('../service/service.addData');



RouterAddData.post("/addData",addData)


// 导出
module.exports = RouterAddData
