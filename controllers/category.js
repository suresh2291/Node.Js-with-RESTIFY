
const Logger = require('../lib/logger'),
      logger = new Logger('category'),
      moment = require('moment'),
      categoryModel = require('../schemas/category')

module.exports = (server) =>{
    server.post('/category',(req,res,next)=>{
        data = req.body
        categoryModel.create({
            storeName:data.storeName,
            name:data.name,
            parent:data.parent,
            category:data.category
        })
        .then((categoryData)=>{
        logger.info(`category created ${categoryData}`)
        res.send(201,{error:false, message:'Category Created'})
        })
        .catch((error)=>{
           logger.error(`Error ${error}`)
           res.send(400,{error:true, message:'Category already exits', data:error})
        })
    })

    server.get('/departments', (req, res, next)=>{
        data = req.query
        logger.info('Department details')
        categoryModel.find({storeName:data.storeName, name:data.name})
        .then((departments)=>{
            logger.info(departments)
            res.send(200,{error:false, message:'department found', data:departments})
        })
        .catch((error)=>{
            logger.error(error)
            res.send(500,{error:true, message:'error in getting departments', data:error})
        })
    })

    server.get('/department/category', (req, res, next)=>{
        data = req.query
        logger.info('Department details')
        categoryModel.find({storeName:data.storeName, name:data.name, parent:data.parent})
        .then((departments)=>{
            logger.info(departments)
            res.send(200,{error:false, message:'department found', data:departments})
        })
        .catch((error)=>{
            logger.error(error)
            res.send(500,{error:true, message:'error in getting departments', data:error})
        })
    })
}