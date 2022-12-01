//使用node-schedule模块设置每天定点执行一个方法
const schedule = require('node-schedule')

let scheduleJOB = ()=>{
    // schedule.scheduleJob('* * 8 * * *',()=>{
    //     console.log('scheduleCronstyle:' + new Date());
    // });
    schedule.scheduleJob({hour:8},()=>{
        console.log('scheduleCronstyle:' + new Date());
    });
}


module.exports = scheduleJOB