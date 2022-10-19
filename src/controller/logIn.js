const Joi = require('@hapi/joi')
const universalFunction = require('../universalFunction')
const logInSchema = require('../modules/signUp')



const logInn = async(req, res) =>{
    try{
    console.log(req.body);
    const {email, password} = req.body


    const data = await logInSchema.findOne({email, password})
    if(data) {
        console.log(data);
        return res.send(data)
    }else{
        return universalFunction.sendError()
    }

    
    } catch(err) {
        return res.send(err)
    }
    
}


const userDertails = async(req, res) =>{
    try{
        const _id = req.body.id

const data = await logInSchema.findOne({_id})
if(data){
    return res.send(data)
}else{
    return universalFunction.sendError()
}


    } catch(err){
        return res.send(err)
    }
}

const updateData = async(req, res) => {
   const {id, name, email, password} = req.body

   const update = await logInSchema.findOneAndUpdate({_id : id}, {name, email, password}, {new: true})
   if(update){
    return res.send(update)

}


}

module.exports ={
    logInn,
    userDertails,
    updateData
}