const mongoose = require('mongoose'),
      validators = require('mongoose-validators'),
      Schema = mongoose.Schema;
const departmentSchema = mongoose.Schema({
    storeName:{type:String,required:true},
    name:{
        type:String,
        required:true,
        unique:true
    },
    category:{
       type:Schema.Types.ObjectId, ref: 'Category',
       unique:true
    }
}, { collection: 'department' }) 

module.exports = mongoose.model('Department', departmentSchema)