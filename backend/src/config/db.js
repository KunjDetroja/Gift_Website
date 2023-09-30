const mongoose = require("mongoose")
const mongoDbUrl='mongodb://127.0.0.1:27017/Gift?retryWrites=true&w=majority'

// const mongoDbUrl='mongodb+srv://codewithzosh:lognBCBmtWNPjrKC@cluster0.wvt9jpw.mongodb.net/?retryWrites=true&w=majority'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}