const express = require('express')
const connectToMongo = require('./db')


connectToMongo()
const app=express();
const port = 5000
//beacuse we are using req.body in a
app.use(express.json())

//Available Routes

app.use('/api/auth',require('./routes/auth'))
// app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})