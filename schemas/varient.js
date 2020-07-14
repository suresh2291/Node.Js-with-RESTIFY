const mongoose = require('mongoose'),
validators = require('mongoose-validators')

const VariationSchema = mongoose.Schema({
    productId:{
    type:Schema.Types.ObjectId, ref: 'Product'
    },
    imagePath:{
    type:String,
    Svalidate: validators.isURL({message:"url is wrong"})
    },
    color: {
        type: String
    },
    size: {
        type: String
    },
    quantity: {
        type: Number
    },
    title: {
        type: String
    },
    price: {
        type: Number
    }
}, { collection: 'varient' })

module.exports = mongoose.model('Variation', VariationSchema)