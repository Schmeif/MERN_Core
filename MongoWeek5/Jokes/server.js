const express = require('express')
const app = express()
const port = 8000


require('./config/jokes.config')

app.use(express.json())
app.use(express.urlencoded({extended:true}))


const Routes = require('./routes/jokes.routes')
Routes(app)

app.listen(port, ()=>{
    console.log(`server is up and running on port ${port}`)
})