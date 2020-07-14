
const Logger = require('../lib/logger'),
logger = new Logger('dbtest'),
userModel = require('../schemas/user'),
Joi = require('@hapi/joi')

module.exports = (server) =>{
    server.post('/suresh', (req,res,next)=>{
        const validate = userModel.validate(req.body)
        if(validate.error){
            res.send(          RESTError('BadRequestError', validate.error.details[0].context.label))
        } else{
            logger.setLogData(req.body)
            logger.info("Request received at /suresh ", req.body)
        }
       
    })
}