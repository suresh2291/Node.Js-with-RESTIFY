
const Logger = require('../lib/logger'),
logger = new Logger('department'),
Department = require('../schemas/department')

module.exports = (server) =>{
    logger.info('department HTTP Methods')
// server.post('/department',(req,res,next)=>{
//     const data = req.body
//     Department.create({storeName:data.storeName, name:data.name, category:data.category})
//     .then((createDept)=>{
//         logger.info(`data created`)
//         logger.setLogData(createDept)
//         res.send(201,{error:false, message:`Department ${data.name} Created`})
//     })
//     .catch((error)=>{
//         logger.error(error)
//         res.send(400,{error:true, message:error})
//     })
// })
// server.get('/departments',(req, res, next)=>{
//     console.log('dept name  ',JSON.stringify(req.query.name))
// Department.findOne({name:req.query.name})
// .populate('category')//colletion name
// .then((result)=>{
//    logger.info(`got the data ${result}`)
// res.send(200,{error:false, message:result})
// })
// .catch((error)=>{
//     looger.error('unable to get the data ',error)
// res.send(500,{error:false, message:error})
// })
// })
}