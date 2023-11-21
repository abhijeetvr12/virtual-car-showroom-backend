const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://abhijeetvr12:uMMvJry2eYyNQAMC@cluster0.iqpesww.mongodb.net/?retryWrites=true&w=majority'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}