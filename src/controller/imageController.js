const mongoose = require('mongoose')
const imageModel = require("../model/imageSchema")
const aws = require("./aws")


const isValidBody = (data) => {
    if (Object.keys(data).length === 0) {
        return false
    }
    return true
}

const isValid = (value) => {
    if (typeof (value) == "undefined" || value == null) return false
    if (typeof (value) == "string" && value.trim().length === 0) return false
    return true
}

const checkQueryParam = (value) => {
    if (Object.keys(value).length != 0) {
        return false
    }
    return true
}

const isValidObjectId = (value) => {
    return mongoose.Types.ObjectId.isValid(value)

}

const isValidString = (value) => {
    return /^[a-zA-Z -]+$/.test(value)
}


const uploadImage = async (req, res) => {
    try {
        const requestBody = req.body
        const queryParam = req.query
        if (!isValidBody(requestBody)) {
            return res.status(400).send({ status: false, message: "please fill all required fields" })
        }

        if (!checkQueryParam(queryParam)) {
            return res.status(404).send({ status: false, message: 'page not found' })
        }

        const { name} = requestBody

        if (!isValid(name)) {
            return res.status(400).send({ status: false, message: "please enter your name" })
        }

        if (!isValidString(name)) {
            return res.status(400).send({ status: false, message: "please enter alphabats only in name" })
        }


        let files = req.files
        if (files && files.length > 0) {
            let uploadedFileURL = await aws.uploadFile(files[0])
            requestBody.image = uploadedFileURL
        } else {
            return res.status(400).send({ status: false, message: "please uploade a Image" })
        }

        const createData = await imageModel.create(requestBody)
        return res.status(201).send({ status: true, message: 'Image uploaded successfully', data: createData })
    } catch (error) {
        console.log(error);
        return res.status(500).send({ status: false, message: error.message })
    }
}

const getDetails = async function (req, res) {
    try {
        let id = req.params.imageId;

        if (!(isValid(id) && isValidObjectId(id))) {
            return res.status(400).send({ status: false, message: "Id not valid" })
        }

        const queryParam = req.query
        if (!checkQueryParam(queryParam)) {
            return res.status(404).send({ status: false, message: 'page not found' })
        }

        let getImage = await imageModel.findById({_id : id});
        if (!getImage) {
            return res.status(404).send({ status: false, message: "image Not Found" })
        }
        return res.status(200).send({ status: true, message: "Image details", data: getImage })
    } catch (err) {
        console.log(err);
        return res.status(500).send({ status: false, error: err.message });
    }
}

module.exports.uploadImage = uploadImage
module.exports.getDetails = getDetails