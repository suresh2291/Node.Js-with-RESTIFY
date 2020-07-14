const mongoose = require('mongoose')
      validators = require('mongoose-validators'),
      Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:[true,'first name is required'],
        validate: validators.isAlpha({message:"first name should contain alphabets"})
    },
    lastName:{
        type:String,
        required:[true,'last name is required'],
        validate: validators.isAlpha({message:"last name should contain alphabets"})
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true,
        validate: validators.isEmail({message:"In valid email address"})
        
    },
    password:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        validate: {
            validator: function(v) {
              return /^\d{10}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
          },
          required: [true, 'User phone number required']
    },
    address:{
        type:String,
        required:[true, 'Address Required ']
    },
    city:{
        type:String,
        required:[true, 'City Required ']
    },
    state:{
        type:String,
        required:[true, 'State Required ']
    },
    zipCode:{ 
        type:String,
        validate: {
        
            validator: function(v) {
              return /^\d{6}$/.test(v);
            },
            message: props => `${props.value} is not a valid Zip Code!`
          },
          required: [true, 'Pin Code Required ']
    },
    landmark:{
        type:String,
        default: null
    },
    hashPassword:{
    type:String
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    isActive:{
        type:Boolean,
        default:false
    },
    products:{type:Schema.Types.ObjectId, ref: 'Product'}
}, { collection: 'users' })
module.exports = mongoose.model('User', userSchema)