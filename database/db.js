require('dotenv').config()
const mongoose = require('mongoose')
module.exports =  mongoose.connect(process.env.URI).then((m)=>{
  console.log('db connectado 💻')
  return m.connection.getClient()
}).catch((e)=>console.log('error en la connecion 🤦‍♀️', e))
// module.exports= clientDB  