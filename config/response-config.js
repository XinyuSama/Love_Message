// 返回值封装
const config = require('./env-config')
class ResponseConfig{
    addResponse(mysqlConnectionRes){
        if (mysqlConnectionRes.affectedRows === 1){
            return true
        }else {
            return false
        }
    }
}

module.exports = ResponseConfig