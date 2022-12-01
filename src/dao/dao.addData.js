const MysqlConnectionAddData = require('../../config/mysql-config');
const Sql = require('../../config/sql-config')
class DaoAddData{

    async addData(message,tableName){
        try {
            const sql = Sql.addSql(tableName) // 返回sql语句字符串
            let [res] = await MysqlConnectionAddData.execute(sql,[message])
            return res
        }catch (e) {
            return e
        }
    }
}
module.exports = new DaoAddData()
