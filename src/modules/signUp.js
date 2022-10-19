const mongoose = require('mongoose')
const {Schema} = mongoose

const login = new Schema ({
    name : {type : String},
    email : {type : String, required : true},
    password : {type : String , required : true}

}, {timestamps : true})

module.exports = mongoose.model('login', login)