const express = require('express')
const product = require('../controller/controller')
const router = express.Router()
const schema = require('../model/schema')
router.post('/registerProduct', product.createProduct)

router.get('/hi', (req,res) => {
    res.send('jhkh')
})


const arr = []
let i=0
router.post('/create', (req,res)=>{
   const data = (req.body);
   data.id = i
   i++
 
   arr.push(data)
   res.send(arr)
})

router.post('/update', (req,res) =>{
    const id = req.body.id
    arr[id] = req.body
  
 res.send('data updated')
   
} )

router.get('/user',async function(req, res) {

    const data = await schema.find()
      res.send(data)
      console.log('hit');
      
})

router.post('/updatePage' , async function(req,res){

    const requestBody = req.body
    // console.log(requestBody);

    
    let condition = requestBody._id[0]
    let field = requestBody.field
    let value = requestBody._id[1]
    console.log(condition,field,value);
    const update = await schema.findByIdAndUpdate({_id : condition}, {field : value},{new : true})
    res.send(update)
})









    
// console.log(data.map(
//     (hi) => (hi["size"])))
    
// const json = [
//     {
//       "userId": 1,
//       "id": 1,
//       "title": "delectus aut",
//       "completed": true
//     },
//     {
//       "completed": false,
//       "userId": 1,
//       "title": "quis ut",
//       "id": 2,
//       "extraProp": "test"
//     },
//   ];
  
//   const headers = Array.from(new Set(json.reduce((acc, cur) =>
//     [...acc, ...Object.keys(cur)], [])));
  
//   const data = [headers];
//   const defaultValue = 'NA';
  
//   json.forEach(item => {
//     data.push(headers.reduce((acc, header) =>
//       acc.push(item.hasOwnProperty(header) ? item[header] : defaultValue) && acc, []));
//   });
//  res.send(data)
// })



module.exports = router