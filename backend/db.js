const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/notebook?directConnection=true&tls=false&readPreference=primary&appname=MongoDB%20Compass"

const connectToMongo =()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo successfully");
    })

}
module.exports = connectToMongo();