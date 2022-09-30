const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv=require('dotenv')
const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(require('./ROUTER/auth'))
app.get('/', (req, res) => {
    res.send("heello world")
})
dotenv.config({ path: './config.env' })
const PORT = process.env.PORT;
require('./DB/conn')
const User=require('./MODEL/userSchema')
app.listen(PORT, () => {
    console.log(`Your Server starting at 5000`)
})