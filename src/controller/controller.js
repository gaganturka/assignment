const { redirect } = require('express/lib/response');
const { exists } = require('../model/schema');
const schema = require('../model/schema')

console.log(__dirname);
const createProduct = async (req, res) => {
  
    try{
    const requestBody = req.body
  
  
    const {image, price, description,size,title,isFreeShipping }= requestBody

    if(!validation.isValid(image)){
        return res.status(400).send({status : false, message : 'URL should be a valid' })       
    }
    if(!validation.isValid(price)){
        return res.status(400).send({status : false, message : 'please enter a valid price' })       
    }
    if(isNaN(price) ){
        return res.status(400).send({status : false, message : 'please enter a valid price amount'})
    }

    if(!validation.isValid(description)){
        return res.status(400).send({status : false, message : 'please enter a valid description' })       
    }

    if(!validation.isValid(size)){
        return res.status(400).send({status : false, message : 'please enter a valid size' })       
    }
    if(['M','L','XL'].indexOf(size.toUpperCase()) == -1){
        return res.status(400).send({status : false, message : 'please enter a valid size'})
    }

    if(!validation.isValid(title)){
        return res.status(400).send({status : false, message : 'please enter a valid title' })       
    }

    if(!validation.isValid(isFreeShipping)){
        return res.status(400).send({status : false, message : 'please choose a valid value of isFreeshipng' })       
    }

    if(['TRUE','FALSE'].indexOf(isFreeShipping.toUpperCase()) == -1){
        return res.status(400).send({status : false, message :  'please enter a boolean value in isFreeShipping'})
    }
    
    const product =await schema.create(requestBody)
   if(product){
       return res.send(product)

}
    
 
} catch(error){
    console.log(error);
    return res.status(500).send({status : false, message : error})

}

}


// const getData = async (req,res)=> {
//     const data = await schema.find()
//   res.send(data)
// }
module.exports = {createProduct}
// module.exports.getData = getData