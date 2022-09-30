const mongoose = require('mongoose');
const DB = process.env.DATABASE;
mongoose.connect(DB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("connection Established")
    }).catch((err) => {
        console.log("no Connection Established")
    })