const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/ProductManagerDB', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Connected to Product Manager DB")
}).catch((err)=>{
    console.log
})