class ServiceGetData {
    async test(ctx){
        try {
            let req = ctx.query
            ctx.body = {
                test:req
            }
        }catch (e) {
            console.log(e);
        }
    }
}
module.exports = new ServiceGetData()