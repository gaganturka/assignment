const signUpModule = require('../modules/signUp')
const Joi = require('@hapi/joi')
const universalFunction = require('../universalFunction')



const signUp =async (req, res)=> {
  try{
    const requestBody = req.body
    const {name, email, password} = requestBody

    const JoiSchema = Joi.object({
        name : Joi.string().required(),
        email : Joi.string().email().required(),
        password : Joi.number().required()
    })

   const data = await universalFunction.validateRequest(requestBody, JoiSchema, res)
  if(data.message){
    return res.json(data)
  }

  const result =await signUpModule.create(requestBody)

  return universalFunction.sendSuccess({
    "data" : result
  }, res)

} catch(err){
  return res.send(err)
}}



module.exports ={
    signUp
}
