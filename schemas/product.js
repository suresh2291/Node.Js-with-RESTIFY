const mongoose = require('mongoose'),
validators = require('mongoose-validators')

const productSchema = mongoose.Schema({
    storeName:{type:String,required:true},
    title:{
        type:String,
        required:[true,'product name is required']
       
    },
    imagePath:[{
        type:String,
        validate: validators.isURL({message:"url is wrong"})
    }],
    description:{
        type:String
    },
    category:{
        type:String
     },
    price:{
        type:String,
        required:[true,'price cannot be empty']
    },
    color:{
        type:String,
        default: null
    },
    size:{
        type:String,
        default: null
    },
    quantity:{
        type:String,
        required:[true, 'quantity cannot be empty']
    },
    status:{
        type:String,
        default: null
    },
    delivery:{
        type:String,
        default: null
    }
}, { collection: 'product' })

module.exports = mongoose.model('Product', productSchema)