const express = require("express")
const bodyParser = require("body-parser")
const route = require('./routes/api')

const app = express()

//configure middlewares
app.use(express.urlencoded({ extended: false }))
app.set('views', `${__dirname}/views`)
app.use(express.static(__dirname + "/public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


const port = process.env.port || 4000


app.listen(port,()=>{
    console.log(`app started on port ${port}`)
})