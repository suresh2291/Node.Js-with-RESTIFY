const Logger = require('../lib/logger'),
    logger = new Logger('User'),
    bcrypt = require('bcrypt'),
    moment = require('moment'),
    userModel = require('../schemas/user'),
    nodemailer = require("nodemailer"),
    dotenv = require('dotenv')
    dotenv.config()
module.exports = (server) => {
    server.post('/user', (req, res, next)=>{
        let mailTransport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        })
        const data = req.body
        logger.setLogData(data)
        bcrypt.hash(data.password , 10, function(err, hash) {
            if(err){
              logger.error(err)
              res.send(500,({error:true, message:'Internal Server Error'}))
            }else{
                logger.info('inserting into database')
                userModel.create({
                    firstName:data.firstName,
                    lastName:data.lastName,
                    email:data.email,
                    password:data.password,
                    phoneNumber:data.phoneNumber,
                    address:data.address,
                    city:data.city,
                    state:data.state,
                    zipCode:data.zipCode,
                    landmark:data.landmark,
                    hashPassword:hash,
                    createdDate:moment.unix(),
                    modifiedDate:null
                })
                .then((userData)=>{
                    logger.info(userData)
                    let mailOptions = {
                        from: "COMPANY XYZ <mhalim_box9@gmail.com>", // sender address
                        to: data.email, // list of receivers
                        subject: "Company XYZ login password.", // Subject line
                        text: "Hi User, \n\nYou have successfully signup with us. For login your user name and password given below.\nUser Name : " + data.email + "\nPassword : " + data.password +
                            "\n\nThanks and Regards,\nTeam Terminal2", // plain text body
                    };
                    mailTransport.sendMail(mailOptions, function(error, response) {
                        logger.error(error)
                        if (error) {
                            console.log('Error in Sending Mail: ', error);
                        } else {
                            console.log("Email sent successfully", response);
                        }
                    })
                    res.send(201,{error:false, message:'data created'})
                })
                .catch((error)=>{
                    if(error.name == "MongoError" && error.code == 11000){
                        res.send(400,{error:true, message:'check your inputs', data:'Email Id already exists'})
                    }else{
                        res.send(400,{error:true, message:'check your inputs', data:error})
                    }
                })
            }
        });
    })
}