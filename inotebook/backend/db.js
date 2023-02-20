const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
const mongoURI="mongodb://127.0.0.1:27017/iNotebook"

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log('Connected to Database')
    })
}
module.exports = connectToMongo;