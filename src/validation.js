const mongoose = require('mongoose')

const isValid = (value) =>{
    if(typeof value == 'undefined' || value == 'null') return false
    if (typeof value == 'string' && value.length==0) return false
    return true
}

const queryParams = (value) =>{
    if(Object.keys(value).length != 0) {
        return false
    }
    return true
}

const isValidBody = (value) =>{
    if(Object.keys(value).length == 0) {
        return false
    }
    return true
}

const isValidObjectId = (value) => {
    return mongoose.Types.ObjectId.isValid(value)
}

const isValidString = (value) =>{
    return  /^[a-zA-Z]+$/.test(value)
}

var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
const isValidEmail = (value)=>{
  return pattern.test(value)
}

// // Extract the string into month, date and year  
const validateDate = (value) => {
    return /^\d{2}([./-])\d{2}\1\d{4}$/.test(value)
}

const isValidPw = (value)=>{
    return  /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(value)
}

module.exports= {
    isValid,
    isValidBody,
    isValidObjectId,
    queryParams,
    isValidString,
    isValidEmail,
    validateDate,
    isValidPw
}