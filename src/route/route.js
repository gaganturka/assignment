const express = require('express')
const imageController = require("../controller/imageController")

const router = express.Router()

router.get("/test", (req, res) => {
    res.status(200).send({ status: true, message: "it's working" })
})

router.post("/upload", imageController.uploadImage)
router.get("/image/:imageId", imageController.getDetails)

module.exports = router