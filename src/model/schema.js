const mongoose = require('mongoose')
//ngrock
const productSchema = new mongoose.Schema({
    image: {
        type: String,
        requied : true,
        trim: true
    },
    price: {
        type: Number,
        requied : true,
        trim: true
    },
    size : {
        type : String,
        enum : ['M','L','XL'],
        requied : true
    },
    title : {
        type :String,
        requied : true,
        trim : true
    },
    description : {
        type : String,
        trim : true
    },
    isFreeShipping : {
        type : Boolean
    },
    isDeleted : {
        type : Boolean,
        default : false
    }

},{timestamps: true})

module.exports = mongoose.model('product', productSchema)