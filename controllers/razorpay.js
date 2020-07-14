const dotenv = require("dotenv");
const path = require('path')
//attch the .env directory to access the evnironment variables
dotenv.config({path: path.join(__dirname, '../.env')})
const YOUR_KEY_ID = process.env.YOUR_KEY_ID;
const YOUR_KEY_SECRET = process.env.YOUR_KEY_SECRET;

const Razorpay = require('razorpay')
  module.exports = (server)=>{
    var instance = new Razorpay({
        key_id: YOUR_KEY_ID,
        key_secret: YOUR_KEY_SECRET,
        headers: {
            "X-Razorpay-Account": 'FCN2vDPFEWI2E9'
          }
      })

      server.post('/createorder', (req, res, next)=>{
        const data = req.body
        const options = {amount:data.amount, currency:data.currency, receipt:data.receipt, payment_capture:0, notes:data.notes}
        instance.orders.create(options).then((result)=>{
            res.send(200,{error:false, message:'Success', data:result})
        }).catch((error)=>{
            res.send(400,{error:true, message:'fail', data:error})
        })
      })

      server.get('/orders',(req,res,next)=>{
          const data = req.query.orderid
          instance.orders.fetch(data).then((result)=>{
            res.send(200,{error:false, message:'Success', data:result})
        }).catch((error)=>{
            res.send(400,{error:true, message:'fail', data:error})
        })
      })
  }
