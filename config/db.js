const mongoose = require('mongoose')

function connectToDb() {
    //not directly providing path to connect
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("Connected to DB")
    })
}

module.exports = connectToDb