const mongoose = require('mongoose')
const app = require('./app')

const { MONGO_URI } = process.env;


mongoose.connect(MONGO_URI).then(() => {
    console.log("Connected");
    app.listen(3000)
}).catch(err => {
    console.log(err)
})
