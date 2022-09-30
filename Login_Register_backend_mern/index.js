const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
mongoose.connect("mongodb://localhost:27017/Node_project", {
    //mongodb+srv://Asikur22:1234@cluster0.n381yhm.mongodb.net
    //this is mongodbLink
    usenewUrlParser: true,
    useUnifiedTopology:true
}, () => {
    console.log("db connected")
})
const userShema = {
    name: String,
    email: String,
    password: String,
    reEnterPassword:String
}
const User=mongoose.model("Users",userShema)
app.get('/', (req, res) => {
    res.send("Gettin started")
})
app.post('/register', (req, res) => {
    const { name, email, password, reEnterPassword } = req.body;
    const user = new User({
        name, email, password, reEnterPassword
    })
    user.save()
    res.redirect('/login')
})
app.post('/login', (req, res) => {
    const { name,password } = req.body;
    const user = new User({
        name, password
    })
    user.save()
    res.redirect('/')
})
app.listen(8000, () => {
    console.log("started")
})