const mongoose = require('mongoose')
const mongooseUrl = "mongodb+srv://sonu517825:m0ww1dng9uqrz0ge@cluster0.wgtiy.mongodb.net/Project_Group_3_Final?retryWrites=true&w=majority";
const connectToMongoose = () => {
    mongoose.connect(mongooseUrl, () => {
        console.log('MongoDb is connected');
    })
}
module.exports = connectToMongoose