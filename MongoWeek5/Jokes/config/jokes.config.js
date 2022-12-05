const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/Jokes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("Connected To Jokes API DB")
}).catch((err)=>{
    console.log("Something went wrong when trying to connect to the DB", err)
})