const mongoose = require('mongoose'),
      validators = require('mongoose-validators')

const categorySchema = mongoose.Schema({
    storeName:{type:String,required:true},
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    parent: {
        type:String,
        required:[true,"Name is required"]
    },
    category: {
        type:String,
        required:[true,"Name is required"],
        unique:true
    }
},{collection:'category'})

module.exports = mongoose.model('Category', categorySchema)