const Logger = require('../lib/logger'),
      logger = new Logger('product'),
      moment = require('moment'),
      Product = require('../schemas/product')

      module.exports = (server)=>{
          server.post('/product', (req, res, next)=>{
              const data = req.body
                 Product.create({
                          storeName:data.storeName,
                          title:data.title,
                          imagePath:data.imagePath,
                          description:data.description,
                          category:data.category,
                          price:data.price,
                          quantity:data.quantity,
                          size:data.size,
                          color:data.color,
                          status:data.status,
                          delivery:data.delivery,
                          createdDate:moment.unix,
                          modifiedDate:null
                 })
                 .then((product)=>{
                   logger.info(`Product Created ${product}`)
                   res.send(201,{error:false,message:"product Created"})
                 })
                 .catch((error)=>{
                   logger.error(`Error ${error}`)
                   res.send(500,{error:true, message:error})
                 })
          })
      }