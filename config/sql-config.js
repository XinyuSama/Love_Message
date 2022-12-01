class SqlConfig{
    addSql(tableName){
        return `INSERT INTO ${tableName} (massage) VALUES (?);`
    }
    deleteSql(tableName){
        return `DELETE FROM ${tableName} WHERE id=?;`
    }
    getSql(tableName){
        return `SELECT * from ${tableName};`
    }
}

module.exports = new SqlConfig()