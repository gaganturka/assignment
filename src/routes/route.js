const express = require('express')
const signUpController = require('../controller/signUp')
const logIController = require('../controller/logIn')




const router = express.Router()

router.route("/").get(()=>{
    console.log('print');
})

router.route("/").post(signUpController.signUp)
router.route('/log').post(logIController.logInn)
router.route("/details").post(logIController.userDertails)
router.route("/update").post(logIController.updateData )

module.exports = router