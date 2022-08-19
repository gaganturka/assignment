const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'name is required',
        trim: true
    },
    image: {
        type: String,
    },
 
}, { timestamps: true })

module.exports = new mongoose.model("image", imageSchema)