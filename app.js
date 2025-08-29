//Project (user authenticated drive)

const express = require('express')
const server = express()
//for MONGO_URL
const dotenv = require('dotenv')

const cookieParser = require('cookie-parser')

dotenv.config()

const connectToDb = require("./config/db")
connectToDb()

server.use(express.json())
server.use(express.urlencoded({extended: true}))

server.use(cookieParser())

//for routing
const userRout = require('./routes/user.routes') 
server.use('/user',userRout)

const indexRout = require('./routes/index.routes')
server.use('/',indexRout)



server.set("view engine","ejs")



const PORT = process.env.PORT || 3000;

// For local development
if (process.env.NODE_ENV !== 'production') {
    server.listen(PORT, ()=>{
        console.log(`Server running on PORT: ${PORT}`)
    })
}

// Export for Vercel
module.exports = server;