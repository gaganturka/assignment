const express = require('express')
const route  = require('./route/routes')
const mongoose = require('mongoose')


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))

mongoose.connect("mongodb+srv://mongodoadmin:adJz6418CgT9053w@db-mongodb-nyc3-07198-fd3c1edd.mongo.ondigitalocean.com/admin?authSource=admin&replicaSet=db-mongodb-nyc3-07198&readPreference=primary&ssl=true&tlsCAFile=C%3A%5CUsers%5CAWS8%5CDownloads%5Cca-certificate+%281%29.crt")

.then(()=>{
    console.log('MongooDb is connected');
})

.catch((err)=> {
    console.log(err);
})

app.get('/', (req,res) => {
    const query= req.query
    console.log(query);
    res.send('server setUp')
    
})
app.use('/', route)
app.listen(3000, ()=>{
    console.log('express app running on port 3000');
})
