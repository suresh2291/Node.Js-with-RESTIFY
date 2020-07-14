const dotenv = require('dotenv')
dotenv.config()
// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// // Connection URL
// const url = 'mongodb://localhost:27017';

// // Database Name
// const dbName = 'logistics';

// // Create a new MongoClient
// const connection = new MongoClient(url,{ useUnifiedTopology: true });

// // Use connect method to connect to the Server
// connection.connect(function(err) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
// });
// module.exports = connection.db(dbName);
const mongoose = require('mongoose')
Url = process.env.MONGOURL;
mongoose.connect(Url, { useUnifiedTopology: true, useNewUrlParser: true },function(error){
  if(error) throw error
    console.log(`connect mongodb success`);
});
module.exports = mongoose