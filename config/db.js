const mongoose = require('mongoose');
const colors = require('colors');

module.exports.dbConnection = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_URI);
    //if all are ok
    console.log('connected to Mongodb successfully ...'.green.underline.bold);
  } catch (err) {
    console.log(`{
            error : ${err},
            object: while opening a connection to db
        }`);
  }
};
