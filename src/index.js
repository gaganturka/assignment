const express = require('express')
const cors = require('cors')
const app = express()
const login = require('../src/routes/route')
const connectToMongoose =require('./config')


// const router = express.Router()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded ({extended : true}))
connectToMongoose()
app.use('/theme',login)
// app.use('/catagory', catagory)


app.listen(process.env.PORT || 5000, function() {
    console.log('connect on port 5000');
})