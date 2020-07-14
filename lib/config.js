const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    key_id: process.env.YOUR_KEY_ID,
    secret_key: process.env.YOUR_KEY_SECRET
  };