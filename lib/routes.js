//const dbtest = 
const Logger = require('../lib/logger'),
    logger = new Logger('routes')
module.exports = (server) =>{
    logger.info(`routes`)
    require('../controllers/users') (server)
    require('../controllers/category') (server)
    require('../controllers/department')(server)
    require('../controllers/product')(server)
    require('../controllers/razorpay')(server)
}