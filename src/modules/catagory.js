const mongoose = require('mongoose')
const {schema} = mongoose

const catagorySchema = new schema ({
    name : {
        type : String
    },
    description : {
        type : String
    }
},{timestamps : true})

module.exports = mongoose.model('catagory', catagorySchema )
